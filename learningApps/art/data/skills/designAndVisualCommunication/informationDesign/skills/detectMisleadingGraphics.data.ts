import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const detectMisleadingGraphics_Skill_Data = buildSkillConfig({
  slug: "detectMisleadingGraphics",
  id: "23ada7db-8ce7-453a-80a2-6661dda98483",
  name: {
    en: "Detect Misleading Graphics",
  },
  description: {
    methodological: "Identify omitted baselines, scale manipulation and decorative choices that bias interpretation.",
    frontend: {
      en: "Recognize when a graph's scale or design gives a misleading impression.",
    },
  },
});
