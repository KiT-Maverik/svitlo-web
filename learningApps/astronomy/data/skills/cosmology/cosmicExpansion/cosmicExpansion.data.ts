import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  cosmologicalModels_Skill_Data,
  cosmologicalRedshift_Skill_Data,
  expansionVersusBoundSystems_Skill_Data,
  hubbleLemaitreRelation_Skill_Data,
} from './skills';

export const cosmicExpansion_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'cosmicExpansion',
  id: '458d25f5-7829-4af2-b930-99e5c7c31e9c',
  name: {
    en: 'Cosmic Expansion',
  },
  skills: {
    cosmologicalModels: cosmologicalModels_Skill_Data,
    cosmologicalRedshift: cosmologicalRedshift_Skill_Data,
    expansionVersusBoundSystems: expansionVersusBoundSystems_Skill_Data,
    hubbleLemaitreRelation: hubbleLemaitreRelation_Skill_Data,
  },
  description: {
    methodological:
      'Large-scale redshift patterns support an evolving cosmic geometry, not an ordinary explosion into pre-existing empty space.',
    frontend: {
      en: 'Learn what observations reveal about the expansion of the Universe.',
    },
  },
});
