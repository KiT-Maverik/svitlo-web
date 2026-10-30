#!/usr/bin/env node
/**
 * Generate a localized-name, read-only Markdown view from typed taxonomy source.
 * Usage: node scripts/generate-skills-taxonomy.mjs --package learningApps/math
 *   [--source-root src/data/skillsTaxonomy | --source-root Data/skills]
 *   [--locale en] [--check | --stdout]
 *
 * Deliberately parses TypeScript source without executing textbook code.
 * Methodological descriptions are always English; Skill frontend text is mandatory in every locale.
 * Domain and Group frontend text remains optional during their migration.
 * Fail closed on absent methodological descriptions: handwritten taxonomy remains the
 * authoritative staging source until every promoted entity is complete.
 */
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import ts from 'typescript';

function fail(message) { throw new Error(message); }
function options(args) {
  const result = { locale: 'en', check: false, stdout: false };
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--check' || arg === '--stdout') {
      if (result[arg.slice(2)]) fail('Duplicate argument ' + arg);
      result[arg.slice(2)] = true;
      continue;
    }
    if (!['--package', '--locale', '--source-root'].includes(arg) || !args[i + 1] || args[i + 1].startsWith('--')) {
      fail('Usage: --package <textbook-directory> [--source-root src/data/skillsTaxonomy|Data/skills] [--locale <language-code>] [--check | --stdout]');
    }
    const key = arg === '--source-root' ? 'sourceRoot' : arg.slice(2);
    if (result[key] !== undefined && (key !== 'locale' || result.locale !== 'en')) fail('Duplicate argument ' + arg);
    result[key] = args[++i];
  }
  if (!result.package || (result.check && result.stdout)) fail('Provide --package and choose at most one of --check, --stdout');
  return result;
}
const repositoryRoot = path.resolve(import.meta.dirname, '..');
const opts = options(process.argv.slice(2));
const packageRoot = path.resolve(repositoryRoot, opts.package);
if (!packageRoot.startsWith(path.join(repositoryRoot, 'learningApps') + path.sep)) fail('Package must be within learningApps/');
// Legacy Mathematics invocations retain their original default. New packages must
// explicitly opt in to Data/skills, and competing populated roots never auto-select.
const SOURCE_ROOTS = ['src/data/skillsTaxonomy', 'Data/skills'];
if (opts.sourceRoot && !SOURCE_ROOTS.includes(opts.sourceRoot)) {
  fail('Unsupported --source-root "' + opts.sourceRoot + '". Choose ' + SOURCE_ROOTS.join(' or '));
}
function isPopulated(root) {
  return fs.existsSync(root) && fs.statSync(root).isDirectory() &&
    fs.readdirSync(root, { withFileTypes: true }).some(entry =>
      entry.isDirectory() && fs.existsSync(path.join(root, entry.name, entry.name + '.data.ts')));
}
if (!opts.sourceRoot && SOURCE_ROOTS.every(source => isPopulated(path.join(packageRoot, source)))) {
  fail('Both taxonomy source roots are populated; select one with --source-root');
}
const taxonomyRoot = path.join(packageRoot, opts.sourceRoot ?? SOURCE_ROOTS[0]);
if (!fs.existsSync(taxonomyRoot) || !fs.statSync(taxonomyRoot).isDirectory()) {
  fail('No code taxonomy: ' + taxonomyRoot);
}

function parse(file) {
  return ts.createSourceFile(file, fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
}
function unwrap(node) {
  while (ts.isAsExpression(node) || ts.isSatisfiesExpression(node) || ts.isParenthesizedExpression(node)) node = node.expression;
  return node;
}
function key(node) {
  if (ts.isIdentifier(node) || ts.isStringLiteral(node)) return node.text;
  fail('Non-static property key: ' + node.getText());
}
function getProperty(object, name) {
  return object.properties.find(p => ts.isPropertyAssignment(p) && key(p.name) === name);
}
function stringValue(node, context) {
  if (!node || !(ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node))) fail('Expected literal localized text: ' + context);
  const value = node.text.trim();
  if (!value) fail('Blank localized text: ' + context);
  return value;
}
function dictionary(object, field, file) {
  const member = getProperty(object, field);
  if (!member) fail('Missing ' + field + ' (taxonomy not yet migrated): ' + file);
  const value = unwrap(member.initializer);
  if (!ts.isObjectLiteralExpression(value)) fail('Expected object dictionary: ' + file + ':' + field);
  const pairs = Object.create(null);
  for (const p of value.properties) {
    if (!ts.isPropertyAssignment(p)) fail('Unsupported dynamic locale in ' + file);
    const code = key(p.name);
    if (Object.hasOwn(pairs, code)) fail('Duplicate locale ' + code + ': ' + file);
    pairs[code] = stringValue(p.initializer, file + ':' + field + ':' + code);
  }
  return pairs;
}
function supportedLocales() {
  const file = path.join(repositoryRoot, 'shared/contracts/src/types/languages.ts');
  let found;
  for (const node of parse(file).statements) {
    if (!ts.isVariableStatement(node)) continue;
    for (const dec of node.declarationList.declarations) {
      if (dec.name.getText() !== 'DEFAULT_SUPPORTED_LANGUAGES') continue;
      const arr = unwrap(dec.initializer);
      if (!ts.isArrayLiteralExpression(arr)) fail('Cannot read supported language registry');
      found = arr.elements.map(item => {
        const obj = unwrap(item);
        if (!ts.isObjectLiteralExpression(obj)) fail('Nonliteral language registry');
        return stringValue(getProperty(obj, 'language')?.initializer, file);
      });
    }
  }
  if (!found?.length) fail('Supported languages not found');
  return found;
}
const locales = supportedLocales();
if (!locales.includes(opts.locale)) fail('Unsupported locale "' + opts.locale + '". Supported: ' + locales.join(', '));

