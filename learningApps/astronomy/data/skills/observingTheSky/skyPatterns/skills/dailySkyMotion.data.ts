import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const dailySkyMotion_Skill_Data = buildSkillConfig({
  slug: 'dailySkyMotion',
  id: '4be01b8b-7f4c-4a43-a45b-1df88ecc6eb9',
  name: {
    en: 'Daily Sky Motion',
  },
  description: {
    methodological:
      'Describe the apparent east-to-west paths of celestial objects across the sky, including circumpolar paths.',
    frontend: {
      en: 'Describe how stars appear to travel across the sky during a day or night.',
    },
  },
});
