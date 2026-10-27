import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { DEFAULT_SUPPORTED_LANGUAGES } from '../../../types/languages';

const root = join(process.cwd(), 'math/skillsTaxonomy/algebra');
const groupSkills = {
  expressions: [
    'readNumericExpressions',
    'parentheses',
    'orderOfOperations',
    'variableValue',
    'identifyExpressionError',
  ],
  equalities: ['equalityMeaning', 'trueFalseEquality', 'completeEquality'],
  unknowns: [
    'unknownAddend',
    'unknownMinuend',
    'unknownSubtrahend',
    'unknownFactor',
    'unknownDividend',
    'unknownDivisor',
  ],
  patterns: ['arithmeticPattern', 'growingPattern'],
  formalization: ['translateSituation'],
} as const;

const source = (path: string) => readFileSync(join(root, path), 'utf8');
const readUuidEntries = (content: string) =>
  [...content.matchAll(/^  (\w+): '([0-9a-f-]{36})',?$/gm)].map(([, key, id]) => ({ key, id }));
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

describe('Algebra taxonomy source integrity', () => {
  it('contains all 5 groups and 17 independently authored Skill files', () => {
    assert.equal(Object.values(groupSkills).flat().length, 17);
    for (const [group, skills] of Object.entries(groupSkills)) {
      const ids = readUuidEntries(source(`${group}/skills/index.ids.ts`));
      assert.deepEqual(
        ids.map(({ key }) => key),
        skills,
      );
      const data = source(`${group}/${group}.data.ts`);
      assert.match(data, new RegExp(`skillIds: ${group}_Skills_Ids`));
      const exports = source(`${group}/skills/index.data.ts`).trim().split('\n');
      assert.deepEqual(
        exports,
        [...skills].sort().map(skill => `export { ${skill}_Skill_Data } from './${skill}.data';`),
      );
      for (const skill of skills) {
        const body = source(`${group}/skills/${skill}.data.ts`);
        assert.match(body, new RegExp(`id: ${group}_Skills_Ids\\.${skill}`));
        assert.match(body, new RegExp(`export const ${skill}_Skill_Data = buildSkillConfig`));
      }
    }
  });

  it('keeps every identifier a unique, static UUID and every reference resolvable', () => {
    const all = [
      ...readUuidEntries(source('algebra.ids.ts')),
      ...Object.keys(groupSkills).flatMap(group => [
        ...readUuidEntries(source(`${group}/${group}.ids.ts`)),
        ...readUuidEntries(source(`${group}/skills/index.ids.ts`)),
      ]),
    ];
    assert.equal(all.length, 23);
    assert.equal(new Set(all.map(({ id }) => id)).size, all.length);
    for (const { id } of all) assert.match(id, uuidPattern);
    for (const group of Object.keys(groupSkills)) {
      assert.match(source('index.ids.ts'), new RegExp(`${group}: ${group}_SkillGroup_Ids\\.${group}`));
    }
  });

  it('provides nonempty translations for exactly the supported locales', () => {
    const paths = [
      'algebra.data.ts',
      ...Object.entries(groupSkills).flatMap(([group, skills]) => [
        `${group}/${group}.data.ts`,
        ...skills.map(skill => `${group}/skills/${skill}.data.ts`),
      ]),
    ];
    for (const path of paths) {
      const content = source(path);
      const start = content.indexOf('  name: {');
      assert.notEqual(start, -1, path);
      const end = content.indexOf('  },', start);
      assert.notEqual(end, -1, path);
      const block = content.slice(start, end);
      const keys = [...block.matchAll(/^    ([a-z]+): "(.+)",$/gm)].map(([, key, value]) => ({ key, value }));
      assert.deepEqual(
        keys.map(x => x.key),
        DEFAULT_SUPPORTED_LANGUAGES.map(x => x.language),
        path,
      );
      for (const entry of keys) assert.ok(entry.value.trim(), path);
    }
  });

  it('does not mix collection levels in data indexes', () => {
    assert.equal(source('index.data.ts'), "export { algebra_SkillDomain_Data } from './algebra.data';\n");
    for (const group of Object.keys(groupSkills)) {
      assert.equal(source(`${group}/index.data.ts`), `export { ${group}_SkillGroup_Data } from './${group}.data';\n`);
    }
  });
});
