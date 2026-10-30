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
const run = (locale = 'en') =>
  spawnSync(process.execPath, [path.join(root, 'scripts/generate-skills-taxonomy.mjs'),
    '--package', path.relative(root, fixtureDir), '--locale', locale], { cwd: root, encoding: 'utf8' });

before(() => {
  write(path.join(taxonomy, 'd/d.data.ts'), code('SkillDomain', 'Domain'));
  write(path.join(taxonomy, 'd/index.ids.ts'), 'export const group_Ids = {g:"id"} as const;');
  write(path.join(taxonomy, 'd/g/g.data.ts'), code('SkillGroup', 'Group'));
  write(path.join(taxonomy, 'd/g/skills/index.ids.ts'), 'export const skill_Ids = {s:"id"} as const;');
  write(skillFile, code('Skill', 'Skill'));
});
after(() => fs.rmSync(fixtureDir, { recursive: true, force: true }));

test('generates locale names but keeps canonical methodological prose English when fe is absent', () => {
  for (const locale of ['en', 'uk']) {
    const result = run(locale);
    assert.equal(result.status, 0, result.stderr);
    const output = fs.readFileSync(outputFile(locale), 'utf8');
    assert.match(output, new RegExp('Domain ' + locale));
    assert.match(output, new RegExp('Group ' + locale));
    assert.match(output, new RegExp('Skill ' + locale));
    assert.match(output, /Methodological description \(English\):.*English methodological meaning of Skill/);
    assert.doesNotMatch(output, /fe description/);
    assert.match(output, /s\.data\.ts/);
  }
});

test('includes fully localized fe descriptions when provided', () => {
  write(skillFile, code('Skill', 'Skill', true));
  const result = run('uk');
  assert.equal(result.status, 0, result.stderr);
  const output = fs.readFileSync(outputFile('uk'), 'utf8');
  assert.match(output, /fe description \(uk\):.*Frontend Skill uk/);
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

test('fails closed on missing methodological description', () => {
  write(skillFile, code('Skill', 'Skill').replace(/, description: \{methodological: "[^"]+"\}/, ''));
  const result = run('en');
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Missing description/);
});
