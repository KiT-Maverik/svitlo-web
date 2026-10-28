import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { assertSupportedTranslations } from './taxonomyTestHelpers';

const root = join(process.cwd(), 'src', 'data', 'skillsTaxonomy', 'probability');
const read = (path: string): string => readFileSync(join(root, path), 'utf8');
const groups = {
  events: ['certainImpossible', 'likelihoodLanguage', 'listOutcomes'],
  experiments: ['experimentVariation'],
} as const;

describe('Probability SkillDomain taxonomy', () => {
  it('has a localized, separately built configuration for every entity', () => {
    const paths = [
      'probability.data.ts',
      ...Object.entries(groups).flatMap(([group, skills]) => [
        `${group}/${group}.data.ts`,
        ...skills.map(skill => `${group}/skills/${skill}.data.ts`),
      ]),
    ];
    assert.equal(paths.length, 7);

    for (const path of paths) {
      const source = read(path);
      assertSupportedTranslations(source, path);
      assert.match(source, /buildSkill(?:Domain|Group)?Config\(\{/);
    }
  });

  it('uses seven distinct static UUIDs for the domain, groups and Skills', () => {
    const paths = [
      'probability.ids.ts',
      ...Object.entries(groups).flatMap(([group]) => [`${group}/${group}.ids.ts`, `${group}/skills/index.ids.ts`]),
    ];
    const ids = paths.flatMap(path =>
      [...read(path).matchAll(/'([0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12})'/g)].map(match => match[1]),
    );
    assert.equal(ids.length, 7);
    assert.equal(new Set(ids).size, ids.length);
  });

  it('links exactly the materialized group and Skill files', () => {
    const domain = read('probability.data.ts');
    assert.match(domain, /groupIds: probability_SkillGroups_Ids/);
    const groupIds = read('index.ids.ts');
    for (const [group, skills] of Object.entries(groups)) {
      assert.match(groupIds, new RegExp(`\\b${group}: ${group}_SkillGroup_Ids\\.${group}\\b`));
      assert.match(read(`${group}/${group}.data.ts`), new RegExp(`skillIds: ${group}_Skills_Ids`));
      const ids = read(`${group}/skills/index.ids.ts`);
      const exports = read(`${group}/skills/index.data.ts`).trim().split('\n');
      assert.equal([...ids.matchAll(/: '[0-9a-f-]{36}'/g)].length, skills.length);
      assert.deepEqual(
        exports,
        [...skills].sort().map(skill => `export { ${skill}_Skill_Data } from './${skill}.data';`),
      );
      for (const skill of skills) {
        assert.match(ids, new RegExp(`\\b${skill}: '[0-9a-f-]{36}'`));
        assert.match(read(`${group}/skills/${skill}.data.ts`), new RegExp(`id: ${group}_Skills_Ids\\.${skill}`));
      }
    }
  });
});
