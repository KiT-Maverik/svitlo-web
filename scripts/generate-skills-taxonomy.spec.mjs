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
// New-layout fixture lives in a separate textbook so the legacy regression
// remains a genuine single-root invocation.
const newFixtureDir = fs.mkdtempSync(path.join(root, 'learningApps', '.taxonomy-data-fixture-'));
const newTaxonomy = path.join(newFixtureDir, 'Data/skills');
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
const newOutputFile = locale => path.join(newFixtureDir, 'docs/generated/skills', 'taxonomy.' + locale + '.md');
const newSkillFile = path.join(newTaxonomy, 'd/g/skills/s.data.ts');
const runNew = (locale = 'en', ...flags) =>
  spawnSync(process.execPath, [path.join(root, 'scripts/generate-skills-taxonomy.mjs'),
    '--package', path.relative(root, newFixtureDir), '--source-root', 'Data/skills',
    '--locale', locale, ...flags], { cwd: root, encoding: 'utf8' });
const run = (locale = 'en', ...flags) =>
  spawnSync(process.execPath, [path.join(root, 'scripts/generate-skills-taxonomy.mjs'),
    '--package', path.relative(root, fixtureDir), '--locale', locale, ...flags], { cwd: root, encoding: 'utf8' });

before(() => {
  write(path.join(taxonomy, 'd/d.data.ts'), code('SkillDomain', 'Domain'));
  write(path.join(taxonomy, 'd/index.ids.ts'), 'export const group_Ids = {g:"id"} as const;');
  write(path.join(taxonomy, 'd/g/g.data.ts'), code('SkillGroup', 'Group'));
  write(path.join(taxonomy, 'd/g/skills/index.ids.ts'), 'export const skill_Ids = {s:"id"} as const;');
  write(skillFile, code('Skill', 'Skill', true));

  // A grouped Domain and a separate direct-Skill Domain in the new architecture.
  write(path.join(newTaxonomy, 'd/d.data.ts'), code('SkillDomain', 'New Domain', true));
  write(path.join(newTaxonomy, 'd/index.ids.ts'), 'export const d_SkillGroups_Ids = {g:"id"} as const;');
  write(path.join(newTaxonomy, 'd/g/g.data.ts'), code('SkillGroup', 'New Group'));
  write(path.join(newTaxonomy, 'd/g/skills/index.ids.ts'), 'export const g_Skills_Ids = {s:"id"} as const;');
  write(newSkillFile, code('Skill', 'Grouped Skill', true));

  write(path.join(newTaxonomy, 'direct/direct.data.ts'),
    code('SkillDomain', 'Direct Domain').replace(',groupIds: {g:"id"}', ',groupIds: {},skillIds: {t:"id"}'));
  write(path.join(newTaxonomy, 'direct/index.ids.ts'), 'export const direct_Skills_Ids = {t:"id"} as const;');
  write(path.join(newTaxonomy, 'direct/skills/index.ids.ts'), 'export const directSkills_Ids = {t:"id"} as const;');
  write(path.join(newTaxonomy, 'direct/skills/t.data.ts'), code('Skill', 'Direct Skill', true));
});
after(() => {
  fs.rmSync(fixtureDir, { recursive: true, force: true });
  fs.rmSync(newFixtureDir, { recursive: true, force: true });
});

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
  write(skillFile, code('Skill', 'Skill', true).replace(/methodological: "[^"]+",\s*/, ''));
  const result = run('en');
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Expected literal localized text: .*:methodological/);
});


test('legacy source-root selection remains byte-for-byte compatible with the Mathematics-style layout', () => {
  write(skillFile, code('Skill', 'Skill', true));
  const implicit = run('en', '--stdout');
  const explicit = run('en', '--source-root', 'src/data/skillsTaxonomy', '--stdout');
  assert.equal(implicit.status, 0, implicit.stderr);
  assert.equal(explicit.status, 0, explicit.stderr);
  assert.equal(explicit.stdout, implicit.stdout);
});

