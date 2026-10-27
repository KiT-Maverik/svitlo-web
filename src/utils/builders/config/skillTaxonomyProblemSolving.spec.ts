import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { assertSupportedTranslations } from './taxonomyTestHelpers';

const root = join(process.cwd(), 'src', 'math', 'skillsTaxonomy', 'problemSolving');
const read = (...path: string[]): string => readFileSync(join(root, ...path), 'utf8');
const groups = {
  conditions: ['identifyKnownUnknown', 'findExtraneousData', 'findMissingData'],
  models: ['chooseOperationAddSub', 'chooseOperationMulDiv', 'oneStepModel', 'createProblem'],
  planning: ['twoStepPlan', 'threeStepPlan', 'inverseProblem', 'explainAnswerUnits', 'multipleSolutionStrategies'],
  comparisons: ['additiveComparison', 'increaseDecreaseNumber', 'multiplicativeComparison', 'increaseDecreaseFactor'],
  parts: ['partWholeAddsub', 'fractionsContext'],
  groups: ['correspondenceCombinations', 'equalGroups'],
  quantities: ['workRateTime', 'priceQuantityCost', 'measurementContext'],
} as const;
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

function checkNames(contents: string): void {
  assertSupportedTranslations(contents, 'problem solving');
}

function idEntries(contents: string): Map<string, string> {
  return new Map([...contents.matchAll(/^\s*(\w+):\s*'([0-9a-f-]{36})',?$/gm)].map(([, key, id]) => [key, id]));
}

describe('Problem Solving taxonomy implementation', () => {
  it('provides exactly seven groups and 23 independent Skill data files', () => {
    assert.deepEqual(
      readdirSync(root, { withFileTypes: true })
        .filter(e => e.isDirectory())
        .map(e => e.name)
        .sort(),
      Object.keys(groups).sort(),
    );
    for (const [group, skills] of Object.entries(groups)) {
      const found = readdirSync(join(root, group, 'skills'))
        .filter(file => file.endsWith('.data.ts') && file !== 'index.data.ts')
        .map(file => file.replace('.data.ts', ''))
        .sort();
      assert.deepEqual(found, [...skills].sort(), group);
    }
    assert.equal(Object.values(groups).flat().length, 23);
  });

  it('uses unique static UUIDs and correct ID-only references at each level', () => {
    const seen = new Set<string>();
    const verify = (id: string) => {
      assert.match(id, uuidPattern);
      assert.ok(!seen.has(id), `Duplicated UUID: ${id}`);
      seen.add(id);
    };
    const domain = idEntries(read('problemSolving.ids.ts'));
    assert.deepEqual([...domain.keys()], ['problemSolving']);
    verify(domain.get('problemSolving')!);
    const domainData = read('problemSolving.data.ts');
    assert.match(domainData, /id: problemSolving_SkillDomain_Ids.problemSolving/);
    assert.match(domainData, /groupIds: problemSolving_SkillGroups_Ids/);
    const groupReferences = read('index.ids.ts');
    for (const [group, skills] of Object.entries(groups)) {
      const groupId = idEntries(read(group, `${group}.ids.ts`));
      assert.deepEqual([...groupId.keys()], [group]);
      verify(groupId.get(group)!);
      assert.ok(groupReferences.includes(`${group}: ${group}_SkillGroup_Ids.${group}`));
      const groupData = read(group, `${group}.data.ts`);
      assert.ok(groupData.includes(`id: ${group}_SkillGroup_Ids.${group}`));
      assert.ok(groupData.includes(`skillIds: ${group}_Skills_Ids`));
      const skillIds = idEntries(read(group, 'skills', 'index.ids.ts'));
      assert.deepEqual([...skillIds.keys()].sort(), [...skills].sort());
      for (const skill of skills) {
        verify(skillIds.get(skill)!);
        assert.ok(read(group, 'skills', `${skill}.data.ts`).includes(`id: ${group}_Skills_Ids.${skill}`));
      }
    }
    assert.equal(seen.size, 31);
    assert.doesNotMatch(groupReferences, /\.data/);
  });

  it('has all supported translations in every Domain, Group and Skill', () => {
    checkNames(read('problemSolving.data.ts'));
    for (const [group, skills] of Object.entries(groups)) {
      checkNames(read(group, `${group}.data.ts`));
      for (const skill of skills) {
        const content = read(group, 'skills', `${skill}.data.ts`);
        checkNames(content);
      }
    }
  });
});
