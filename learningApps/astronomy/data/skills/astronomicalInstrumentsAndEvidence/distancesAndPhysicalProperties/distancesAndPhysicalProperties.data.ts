import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  absoluteMagnitude_Skill_Data,
  apparentMagnitude_Skill_Data,
  astronomicalDistanceUnits_Skill_Data,
  cosmicDistanceLadder_Skill_Data,
  standardCandles_Skill_Data,
  stellarParallax_Skill_Data,
} from './skills';

export const distancesAndPhysicalProperties_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'distancesAndPhysicalProperties',
  id: '5c0ef873-fe6c-4cd8-9633-c2e27dd267d8',
  name: {
    en: 'Distances and Physical Properties',
  },
  skills: {
    absoluteMagnitude: absoluteMagnitude_Skill_Data,
    apparentMagnitude: apparentMagnitude_Skill_Data,
    astronomicalDistanceUnits: astronomicalDistanceUnits_Skill_Data,
    cosmicDistanceLadder: cosmicDistanceLadder_Skill_Data,
    standardCandles: standardCandles_Skill_Data,
    stellarParallax: stellarParallax_Skill_Data,
  },
  description: {
    methodological:
      'Astronomical measurements connect remote observations to inferred size, distance and energy output using explicit models rather than direct contact.',
    frontend: {
      en: 'Explore how astronomers estimate properties they cannot measure directly.',
    },
  },
});