test('Data/skills supports grouped and direct Skills, complete links, counts and localized copy', () => {
  for (const locale of ['en', 'uk']) {
    const first = runNew(locale, '--stdout');
    const again = runNew(locale, '--stdout');
    assert.equal(first.status, 0, first.stderr);
    assert.equal(again.status, 0, again.stderr);
    assert.equal(first.stdout, again.stdout, 'Output must be deterministic');
    assert.equal(fs.existsSync(newOutputFile(locale)), false, '--stdout must not write');

    const view = first.stdout;
    assert.match(view, /^<!-- GENERATED FROM CODE; DO NOT EDIT\. -->/);
    assert.match(view, /^Domains: 2$/m);
    assert.match(view, /^Groups: 1$/m);
    assert.match(view, /^Skills: 2$/m);
    assert.match(view, new RegExp('^### New Domain ' + locale + '$', 'm'));
    assert.match(view, new RegExp('^#### New Group ' + locale + '$', 'm'));
    assert.match(view, new RegExp('^##### Grouped Skill ' + locale + '$', 'm'));
    assert.match(view, new RegExp('^### Direct Domain ' + locale + '$', 'm'));
    assert.match(view, new RegExp('^#### Direct Skill ' + locale + '$', 'm'));
    assert.doesNotMatch(view, /^(Slug|Action|Status):/m);
    assert.equal([...view.matchAll(/^\*\*Methodological description \(English\):\*\*/gm)].length, 5);
    assert.equal([...view.matchAll(/^\*\*User-friendly description \(/gm)].length, 3,
      'Grouped Domain and both Skills have fe; Group and direct Domain may omit fe');
    assert.match(view, new RegExp('User-friendly description \\(' + locale + '\\):\\*\\* Frontend Grouped Skill ' + locale));
    const links = [...view.matchAll(/^\[([^\]]+\.data\.ts)\]\(([^)]+)\)$/gm)];
    const expected = [
      'd/d.data.ts', 'd/g/g.data.ts', 'd/g/skills/s.data.ts',
      'direct/direct.data.ts', 'direct/skills/t.data.ts',
    ].map(relative => path.join(newTaxonomy, relative));
    assert.equal(links.length, expected.length, 'Every entity must appear exactly once');
    const resolved = links.map(([, label, url]) => {
      const file = path.resolve(path.dirname(newOutputFile(locale)), decodeURI(url));
      assert.equal(path.basename(file), label);
      assert.ok(fs.existsSync(file), 'Broken relative Code link: ' + url);
      return file;
    });
    assert.deepEqual(new Set(resolved), new Set(expected));
    assert.equal(new Set(resolved).size, expected.length, 'Duplicate entities');
  }
});

test('Data/skills generation, --check and drift detection are read-only on Code', () => {
  const created = runNew('en');
  assert.equal(created.status, 0, created.stderr);
  const original = fs.readFileSync(newOutputFile('en'), 'utf8');
  assert.equal(runNew('en', '--check').status, 0);
  fs.writeFileSync(newOutputFile('en'), original + '\nSTALENESS');
  const stale = runNew('en', '--check');
  assert.notEqual(stale.status, 0);
  assert.match(stale.stderr, /missing or stale/);
  assert.equal(fs.readFileSync(newOutputFile('en'), 'utf8'), original + '\nSTALENESS');
  assert.equal(runNew('en').status, 0);
  assert.equal(fs.readFileSync(newOutputFile('en'), 'utf8'), original);
});

test('Data/skills AST parser rejects missing required Skill fe without changing output', () => {
  const previous = fs.readFileSync(newOutputFile('en'), 'utf8');
  write(newSkillFile, code('Skill', 'Grouped Skill'));
  const result = runNew('en');
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Missing required Skill description\.fe/);
  assert.equal(fs.readFileSync(newOutputFile('en'), 'utf8'), previous);
  write(newSkillFile, code('Skill', 'Grouped Skill', true));
  assert.equal(runNew('en', '--check').status, 0);
});

test('source-root selection rejects ambiguous populated roots and unsupported paths', () => {
  const wrong = spawnSync(process.execPath, [
    path.join(root, 'scripts/generate-skills-taxonomy.mjs'),
    '--package', path.relative(root, newFixtureDir),
    '--source-root', '../../wrong', '--stdout',
  ], { cwd: root, encoding: 'utf8' });
  assert.notEqual(wrong.status, 0);
  assert.match(wrong.stderr, /Unsupported --source-root/);

  // Populate a legacy root in the new-layout textbook to prove selection is not implicit.
  write(path.join(newFixtureDir, 'src/data/skillsTaxonomy/legacy/legacy.data.ts'),
    code('SkillDomain', 'Legacy Domain'));
  const implicit = spawnSync(process.execPath, [
    path.join(root, 'scripts/generate-skills-taxonomy.mjs'),
    '--package', path.relative(root, newFixtureDir), '--stdout',
  ], { cwd: root, encoding: 'utf8' });
  assert.notEqual(implicit.status, 0);
  assert.match(implicit.stderr, /Both taxonomy source roots are populated/);
  assert.equal(runNew('en', '--check').status, 0, 'Explicit new root must still work');
});
