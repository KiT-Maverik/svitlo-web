import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  exoplanetAtmosphericSpectra_Skill_Data,
  exoplanetBulkComposition_Skill_Data,
  exoplanetMass_Skill_Data,
  exoplanetOrbitalProperties_Skill_Data,
  exoplanetRadius_Skill_Data,
} from './skills';

export const exoplanetCharacterization_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'exoplanetCharacterization',
  id: '042ade1c-e4e1-4b95-865a-e5b961b24811',
  name: {
    en: 'Exoplanet Characterization',
  },
  skills: {
    exoplanetAtmosphericSpectra: exoplanetAtmosphericSpectra_Skill_Data,
    exoplanetBulkComposition: exoplanetBulkComposition_Skill_Data,
    exoplanetMass: exoplanetMass_Skill_Data,
    exoplanetOrbitalProperties: exoplanetOrbitalProperties_Skill_Data,
    exoplanetRadius: exoplanetRadius_Skill_Data,
  },
  description: {
    methodological:
      'Planet properties are inferred by combining signals and interpreting assumptions, with important differences between measured quantities and theoretical models.',
    frontend: {
      en: 'Learn how researchers infer the properties of exoplanets from indirect observations.',
    },
  },
});
