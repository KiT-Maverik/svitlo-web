import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { assertSupportedTranslations } from './taxonomyTestHelpers';

const root = join(process.cwd(), 'src', 'math', 'skillsTaxonomy');
const domain = join(root, 'reasoning');
const groups = {
  argumentation: [
    'classifyAndJustify',
    'findCounterexample',
    'explainStrategy',
    'distinguishExampleRule',
    'drawConclusion',
  ],
  verification: ['checkReasonableness', 'spotCalculationError', 'verifyWithSecondMethod'],
  logic: ['completePattern', 'logicalElimination'],
  representations: ['multipleRepresentations'],
} as const;
const read = (path: string) => readFileSync(path, 'utf8');
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
const idEntries = (path: string) =>
  [...read(path).matchAll(/^  (\w+): '([^']+)',?$/gm)].map(([, key, value]) => [key, value] as const);

describe('Reasoning taxonomy integrity', () => {
  it('contains exactly the inventory groups and skill files', () => {
    const domainIds = read(join(domain, 'index.ids.ts'));
    const domainData = read(join(domain, 'reasoning.data.ts'));
    assert.match(domainData, /groupIds: reasoning_SkillGroups_Ids/);
    for (const [group, skills] of Object.entries(groups)) {
      assert.ok(domainIds.includes(`${group}: ${group}_SkillGroup_Ids.${group}`));
      const path = join(domain, group);
      const groupData = read(join(path, `${group}.data.ts`));
      assert.ok(groupData.includes(`skillIds: ${group}_Skills_Ids`));
      const entries = idEntries(join(path, 'skills', 'index.ids.ts'));
      assert.deepEqual(
        entries.map(([key]) => key),
        skills,
      );
      const exports = read(join(path, 'skills', 'index.data.ts'))
        .trim()
        .split('\n');
      assert.deepEqual(
        exports,
        [...skills].sort().map(skill => `export { ${skill}_Skill_Data } from './${skill}.data';`),
      );
      for (const skill of skills) {
        const filename = join(path, 'skills', `${skill}.data.ts`);
        assert.ok(existsSync(filename), filename);
        const content = read(filename);
        assert.ok(content.includes(`id: ${group}_Skills_Ids.${skill}`));
        assert.match(content, /buildSkillConfig\(\{/);
      }
    }
    assert.equal(Object.values(groups).flat().length, 11);
  });

  it('has unique static UUIDs and valid references', () => {
    const ids = [
      ...idEntries(join(domain, 'reasoning.ids.ts')),
      ...Object.keys(groups).flatMap(group => [
        ...idEntries(join(domain, group, `${group}.ids.ts`)),
        ...idEntries(join(domain, group, 'skills', 'index.ids.ts')),
      ]),
    ];
    assert.equal(ids.length, 16);
    for (const [, id] of ids) assert.match(id, uuidPattern);
    assert.equal(new Set(ids.map(([, id]) => id)).size, ids.length);
  });

  it('provides all supported nonempty language names for every entity', () => {
    const dataFiles = [
      join(domain, 'reasoning.data.ts'),
      ...Object.entries(groups).flatMap(([group, skills]) => [
        join(domain, group, `${group}.data.ts`),
        ...skills.map(skill => join(domain, group, 'skills', `${skill}.data.ts`)),
      ]),
    ];
    assert.equal(dataFiles.length, 16);
    for (const path of dataFiles) {
      assertSupportedTranslations(read(path), path);
    }
  });
});
