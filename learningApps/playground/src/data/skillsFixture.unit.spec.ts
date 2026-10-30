import { describe, expect, it } from 'vitest';
import { DEFAULT_SUPPORTED_LANGUAGES } from '@svitlo/engine/localization';

import { aurora_SkillDomain_Data, nebula_SkillDomain_Data } from '../../data/skills';
import { ember_SkillGroup_Data } from '../../data/skills/aurora/ember/ember.data';
import { frost_SkillGroup_Data } from '../../data/skills/aurora/frost/frost.data';
import { comet_SkillGroup_Data } from '../../data/skills/nebula/comet/comet.data';
import { orbit_SkillGroup_Data } from '../../data/skills/nebula/orbit/orbit.data';
import { emberPulse_Skill_Data, emberSpark_Skill_Data } from '../../data/skills/aurora/ember/skills';
import { frostCrystal_Skill_Data, frostFlake_Skill_Data } from '../../data/skills/aurora/frost/skills';
import { cometTail_Skill_Data, cometTrail_Skill_Data } from '../../data/skills/nebula/comet/skills';
import { orbitArc_Skill_Data, orbitLoop_Skill_Data } from '../../data/skills/nebula/orbit/skills';

const domains = [aurora_SkillDomain_Data, nebula_SkillDomain_Data];
const groups = [ember_SkillGroup_Data, frost_SkillGroup_Data, comet_SkillGroup_Data, orbit_SkillGroup_Data];
const skills = [emberPulse_Skill_Data, emberSpark_Skill_Data, frostCrystal_Skill_Data, frostFlake_Skill_Data,
  cometTail_Skill_Data, cometTrail_Skill_Data, orbitArc_Skill_Data, orbitLoop_Skill_Data];
const entities = [...domains, ...groups, ...skills];

describe('Playground synthetic skills taxonomy', () => {
  it('contains two domains, four groups, eight skills and unique stable UUIDs', () => {
    expect([domains.length, groups.length, skills.length]).toEqual([2, 4, 8]);
    expect(new Set(entities.map(entity => entity.id)).size).toBe(14);
    for (const entity of entities) {
      expect(entity.id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    }
  });

  it('connects each domain to two groups and each group to two distinct skills', () => {
    expect(aurora_SkillDomain_Data.groupIds).toEqual({ ember: ember_SkillGroup_Data.id, frost: frost_SkillGroup_Data.id });
    expect(nebula_SkillDomain_Data.groupIds).toEqual({ comet: comet_SkillGroup_Data.id, orbit: orbit_SkillGroup_Data.id });
    expect(ember_SkillGroup_Data.skillIds).toEqual({ emberPulse: emberPulse_Skill_Data.id, emberSpark: emberSpark_Skill_Data.id });
    expect(frost_SkillGroup_Data.skillIds).toEqual({ frostCrystal: frostCrystal_Skill_Data.id, frostFlake: frostFlake_Skill_Data.id });
    expect(comet_SkillGroup_Data.skillIds).toEqual({ cometTail: cometTail_Skill_Data.id, cometTrail: cometTrail_Skill_Data.id });
    expect(orbit_SkillGroup_Data.skillIds).toEqual({ orbitArc: orbitArc_Skill_Data.id, orbitLoop: orbitLoop_Skill_Data.id });
  });

  it('has full localized names and frontend descriptions for all supported languages', () => {
    const codes = DEFAULT_SUPPORTED_LANGUAGES.map(({ language }) => language);
    for (const entity of entities) {
      const names: Readonly<Record<string, string>> = entity.name;
      const frontend: Readonly<Record<string, string>> = entity.description.fe;
      expect(Object.keys(names).sort()).toEqual([...codes].sort());
      expect(Object.keys(frontend).sort()).toEqual([...codes].sort());
      for (const code of codes) {
        expect(names[code]?.trim()).not.toBe('');
        expect(frontend[code]?.trim()).not.toBe('');
      }
      expect(entity.description.methodological.trim()).not.toBe('');
    }
  });
});
