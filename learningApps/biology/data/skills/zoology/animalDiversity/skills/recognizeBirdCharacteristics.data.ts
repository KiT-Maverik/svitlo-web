import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const recognizeBirdCharacteristics_Skill_Data = buildSkillConfig({
  slug: "recognizeBirdCharacteristics",
  id: "774a8afe-32ef-429f-af0d-e9e0d48ff6cf",
  name: {
    en: "Recognize Bird Characteristics",
  },
  description: {
    methodological: "Use feathers as the primary diagnostic characteristic of birds, regardless of their ability to fly.",
    frontend: {
      en: "Recognize birds by their feathers, even when they cannot fly.",
    },
  },
});
