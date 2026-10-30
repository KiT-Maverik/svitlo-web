import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { spawnSync } from 'node:child_process';

const root = path.resolve(import.meta.dirname, '..');
const fixtureDir = fs.mkdtempSync(path.join(root, 'learningApps', '.taxonomy-generator-fixture-'));
const source = fs.readFileSync(path.join(root, 'shared/contracts/src/types/languages.ts'), 'utf8');
const roster = source.slice(source.indexOf('export const DEFAULT_SUPPORTED_LANGUAGES'), source.indexOf('] as const satisfies readonly LanguageDefinition[];'));
const locales = [...roster.matchAll(/language:\s*'([^']+)'/g)].map(match => match[1]);
if (!locales.includes('uk') || !locales.includes('en')) throw new Error('Test requires en and uk');
const taxonomy = path.join(fixtureDir, 'src/data/skillsTaxonomy');
const write = (file, contents) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, contents);
};
const dictionary = prefix => '{' + locales.map(locale => JSON.stringify(locale) + ':' + JSON.stringify(prefix + ' ' + locale)).join(',') + '}';
const code = (type, name, withFE = false) =>
  'export const fixture = build' + type + 'Config({ id: "10bbac60-7f3b-4d65-b926-875ee447397e", ' +
  'name:' + dictionary(name) + ', description: {methodological: ' + JSON.stringify('English methodological meaning of ' + name) +
  (withFE ? ', fe:' + dictionary('Frontend ' + name) : '') + '}' +
  (type === 'SkillDomain' ? ',groupIds: {g:"id"}' : type === 'SkillGroup' ? ',skillIds: {s:"id"}' : '') + '});';
const skillFile = path.join(taxonomy, 'd/g/skills/s.data.ts');
const outputFile = locale => path.join(fixtureDir, 'docs/generated/skills', 'taxonomy.' + locale + '.md');
const run = (locale = 'en', ...flags) =>
  spawnSync(process.execPath, [path.join(root, 'scripts/generate-skills-taxonomy.mjs'),
    '--package', path.relative(root, fixtureDir), '--locale', locale, ...flags], { cwd: root, encoding: 'utf8' });

before(() => {
  write(path.join(taxonomy, 'd/d.data.ts'), code('SkillDomain', 'Domain'));
  write(path.join(taxonomy, 'd/index.ids.ts'), 'export const group_Ids = {g:"id"} as const;');
  write(path.join(taxonomy, 'd/g/g.data.ts'), code('SkillGroup', 'Group'));
  write(path.join(taxonomy, 'd/g/skills/index.ids.ts'), 'export const skill_Ids = {s:"id"} as const;');
  write(skillFile, code('Skill', 'Skill', true));
});
after(() => fs.rmSync(fixtureDir, { recursive: true, force: true }));

test('generates locale names and Skill frontend text while keeping methodological prose in English', () => {
  for (const locale of ['en', 'uk']) {
    const result = run(locale);
    assert.equal(result.status, 0, result.stderr);
    const output = fs.readFileSync(outputFile(locale), 'utf8');
    assert.match(output, new RegExp('Domain ' + locale));
    assert.match(output, new RegExp('Group ' + locale));
    assert.match(output, new RegExp('Skill ' + locale));
    assert.match(output, /Methodological description \(English\):.*English methodological meaning of Skill/);
    assert.match(output, new RegExp('User-friendly description \\(' + locale + '\\):.*Frontend Skill ' + locale));
    const groupView = output.slice(output.indexOf('#### Group '), output.indexOf('##### Skill '));
    assert.doesNotMatch(groupView, /User-friendly description/); // Groups can omit fe.
    assert.match(output, /s\.data\.ts/);
  }
});

test('preview returns the complete Markdown without writing a file', () => {
  const original = fs.readFileSync(outputFile('en'), 'utf8');
  const result = run('en', '--stdout');
  assert.equal(result.status, 0, result.stderr);
  assert.equal(result.stdout, original);
  assert.match(result.stdout, /^## SUMMARY$/m);
  assert.match(result.stdout, /^## DOMAINS$/m);
  assert.match(result.stdout, /^Domains: 1$/m);
  assert.match(result.stdout, /^Groups: 1$/m);
  assert.match(result.stdout, /^Skills: 1$/m);
  assert.match(result.stdout, /^### Domain en$/m);
  assert.match(result.stdout, /^#### Group en$/m);
  assert.match(result.stdout, /^##### Skill en$/m);
  assert.equal(fs.readFileSync(outputFile('en'), 'utf8'), original);
});

test('check detects drift without modifying it and generation restores it', () => {
  assert.equal(run('en', '--check').status, 0);
  const original = fs.readFileSync(outputFile('en'), 'utf8');
  fs.writeFileSync(outputFile('en'), original + '\nobsolete');
  const stale = run('en', '--check');
  assert.notEqual(stale.status, 0);
  assert.match(stale.stderr, /missing or stale/);
  assert.equal(fs.readFileSync(outputFile('en'), 'utf8'), original + '\nobsolete');
  const updated = run('en');
  assert.equal(updated.status, 0, updated.stderr);
  assert.equal(fs.readFileSync(outputFile('en'), 'utf8'), original);
});

test('includes fully localized fe descriptions when provided', () => {
  write(skillFile, code('Skill', 'Skill', true));
  const result = run('uk');
  assert.equal(result.status, 0, result.stderr);
  const output = fs.readFileSync(outputFile('uk'), 'utf8');
  assert.match(output, /User-friendly description \(uk\):.*Frontend Skill uk/);
  assert.match(output, /Methodological description \(English\):.*English methodological meaning of Skill/);
});

test('rejects partial fe dictionaries and preserves the previous document', () => {
  const before = fs.readFileSync(outputFile('uk'), 'utf8');
  write(skillFile, code('Skill', 'Skill', true).replace(/"uk":"Frontend Skill uk",?/, ''));
  const result = run('uk');
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Missing required fe locale uk/);
  assert.equal(fs.readFileSync(outputFile('uk'), 'utf8'), before);
});

test('rejects missing required Skill fe even without a TypeScript typecheck', () => {
  const previous = fs.readFileSync(outputFile('en'), 'utf8');
  write(skillFile, code('Skill', 'Skill'));
  const result = run('en', '--stdout');
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Missing required Skill description\.fe/);
  assert.equal(result.stdout, '');
  assert.equal(fs.readFileSync(outputFile('en'), 'utf8'), previous);
});

test('fails closed on missing methodological description', () => {
  write(skillFile, code('Skill', 'Skill', true).replace(/, description: \{methodological: "[^"]+"\}/, ''));
  const result = run('en');
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Missing description/);
});
