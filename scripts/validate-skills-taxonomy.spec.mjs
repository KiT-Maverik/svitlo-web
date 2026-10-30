import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync, unlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { afterEach, test } from 'node:test';
import { validateTaxonomy } from './validate-skills-taxonomy.mjs';

const fixtures = [];
const uuids = {
  a: '11111111-1111-4111-8111-111111111111',
  b: '22222222-2222-4222-8222-222222222222',
  c: '33333333-3333-4333-8333-333333333333',
  d: '44444444-4444-4444-8444-444444444444',
  e: '55555555-5555-4555-8555-555555555555',
};
afterEach(() => { for (const dir of fixtures.splice(0)) rmSync(dir, { recursive: true, force: true }); });
function makeFixture(source = 'new') {
  const repo = mkdtempSync(join(tmpdir(), 'skills-integrity-'));
  fixtures.push(repo);
  const root = join(repo, 'book', source === 'new' ? 'Data/skills' : 'src/data/skillsTaxonomy');
  const write = (file, contents) => { const path = join(root, file); mkdirSync(dirname(path), { recursive: true }); writeFileSync(path, contents); };
  const replace = (file, before, after) => { const path = join(root, file); const text = readFileSync(path, 'utf8'); assert.ok(text.includes(before), before); writeFileSync(path, text.replace(before, after)); };
  const locale = join(repo, 'shared/contracts/src/types/languages.ts');
  mkdirSync(dirname(locale), { recursive: true });
  writeFileSync(locale, "export const DEFAULT_SUPPORTED_LANGUAGES = [{ language: 'en' }, { language: 'uk' }] as const;\n");
  const name = "{ en: 'English', uk: 'Українська' }";
  const description = `{ methodological: 'Independent and useful description', fe: ${name} }`;
  write('index.data.ts', "export { foo_SkillDomain_Data } from './foo/index.data';\nexport { geometry_SkillDomain_Data } from './geometry/index.data';\n");
  write('index.ids.ts', "export { foo_SkillDomain_Ids } from './foo/foo.ids';\nexport { geometry_SkillDomain_Ids } from './geometry/geometry.ids';\n");
  write('foo/foo.ids.ts', `export const foo_SkillDomain_Ids = { foo: '${uuids.a}' } as const;\n`);
  write('foo/foo.data.ts', `import { foo_SkillDomain_Ids } from './foo.ids';\nimport { foo_SkillGroups_Ids } from './index.ids';\nexport const foo_SkillDomain_Data = buildSkillDomainConfig({ id: foo_SkillDomain_Ids.foo, name: ${name}, description: ${description}, groupIds: foo_SkillGroups_Ids });\n`);
  write('foo/index.data.ts', "export { foo_SkillDomain_Data } from './foo.data';\n");
  write('foo/index.ids.ts', "import { bar_SkillGroup_Ids } from './bar/bar.ids';\nexport const foo_SkillGroups_Ids = { bar: bar_SkillGroup_Ids.bar } as const;\n");
  write('foo/bar/bar.ids.ts', `export const bar_SkillGroup_Ids = { bar: '${uuids.b}' } as const;\n`);
  write('foo/bar/bar.data.ts', `import { bar_SkillGroup_Ids } from './bar.ids';\nimport { bar_Skills_Ids } from './skills/index.ids';\nexport const bar_SkillGroup_Data = buildSkillGroupConfig({ id: bar_SkillGroup_Ids.bar, name: ${name}, description: ${description}, skillIds: bar_Skills_Ids });\n`);
  write('foo/bar/index.data.ts', "export { bar_SkillGroup_Data } from './bar.data';\n");
  write('foo/bar/index.ids.ts', "export { bar_SkillGroup_Ids } from './bar.ids';\n");
  write('foo/bar/skills/index.ids.ts', `export const bar_Skills_Ids = { baz: '${uuids.c}' } as const;\n`);
  write('foo/bar/skills/index.data.ts', "export { baz_Skill_Data } from './baz.data';\n");
  write('foo/bar/skills/baz.data.ts', `import { bar_Skills_Ids } from './index.ids';\nexport const baz_Skill_Data = buildSkillConfig({ id: bar_Skills_Ids.baz, name: ${name}, description: ${description} });\n`);
  write('geometry/geometry.ids.ts', `export const geometry_SkillDomain_Ids = { geometry: '${uuids.d}' } as const;\n`);
  write('geometry/geometry.data.ts', `import { geometry_SkillDomain_Ids } from './geometry.ids';\nimport { geometry_Skills_Ids } from './index.ids';\nexport const geometry_SkillDomain_Data = buildSkillDomainConfig({ id: geometry_SkillDomain_Ids.geometry, name: ${name}, description: ${description}, groupIds: {}, skillIds: geometry_Skills_Ids });\n`);
  write('geometry/index.data.ts', "export { geometry_SkillDomain_Data } from './geometry.data';\n");
  write('geometry/index.ids.ts', "import { geometry_Skills_Ids as ids } from './skills/index.ids';\nexport const geometry_Skills_Ids = ids;\n");
  write('geometry/skills/index.ids.ts', `export const geometry_Skills_Ids = { shape: '${uuids.e}' } as const;\n`);
  write('geometry/skills/index.data.ts', "export { shape_Skill_Data } from './shape.data';\n");
  write('geometry/skills/shape.data.ts', `import { geometry_Skills_Ids } from './index.ids';\nexport const shape_Skill_Data = buildSkillConfig({ id: geometry_Skills_Ids.shape, name: ${name}, description: ${description} });\n`);
  if (source === 'legacy') unlinkSync(join(root, 'foo/bar/index.ids.ts'));
  return { repo, root, write, replace, run: () => validateTaxonomy({ repo, packageRoot: 'book', source }) };
}
function expectError(fixture, category) {
  const result = fixture.run();
  assert.equal(result.valid, false);
  assert.ok(result.diagnostics.some(x => x.category === category), `${category} not found: ${JSON.stringify(result.diagnostics)}`);
}
test('new architecture: grouped and direct Skills, correct counts, dynamic registry', () => {
  const result = makeFixture().run();
  assert.deepEqual(result.diagnostics, []);
  assert.deepEqual(result.counts, { domains: 2, groups: 1, skills: 2 });
  assert.deepEqual(result.languages, ['en', 'uk']);
});
test('legacy architecture accepts absent Group index.ids.ts', () => { assert.equal(makeFixture('legacy').run().valid, true); });
test('missing Skill file is detected', () => { const f = makeFixture(); unlinkSync(join(f.root, 'foo/bar/skills/baz.data.ts')); expectError(f, 'MISSING_FILE'); });
test('invalid UUID is detected', () => { const f = makeFixture(); f.replace('foo/foo.ids.ts', uuids.a, 'not-a-uuid'); expectError(f, 'INVALID_UUID'); });
test('wrong ID map is detected', () => { const f = makeFixture(); f.replace('foo/bar/bar.data.ts', 'skillIds: bar_Skills_Ids', `skillIds: { baz: '${uuids.e}' }`); expectError(f, 'WRONG_ID_MAP'); });
test('duplicate UUID identity is detected', () => { const f = makeFixture(); f.replace('geometry/geometry.ids.ts', uuids.d, uuids.a); expectError(f, 'DUPLICATE_UUID'); });
test('bad root export is detected', () => { const f = makeFixture(); f.replace('index.data.ts', 'foo_SkillDomain_Data', 'foo_SkillGroup_Data'); expectError(f, 'EXPORT_BOUNDARY'); });
test('missing frontend locale is detected', () => { const f = makeFixture(); f.replace('foo/bar/skills/baz.data.ts', "description: { methodological: 'Independent and useful description', fe: { en: 'English', uk: 'Українська' } }", "description: { methodological: 'Independent and useful description', fe: { en: 'English' } }"); expectError(f, 'INCOMPLETE_LOCALES'); });
test('mixed Domain relationships are detected', () => { const f = makeFixture(); f.replace('geometry/geometry.data.ts', 'groupIds: {}, skillIds:', `groupIds: { bar: '${uuids.b}' }, skillIds:`); expectError(f, 'CROSS_LEVEL_RELATIONSHIP'); });
test('orphan Group is detected', () => { const f = makeFixture(); f.replace('foo/index.ids.ts', 'bar: bar_SkillGroup_Ids.bar', 'other: bar_SkillGroup_Ids.bar'); expectError(f, 'ORPHAN_ENTITY'); });
test('cyclic module import is detected', () => { const f = makeFixture(); f.write('foo/bar/skills/index.data.ts', "export { baz_Skill_Data } from './baz.data';\nimport './index.data';\n"); expectError(f, 'CYCLIC_REFERENCE'); });
test('explicit source selection never falls back', () => { const f = makeFixture('legacy'); const result = validateTaxonomy({ repo: f.repo, packageRoot: 'book', source: 'new' }); assert.ok(result.diagnostics.some(x => x.category === 'MISSING_ROOT')); });
test('argument validation refuses implicit source roots', () => { const f = makeFixture(); assert.throws(() => validateTaxonomy({ repo: f.repo, packageRoot: 'book' })); });