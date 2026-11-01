import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  ageOfTheSolarSystem_Skill_Data,
  earlyDifferentiation_Skill_Data,
  originOfTheMoon_Skill_Data,
  planetaryAccretion_Skill_Data,
  protoplanetaryDisks_Skill_Data,
} from './skills';

export const formationAndChronology_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'formationAndChronology',
  id: '7fa39186-b431-40e2-8429-f0d84de5a7d5',
  name: {
    en: 'Formation and Chronology',
  },
  skills: {
    ageOfTheSolarSystem: ageOfTheSolarSystem_Skill_Data,
    earlyDifferentiation: earlyDifferentiation_Skill_Data,
    originOfTheMoon: originOfTheMoon_Skill_Data,
    planetaryAccretion: planetaryAccretion_Skill_Data,
    protoplanetaryDisks: protoplanetaryDisks_Skill_Data,
  },
  description: {
    methodological:
      'The formation model must explain both shared planetary characteristics and striking differences among observed worlds.',
    frontend: {
      en: 'Trace the evidence for how the Solar System grew and changed over time.',
    },
  },
});
