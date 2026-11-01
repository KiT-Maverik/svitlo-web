import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  stellarHydrostaticEquilibrium_Skill_Data,
  stellarLuminosity_Skill_Data,
  stellarMass_Skill_Data,
  stellarRadius_Skill_Data,
  stellarTemperature_Skill_Data,
} from './skills';

export const stellarProperties_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'stellarProperties',
  id: 'd9b71bcb-af7a-4694-9d95-3f5e95d27ba2',
  name: {
    en: 'Stellar Properties',
  },
  skills: {
    stellarHydrostaticEquilibrium: stellarHydrostaticEquilibrium_Skill_Data,
    stellarLuminosity: stellarLuminosity_Skill_Data,
    stellarMass: stellarMass_Skill_Data,
    stellarRadius: stellarRadius_Skill_Data,
    stellarTemperature: stellarTemperature_Skill_Data,
  },
  description: {
    methodological:
      'Observed spectra and brightness are combined with models to infer physical characteristics that cannot be measured by direct sampling.',
    frontend: {
      en: 'Learn how astronomers measure and infer the physical properties of stars.',
    },
  },
});
