import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const dayAndNight_Skill_Data = buildSkillConfig({
  slug: 'dayAndNight',
  id: 'faa8f11a-cc06-42c9-8864-8151732e690a',
  name: {
    en: 'Day and Night',
  },
  description: {
    methodological:
      "Explain the alternation of illumination and darkness through Earth's rotation rather than the Sun physically circling Earth.",
    frontend: {
      en: "Explain why Earth's rotation brings alternating daylight and darkness.",
    },
  },
});
