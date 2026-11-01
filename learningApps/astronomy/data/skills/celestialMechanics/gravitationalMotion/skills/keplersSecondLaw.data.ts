import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const keplersSecondLaw_Skill_Data = buildSkillConfig({
  slug: 'keplersSecondLaw',
  id: '08453948-3f5d-4e81-92b4-d1e3a083a326',
  name: {
    en: "Kepler's Second Law",
  },
  description: {
    methodological:
      'Use the equal-areas-in-equal-times relation to explain variation in orbital speed as an orbiting body changes its distance from the central focus.',
    frontend: {
      en: 'Explain why an orbiting body moves faster when it is closer to the central body.',
    },
  },
});
