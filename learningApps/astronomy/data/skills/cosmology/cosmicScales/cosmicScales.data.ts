import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  cosmicDistanceMeasures_Skill_Data,
  cosmicHorizons_Skill_Data,
  lookbackTime_Skill_Data,
  observableUniverse_Skill_Data,
} from './skills';

export const cosmicScales_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'cosmicScales',
  id: '66d02a1e-1d48-4737-853b-1ee24be54d45',
  name: {
    en: 'Cosmic Scales',
  },
  skills: {
    cosmicDistanceMeasures: cosmicDistanceMeasures_Skill_Data,
    cosmicHorizons: cosmicHorizons_Skill_Data,
    lookbackTime: lookbackTime_Skill_Data,
    observableUniverse: observableUniverse_Skill_Data,
  },
  description: {
    methodological:
      'Distances and times become linked by the finite speed of light, which limits how much of the Universe can be observed.',
    frontend: {
      en: 'Explore the immense distances and times involved in observing the cosmos.',
    },
  },
});
