import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const solarSystemComponents_Skill_Data = buildSkillConfig({
  slug: 'solarSystemComponents',
  id: '2c404b38-fbad-47f6-a70c-fe12218ac240',
  name: {
    en: 'Solar System Components',
  },
  description: {
    methodological:
      "Classify the Sun, planets, natural satellites and smaller bodies by their roles in the system's gravitational architecture.",
    frontend: {
      en: 'Recognize the Sun, planets, moons and smaller bodies by their roles in the Solar System.',
    },
  },
});
