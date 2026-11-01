import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const variableStars_Skill_Data = buildSkillConfig({
  slug: 'variableStars',
  id: '4d1c9a55-f359-41cd-8e59-a32038c57489',
  name: {
    en: 'Variable Stars',
  },
  description: {
    methodological:
      'Classify intrinsic stellar brightness variation by physical mechanism, timescale or periodicity, distinguishing it from apparent variation caused by eclipsing companions.',
    frontend: {
      en: "Recognize different causes of changes in a star's brightness.",
    },
  },
});
