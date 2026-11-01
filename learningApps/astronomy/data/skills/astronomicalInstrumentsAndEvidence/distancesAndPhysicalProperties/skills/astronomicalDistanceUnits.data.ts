import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const astronomicalDistanceUnits_Skill_Data = buildSkillConfig({
  slug: 'astronomicalDistanceUnits',
  id: '44b45776-82b4-4ef3-ba99-e80a65cec906',
  name: {
    en: 'Astronomical Distance Units',
    uk: 'Астрономічні одиниці відстані',
    pl: 'Astronomiczne jednostki odległości',
  },
  description: {
    methodological:
      'Interpret astronomical units, light-years and parsecs as units of length, relate their scales and distinguish light-travel distance from travel duration.',
    frontend: {
      en: 'Compare astronomical units, light-years and parsecs as measures of distance.',
      uk: 'Порівнюй астрономічні одиниці, світлові роки та парсеки як одиниці вимірювання відстані.',
      pl: 'Porównuj jednostki astronomiczne, lata świetlne i parseki jako miary odległości.',
    },
  },
});
