import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const classifyAnimalsByDiet_Skill_Data = buildSkillConfig({
  slug: "classifyAnimalsByDiet",
  id: "556699c0-f7b9-4254-aa24-b157bbd4a28e",
  name: {
    en: "Classify Animals by Diet",
  },
  description: {
    methodological: "Classify examples as herbivores, carnivores, or omnivores according to actual diets rather than animal names.",
    frontend: {
      en: "Classify animals by what they actually eat.",
    },
  },
});
