#!/usr/bin/env node
/**
 * Generate a localized, read-only Markdown view from typed taxonomy source.
 * Usage: node scripts/generate-skills-taxonomy.mjs --package learningApps/math [--locale en]
 *
 * Deliberately parses TypeScript source without executing textbook code.
 * Fail closed on absent descriptions: the handwritten taxonomy remains the
 * authoritative staging source until every promoted entity is complete.
 */
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import ts from 'typescript';

function fail(message) { throw new Error(message); }
function options(args) {
  const result = { locale: 'en' };
  for (let i = 0; i < args.length; i += 2) {
    if (!['--package', '--locale'].includes(args[i]) || !args[i + 1]) fail('Usage: --package <textbook-directory> [--locale <language-code>]');
    result[args[i] === '--package' ? 'package' : 'locale'] = args[i + 1];
  }
  if (!result.package) fail('--package is required');
  return result;
}
const repositoryRoot = path.resolve(import.meta.dirname, '..');
const opts = options(process.argv.slice(2));
const packageRoot = path.resolve(repositoryRoot, opts.package);
if (!packageRoot.startsWith(path.join(repositoryRoot, 'learningApps') + path.sep)) fail('Package must be within learningApps/');
const taxonomyRoot = path.join(packageRoot, 'src/data/skillsTaxonomy');
if (!fs.existsSync(taxonomyRoot)) fail('No code taxonomy: ' + taxonomyRoot);

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
  const description = dictionary(config, 'description', file);
  for (const locale of locales) {
    if (!name[locale] || !description[locale]) fail('Missing required locale ' + locale + ': ' + file);
  }
  for (const map of [name, description]) {
    for (const locale of Object.keys(map)) if (!locales.includes(locale)) fail('Unexpected locale ' + locale + ': ' + file);
  }
  return { file, name: name[opts.locale], description: description[opts.locale] };
}
function subdirs(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).filter(x => x.isDirectory()).map(x => x.name).sort();
}
function fileNames(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(x => x.endsWith('.data.ts') && x !== 'index.data.ts').sort();
}
function readSkills(folder) {
  const d = path.join(folder, 'skills');
  return fileNames(d).map(name => readEntity(path.join(d, name), 'Skill'));
}
function markdownLine(entity, level, output) {
  const link = path.relative(path.dirname(output), entity.file).split(path.sep).join('/');
  return '#'.repeat(level) + ' ' + entity.name + '\n\n[' + path.basename(entity.file) + '](' + encodeURI(link) + ')\n\n' + entity.description + '\n\n';
}
const domains = [];
for (const folder of subdirs(taxonomyRoot)) {
  const domainFolder = path.join(taxonomyRoot, folder);
  const domainFile = path.join(domainFolder, folder + '.data.ts');
  if (!fs.existsSync(domainFile)) fail('Missing Domain source: ' + domainFile);
  const domain = readEntity(domainFile, 'SkillDomain');
  const groups = subdirs(domainFolder);
  const directSkills = readSkills(domainFolder);
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
let markdown = '<!-- GENERATED FROM CODE; DO NOT EDIT. -->\n\n# Skills Taxonomy (' + opts.locale + ')\n\n';
let groupCount = 0, skillCount = 0;
for (const domain of domains) {
  markdown += markdownLine(domain, 2, out);
  for (const group of domain.groups) {
    groupCount++;
    markdown += markdownLine(group, 3, out);
    for (const skill of group.skills) { skillCount++; markdown += markdownLine(skill, 4, out); }
  }
  for (const skill of domain.skills) { skillCount++; markdown += markdownLine(skill, 3, out); }
}
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, markdown);
console.log('Generated ' + path.relative(repositoryRoot, out) + ' (' + domains.length + ' Domains, ' + groupCount + ' Groups, ' + skillCount + ' Skills)');