function readEntity(file, kind) {
  const sf = parse(file);
  let config;
  function visit(n) {
    if (ts.isCallExpression(n) && ts.isIdentifier(n.expression) &&
      n.expression.text === 'build' + kind + 'Config' && n.arguments.length === 1 &&
      ts.isObjectLiteralExpression(n.arguments[0])) {
      if (config) fail('Multiple entity configs: ' + file);
      config = n.arguments[0];
    }
    ts.forEachChild(n, visit);
  }
  visit(sf);
  if (!config) fail('Missing build' + kind + 'Config in ' + file);

  const name = dictionary(config, 'name', file);
  const descriptionMember = getProperty(config, 'description');
  if (!descriptionMember) fail('Missing description (taxonomy not yet migrated): ' + file);
  const description = unwrap(descriptionMember.initializer);
  if (!ts.isObjectLiteralExpression(description)) fail('Expected description object: ' + file);

  const keys = description.properties.map(prop => {
    if (!ts.isPropertyAssignment(prop)) fail('Unexpected dynamic description property: ' + file);
    return key(prop.name);
  });
  if (new Set(keys).size !== keys.length || keys.some(k => k !== 'methodological' && k !== 'fe')) {
    fail('Unexpected or duplicated description keys: ' + file);
  }
  const methodological = stringValue(getProperty(description, 'methodological')?.initializer, file + ':methodological');

  const fe = getProperty(description, 'fe') ? dictionary(description, 'fe', file) : undefined;
  // This source parser does not run tsc: enforce the Skill contract independently
  // instead of silently generating incomplete documentation from untyped files.
  if (kind === 'Skill' && !fe) fail('Missing required Skill description.fe: ' + file);
  for (const locale of locales) {
    if (!name[locale]) fail('Missing required name locale ' + locale + ': ' + file);
    if (fe && !fe[locale]) fail('Missing required fe locale ' + locale + ': ' + file);
  }
  for (const map of fe ? [name, fe] : [name]) {
    for (const locale of Object.keys(map)) {
      if (!locales.includes(locale)) fail('Unexpected locale ' + locale + ': ' + file);
    }
  }
  return { file, name: name[opts.locale], methodological, frontend: fe?.[opts.locale] };
}
function subdirs(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).filter(x => x.isDirectory() && x.name !== '__tests__' && x.name !== 'skills').map(x => x.name).sort();
}
function fileNames(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(x => x.endsWith('.data.ts') && x !== 'index.data.ts').sort();
}
function verifyIndex(indexFile, expected) {
  if (!fs.existsSync(indexFile)) fail('Missing index: ' + indexFile);
  const maps = [];
  for (const statement of parse(indexFile).statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (!declaration.initializer || !declaration.name.getText().endsWith('_Ids')) continue;
      const value = unwrap(declaration.initializer);
      if (ts.isObjectLiteralExpression(value)) maps.push(value);
    }
  }
  if (maps.length !== 1) fail('Expected one direct-child IDs map: ' + indexFile);
  const actual = [];
  for (const item of maps[0].properties) {
    if (!ts.isPropertyAssignment(item)) fail('Unsupported dynamic child map entry: ' + indexFile);
    const child = key(item.name);
    if (ts.isPropertyAccessExpression(item.initializer) && item.initializer.name.text !== child) {
      fail('Child ID key does not match child field: ' + indexFile + ':' + child);
    }
    actual.push(child);
  }
  const expectedSorted = [...expected].sort();
  if (JSON.stringify(actual.sort()) !== JSON.stringify(expectedSorted)) {
    fail('Source folders and child ID-map entries differ in ' + indexFile +
      '\nFolders: ' + expectedSorted.join(', ') + '\nMap: ' + actual.join(', '));
  }
}
function readSkills(folder) {
  const d = path.join(folder, 'skills');
  const names = fileNames(d);
  if (names.length) verifyIndex(path.join(d, 'index.ids.ts'), names.map(n => n.slice(0, -'.data.ts'.length)));
  return names.map(name => readEntity(path.join(d, name), 'Skill'));
}
function markdownLine(entity, level, output, details = '') {
  const link = path.relative(path.dirname(output), entity.file).split(path.sep).join('/');
  let text = '#'.repeat(level) + ' ' + entity.name + '\n\n';
  if (details) text += details + '\n\n';
  text += '[' + path.basename(entity.file) + '](' + encodeURI(link) + ')\n\n';
  text += '**Methodological description (English):** ' + entity.methodological + '\n\n';
  if (entity.frontend !== undefined) {
    text += '**User-friendly description (' + opts.locale + '):** ' + entity.frontend + '\n\n';
  }
  return text;
}
const domains = [];
for (const folder of subdirs(taxonomyRoot)) {
  const domainFolder = path.join(taxonomyRoot, folder);
  const domainFile = path.join(domainFolder, folder + '.data.ts');
  if (!fs.existsSync(domainFile)) fail('Missing Domain source: ' + domainFile);
  const domain = readEntity(domainFile, 'SkillDomain');
  const groups = subdirs(domainFolder);
  const directSkills = readSkills(domainFolder);
  // For grouped Domains the direct children are Groups; for ungrouped Domains
  // the direct children are Skills. Both use the Domain's ID-only index.
  if (groups.length || directSkills.length) {
    verifyIndex(path.join(domainFolder, 'index.ids.ts'),
      groups.length ? groups : directSkills.map(skill => path.basename(skill.file, '.data.ts')));
  }
  if ((groups.length > 0) === (directSkills.length > 0)) fail('Domain must have only Groups or direct Skills: ' + domainFile);
  const content = groups.map(group => {
    const groupFolder = path.join(domainFolder, group);
    const groupFile = path.join(groupFolder, group + '.data.ts');
    if (!fs.existsSync(groupFile)) fail('Missing Group source: ' + groupFile);
    const skills = readSkills(groupFolder);
    if (!skills.length) fail('Empty Group: ' + groupFile);
    return { ...readEntity(groupFile, 'SkillGroup'), skills };
  });
  domains.push({ ...domain, groups: content, skills: directSkills });
}
if (!domains.length) fail('No domains found');
const out = path.join(packageRoot, 'docs/generated/skills', 'taxonomy.' + opts.locale + '.md');
const groupCount = domains.reduce((sum, domain) => sum + domain.groups.length, 0);
const skillCount = domains.reduce((sum, domain) =>
  sum + domain.skills.length + domain.groups.reduce((n, group) => n + group.skills.length, 0), 0);
