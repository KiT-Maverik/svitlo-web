import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const solarEclipses_Skill_Data = buildSkillConfig({
  slug: 'solarEclipses',
  id: 'cfa13baf-336a-47b6-bb34-8944d8ee60b5',
  name: {
    en: 'Solar Eclipses',
  },
  description: {
    methodological:
      'Explain the conditions, shadow regions and different observational appearances of a solar eclipse.',
    frontend: {
      en: 'Explain when a solar eclipse happens and why its appearance varies by location.',
    },
  },
});
