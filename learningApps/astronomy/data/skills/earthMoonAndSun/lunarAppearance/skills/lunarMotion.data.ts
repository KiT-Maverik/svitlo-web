import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const lunarMotion_Skill_Data = buildSkillConfig({
  slug: 'lunarMotion',
  id: '2daf6a5f-e5a6-4688-892b-c90e0d091fcf',
  name: {
    en: 'Lunar Motion',
  },
  description: {
    methodological: "Trace the Moon's changing position against background stars across successive nights.",
    frontend: {
      en: 'Track how the Moon changes position against the stars from night to night.',
    },
  },
});
