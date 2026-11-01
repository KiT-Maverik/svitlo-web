import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  advancedStellarFusion_Skill_Data,
  mainSequence_Skill_Data,
  redGiants_Skill_Data,
  stellarLifetimes_Skill_Data,
  supergiants_Skill_Data,
} from './skills';

export const stellarEvolution_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'stellarEvolution',
  id: '33289610-df9f-42ed-badd-631ab7731a51',
  name: {
    en: 'Stellar Evolution',
  },
  skills: {
    advancedStellarFusion: advancedStellarFusion_Skill_Data,
    mainSequence: mainSequence_Skill_Data,
    redGiants: redGiants_Skill_Data,
    stellarLifetimes: stellarLifetimes_Skill_Data,
    supergiants: supergiants_Skill_Data,
  },
  description: {
    methodological:
      "Mass and composition strongly constrain the duration and physical stages of a star's nuclear-burning lifetime.",
    frontend: {
      en: 'Discover how stars change as they use up their nuclear fuel.',
    },
  },
});
