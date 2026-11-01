#!/usr/bin/env node
/**
 * Materialize temporary, language-focused review views from canonical Code taxonomies.
 * Uses the existing read-only Skills Code -> Markdown generator; does not write to Git.
 *
 * One book / one locale:
 *   node scripts/generate-translation-review-artifacts.mjs --package learningApps/astronomy --locale qm
 * One book / all locales:
 *   node scripts/generate-translation-review-artifacts.mjs --package learningApps/astronomy --all-locales
 * All textbooks / one locale:
 *   node scripts/generate-translation-review-artifacts.mjs --all-packages --locale qm
 * All textbooks / all locales:
 *   node scripts/generate-translation-review-artifacts.mjs --all-packages --all-locales
 *
 * Optional: --out-dir /absolute/path/outside/repository
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import ts from 'typescript';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const learningAppsRoot = path.join(repoRoot, 'learningApps');
const generator = path.join(repoRoot, 'scripts/generate-skills-taxonomy.mjs');

function fail(message) {
  throw new Error(message);
}

function usage() {
  return [
    'Usage: node scripts/generate-translation-review-artifacts.mjs',
    '  (--package learningApps/<textbook> | --all-packages)',
    '  (--locale <language-key> | --all-locales)',
    '  [--out-dir <absolute-or-relative-path-outside-repository>]',
  ].join('\n');
}

function options(argv) {
  const o = { package: null, locale: null, allPackages: false, allLocales: false, outDir: null };
  const seen = new Set();
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--help') {
      process.stdout.write(usage() + '\n');
      process.exit(0);
    }
    if (!['--package', '--locale', '--all-packages', '--all-locales', '--out-dir'].includes(arg)) {
      fail('Unknown option ' + arg + '\n' + usage());
    }
    if (seen.has(arg)) fail('Repeated option ' + arg);
    seen.add(arg);
    if (arg === '--all-packages' || arg === '--all-locales') {
      o[arg === '--all-packages' ? 'allPackages' : 'allLocales'] = true;
    } else {
      const value = argv[++i];
      if (!value || value.startsWith('--')) fail('Missing value for ' + arg);
      o[arg === '--package' ? 'package' : arg === '--locale' ? 'locale' : 'outDir'] = value;
    }
  }
  if (Boolean(o.package) === o.allPackages || Boolean(o.locale) === o.allLocales) fail(usage());
  return o;
}

function unwrap(node) {
  while (node && (ts.isAsExpression(node) || ts.isSatisfiesExpression(node) || ts.isParenthesizedExpression(node))) {
    node = node.expression;
  }
  return node;
}

function supportedLocales() {
  const file = path.join(repoRoot, 'shared/contracts/src/types/languages.ts');
  const ast = ts.createSourceFile(file, fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true);
  let found = null;
  for (const statement of ast.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name) || declaration.name.text !== 'DEFAULT_SUPPORTED_LANGUAGES') continue;
      const value = unwrap(declaration.initializer);
      if (!ts.isArrayLiteralExpression(value)) fail('Unexpected supported languages registry syntax');
      found = value.elements.map(item => {
        const entry = unwrap(item);
        if (!ts.isObjectLiteralExpression(entry)) fail('Unexpected language definition');
        const prop = entry.properties.find(p => ts.isPropertyAssignment(p) && p.name.getText(ast) === 'language');
        if (!prop || !ts.isStringLiteral(prop.initializer)) fail('Missing literal language key');
        return prop.initializer.text;
      });
    }
  }
  if (!found?.length || new Set(found).size !== found.length) fail('Language registry missing or has duplicate keys');
  return found;
}

function textbookPackages(o) {
  if (o.package) {
    if (!/^learningApps\/[a-z][a-z0-9-]*$/i.test(o.package)) {
      fail('Invalid textbook package path: ' + o.package);
    }
    const taxonomy = path.join(repoRoot, o.package, 'data/skills');
    if (!fs.existsSync(taxonomy) || !fs.statSync(taxonomy).isDirectory()) {
      fail('No canonical Code Skills taxonomy: ' + o.package);
    }
    return [o.package];
  }
  const packages = fs.readdirSync(learningAppsRoot, { withFileTypes: true })
    .filter(item => item.isDirectory() && fs.existsSync(path.join(learningAppsRoot, item.name, 'data/skills')))
    .map(item => 'learningApps/' + item.name)
    .sort();
  if (!packages.length) fail('No Code Skills taxonomies found');
  return packages;
}

function safeOutputDir(value) {
  const output = value ? path.resolve(value) : fs.mkdtempSync(path.join(os.tmpdir(), 'svitlo-translation-review-'));
  const relative = path.relative(repoRoot, output);
  if (relative === '' || (!relative.startsWith('..' + path.sep) && relative !== '..' && !path.isAbsolute(relative))) {
    fail('Review artifacts must be outside the repository, never in tracked textbook docs: ' + output);
  }
  if (fs.existsSync(output) && fs.readdirSync(output).length) fail('Output directory must be empty: ' + output);
  fs.mkdirSync(output, { recursive: true });
  return output;
}

function currentCommit() {
  const result = spawnSync('git', ['rev-parse', 'HEAD'], { cwd: repoRoot, encoding: 'utf8' });
  return result.status === 0 ? result.stdout.trim() : null;
}

const args = options(process.argv.slice(2));
const locales = supportedLocales();
const selectedLocales = args.allLocales ? locales : [args.locale];
for (const locale of selectedLocales) {
  if (!locales.includes(locale)) fail('Unsupported language key ' + locale + '. Supported: ' + locales.join(', '));
}
const packages = textbookPackages(args);
const outDir = safeOutputDir(args.outDir);
const manifest = {
  schemaVersion: 1,
  createdAt: new Date().toISOString(),
  sourceCommit: currentCommit(),
  scope: { packages, locales: selectedLocales },
  generated: [],
  failures: [],
};

for (const textbook of packages) {
  for (const locale of selectedLocales) {
    const proc = spawnSync(process.execPath, [generator, '--package', textbook, '--locale', locale, '--stdout'], {
      cwd: repoRoot,
      encoding: 'utf8',
      maxBuffer: 32 * 1024 * 1024,
      timeout: 180_000,
    });
    if (proc.error || proc.status !== 0 || !proc.stdout?.startsWith('<!-- GENERATED FROM CODE; DO NOT EDIT. -->')) {
      const error = (proc.error?.message ?? proc.stderr ?? 'Missing/invalid Markdown output').trim();
      manifest.failures.push({ textbook, locale, error: error.slice(0, 2000) });
      process.stderr.write('FAILED ' + textbook + ' / ' + locale + ': ' + error.slice(0, 500) + '\n');
      continue;
    }
    const file = path.join(textbook.slice('learningApps/'.length), 'taxonomy.' + locale + '.md');
    const destination = path.join(outDir, file);
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.writeFileSync(destination, proc.stdout, 'utf8');
    const match = heading => proc.stdout.match(new RegExp('^' + heading + ': (\\d+)$', 'm'));
    manifest.generated.push({
      textbook,
      locale,
      file: file.split(path.sep).join('/'),
      counts: {
        domains: Number(match('Domains')?.[1]),
        groups: Number(match('Groups')?.[1]),
        skills: Number(match('Skills')?.[1]),
      },
    });
    process.stdout.write('Generated ' + file + '\n');
  }
}
fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
process.stdout.write(
  'Review bundle: ' + outDir + ' (' + manifest.generated.length + ' generated, ' +
  manifest.failures.length + ' failed, source ' + (manifest.sourceCommit ?? 'unknown') + ')\n',
);
if (manifest.failures.length || !manifest.generated.length) process.exitCode = 1;
