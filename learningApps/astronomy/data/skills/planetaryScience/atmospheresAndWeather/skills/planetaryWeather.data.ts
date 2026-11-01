import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const planetaryWeather_Skill_Data = buildSkillConfig({
  slug: 'planetaryWeather',
  id: 'ddbe1a3c-2ccd-4736-8927-b35e27c7902f',
  name: {
    en: 'Planetary Weather',
  },
  description: {
    methodological:
      'Identify and interpret weather phenomena such as storms, clouds and winds under non-Earth conditions.',
    frontend: {
      en: "Recognize storms, winds and clouds on worlds with conditions unlike Earth's.",
    },
  },
});