let markdown = '<!-- GENERATED FROM CODE; DO NOT EDIT. -->\n\n# Skills Taxonomy (' + opts.locale + ')\n\n' +
  '> Names and available user-friendly descriptions use the requested locale. Methodological descriptions remain canonical English, not translated. This is a generated Code view, not the editorial staging template.\n\n' +
  '## SUMMARY\n\n' +
  'Domains: ' + domains.length + '\n\nGroups: ' + groupCount + '\n\nSkills: ' + skillCount +
  '\n\n## DOMAINS\n\n';
for (const domain of domains) {
  const count = domain.skills.length + domain.groups.reduce((n, group) => n + group.skills.length, 0);
  markdown += markdownLine(domain, 3, out, 'Groups: ' + domain.groups.length + ' · Skills: ' + count);
  for (const group of domain.groups) {
    markdown += markdownLine(group, 4, out, 'Skills: ' + group.skills.length);
    for (const skill of group.skills) markdown += markdownLine(skill, 5, out);
  }
  for (const skill of domain.skills) markdown += markdownLine(skill, 4, out);
}
if (opts.stdout) {
  process.stdout.write(markdown);
} else if (opts.check) {
  if (!fs.existsSync(out) || fs.readFileSync(out, 'utf8') !== markdown) {
    fail('Generated taxonomy is missing or stale: ' + path.relative(repositoryRoot, out));
  }
  console.log('Verified ' + path.relative(repositoryRoot, out) + ' (' + domains.length + '/' + groupCount + '/' + skillCount + ')');
} else {
  fs.mkdirSync(path.dirname(out), { recursive: true });
  if (!fs.existsSync(out) || fs.readFileSync(out, 'utf8') !== markdown) fs.writeFileSync(out, markdown);
  console.log('Generated ' + path.relative(repositoryRoot, out) + ' (' + domains.length + ' Domains, ' + groupCount + ' Groups, ' + skillCount + ' Skills)');
}
