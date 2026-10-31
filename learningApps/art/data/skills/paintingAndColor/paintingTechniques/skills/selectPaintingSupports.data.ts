import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const selectPaintingSupports_Skill_Data = buildSkillConfig({
  slug: "selectPaintingSupports",
  id: "af7e137a-5b1a-4c42-a1ef-0a3534e4d42c",
  name: {
    en: "Select Painting Supports",
  },
  description: {
    methodological: "Match the properties of paper, canvas or board to adhesion, texture and expressive needs.",
    frontend: {
      en: "Choose paper, canvas or another surface that suits your painting materials.",
    },
  },
});
