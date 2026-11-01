import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const spaceWeather_Skill_Data = buildSkillConfig({
  slug: "spaceWeather",
  id: "78d330ce-dffd-4f9a-92bd-f46c8b7f33e4",
  name: {
    en: "Space Weather",
  },
  description: {
    methodological: "Interpret solar-driven changes that can affect spacecraft, radio systems and near-Earth space without equating them with terrestrial weather.",
    frontend: {
      en: "Learn how solar activity can disrupt space technology and communications.",
    },
  },
});
