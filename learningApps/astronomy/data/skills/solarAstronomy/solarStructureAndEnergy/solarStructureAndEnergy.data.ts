import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  solarAtmosphere_Skill_Data,
  solarInterior_Skill_Data,
  solarLuminosity_Skill_Data,
  solarNuclearFusion_Skill_Data,
} from './skills';

export const solarStructureAndEnergy_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'solarStructureAndEnergy',
  id: 'd007c001-5fe3-42fd-951c-3e5507073f31',
  name: {
    en: 'Solar Structure and Energy',
  },
  skills: {
    solarAtmosphere: solarAtmosphere_Skill_Data,
    solarInterior: solarInterior_Skill_Data,
    solarLuminosity: solarLuminosity_Skill_Data,
    solarNuclearFusion: solarNuclearFusion_Skill_Data,
  },
  description: {
    methodological:
      'Solar radiation originates from processes in the interior and travels outward through distinct plasma and atmospheric regions.',
    frontend: {
      en: 'Learn how energy moves from deep inside the Sun to the space around it.',
    },
  },
});
