import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  apparentBrightness_Skill_Data,
  asterisms_Skill_Data,
  constellations_Skill_Data,
  dailySkyMotion_Skill_Data,
  seasonalSkyVisibility_Skill_Data,
  stellarProperMotion_Skill_Data,
} from './skills';

export const skyPatterns_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'skyPatterns',
  id: 'd148c95a-dce1-468f-9068-bd96247909d2',
  name: {
    en: 'Sky Patterns',
  },
  skills: {
    apparentBrightness: apparentBrightness_Skill_Data,
    asterisms: asterisms_Skill_Data,
    constellations: constellations_Skill_Data,
    dailySkyMotion: dailySkyMotion_Skill_Data,
    seasonalSkyVisibility: seasonalSkyVisibility_Skill_Data,
    stellarProperMotion: stellarProperMotion_Skill_Data,
  },
  description: {
    methodological:
      'Recognizable configurations make celestial scenes navigable, but their visibility and apparent arrangement depend on viewpoint and date.',
    frontend: {
      en: 'Recognize sky patterns and understand how their visibility changes.',
    },
  },
});
