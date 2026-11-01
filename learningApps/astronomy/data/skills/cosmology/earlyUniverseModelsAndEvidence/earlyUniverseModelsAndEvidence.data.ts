import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  cosmicInflation_Skill_Data,
  cosmicMicrowaveBackground_Skill_Data,
  hotBigBangModel_Skill_Data,
  primordialNucleosynthesis_Skill_Data,
} from './skills';

export const earlyUniverseModelsAndEvidence_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'earlyUniverseModelsAndEvidence',
  id: '5f2429de-5bff-42a4-a60f-8d9faafe0a0b',
  name: {
    en: 'Early-Universe Models and Evidence',
  },
  skills: {
    cosmicInflation: cosmicInflation_Skill_Data,
    cosmicMicrowaveBackground: cosmicMicrowaveBackground_Skill_Data,
    hotBigBangModel: hotBigBangModel_Skill_Data,
    primordialNucleosynthesis: primordialNucleosynthesis_Skill_Data,
  },
  description: {
    methodological:
      'The early hot and dense Universe is reconstructed from relic radiation, primordial abundances and theoretical models whose predictions and evidence have different degrees of support.',
    frontend: {
      en: 'Explore the evidence used to reconstruct the early, hot Universe.',
    },
  },
});
