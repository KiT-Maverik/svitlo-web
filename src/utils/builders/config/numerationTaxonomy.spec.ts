import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { DEFAULT_SUPPORTED_LANGUAGES } from '../../../types/languages';
import { numeration_SkillDomain_Data } from '../../../../math/skillsTaxonomy/numeration/index.data';
import { numeration_SkillGroups_Ids } from '../../../../math/skillsTaxonomy/numeration/index.ids';
import { notation_SkillGroup_Data } from '../../../../math/skillsTaxonomy/numeration/notation/index.data';
import { notation_Skills_Ids } from '../../../../math/skillsTaxonomy/numeration/notation/skills/index.ids';
import * as notationSkills from '../../../../math/skillsTaxonomy/numeration/notation/skills/index.data';
import { placeValue_SkillGroup_Data } from '../../../../math/skillsTaxonomy/numeration/placeValue/index.data';
import { placeValue_Skills_Ids } from '../../../../math/skillsTaxonomy/numeration/placeValue/skills/index.ids';
import * as placeValueSkills from '../../../../math/skillsTaxonomy/numeration/placeValue/skills/index.data';
import { comparison_SkillGroup_Data } from '../../../../math/skillsTaxonomy/numeration/comparison/index.data';
import { comparison_Skills_Ids } from '../../../../math/skillsTaxonomy/numeration/comparison/skills/index.ids';
import * as comparisonSkills from '../../../../math/skillsTaxonomy/numeration/comparison/skills/index.data';
import { numberLine_SkillGroup_Data } from '../../../../math/skillsTaxonomy/numeration/numberLine/index.data';
import { numberLine_Skills_Ids } from '../../../../math/skillsTaxonomy/numeration/numberLine/skills/index.ids';
import * as numberLineSkills from '../../../../math/skillsTaxonomy/numeration/numberLine/skills/index.data';
import { estimation_SkillGroup_Data } from '../../../../math/skillsTaxonomy/numeration/estimation/index.data';
import { estimation_Skills_Ids } from '../../../../math/skillsTaxonomy/numeration/estimation/skills/index.ids';
import * as estimationSkills from '../../../../math/skillsTaxonomy/numeration/estimation/skills/index.data';

const groups = [
  { key: 'notation', data: notation_SkillGroup_Data, ids: notation_Skills_Ids, skills: Object.values(notationSkills), count: 4 },
  { key: 'placeValue', data: placeValue_SkillGroup_Data, ids: placeValue_Skills_Ids, skills: Object.values(placeValueSkills), count: 11 },
  { key: 'comparison', data: comparison_SkillGroup_Data, ids: comparison_Skills_Ids, skills: Object.values(comparisonSkills), count: 5 },
  { key: 'numberLine', data: numberLine_SkillGroup_Data, ids: numberLine_Skills_Ids, skills: Object.values(numberLineSkills), count: 4 },
  { key: 'estimation', data: estimation_SkillGroup_Data, ids: estimation_Skills_Ids, skills: Object.values(estimationSkills), count: 3 },
] as const;

describe('Natural Numbers taxonomy integrity', () => {
  it('has exactly five groups and 27 implemented Skill configurations', () => {
    assert.equal(numeration_SkillDomain_Data.collection, 'skillDomain');
    assert.deepEqual(Object.keys(numeration_SkillDomain_Data.groupIds), Object.keys(numeration_SkillGroups_Ids));
    assert.equal(groups.length, 5);
    assert.equal(groups.reduce((total, group) => total + group.skills.length, 0), 27);
    for (const group of groups) {
      assert.equal(group.data.collection, 'skillGroup');
      assert.equal(group.data.id, numeration_SkillGroups_Ids[group.key]);
      assert.deepEqual(group.data.skillIds, group.ids);
      assert.equal(group.skills.length, group.count);
      assert.deepEqual(
        new Set(group.skills.map(skill => skill.id)),
        new Set(Object.values(group.ids)),
      );
    }
  });

  it('provides distinct, complete localized names for every entity', () => {
    const languages = DEFAULT_SUPPORTED_LANGUAGES.map(({ language }) => language);
    const entities = [numeration_SkillDomain_Data, ...groups.map(group => group.data), ...groups.flatMap(group => group.skills)];
    for (const entity of entities) {
      assert.deepEqual(Object.keys(entity.name).sort(), [...languages].sort());
      for (const language of languages) {
        assert.ok(entity.name[language]?.trim(), `Missing ${language} for ${entity.id}`);
      }
    }
    for (const group of groups) {
      for (const skill of group.skills) {
        for (const language of languages) {
          assert.notEqual(skill.name[language], group.data.name[language], `Duplicate group/skill name in ${language}`);
        }
      }
    }
  });

  it('uses static, globally unique UUID definitions and keeps ID barrels data-free', () => {
    const root = join(process.cwd(), 'math', 'skillsTaxonomy');
    const seen = new Set<string>();
    let definitions = 0;
    const walk = (folder: string): void => {
      for (const entry of readdirSync(folder, { withFileTypes: true })) {
        const file = join(folder, entry.name);
        if (entry.isDirectory()) { walk(file); continue; }
        if (!entry.name.endsWith('.ids.ts')) continue;
        const content = readFileSync(file, 'utf8');
        assert.doesNotMatch(content, /\.data(?:['"]|\b)/, `ID barrel imports Data: ${file}`);
        for (const [, uuid] of content.matchAll(/['"]([0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})['"]/gi)) {
          assert.ok(!seen.has(uuid), `Duplicate static UUID: ${uuid}`);
          seen.add(uuid);
          definitions += 1;
        }
      }
    };
    walk(root);
    assert.ok(definitions >= 33 + 15, 'Expected Natural Numbers plus existing UUID definitions');
    for (const id of [
      numeration_SkillDomain_Data.id,
      ...groups.map(group => group.data.id),
      ...groups.flatMap(group => group.skills.map(skill => skill.id)),
    ]) {
      assert.ok(seen.has(id), `Missing static ID definition: ${id}`);
    }
  });
});
