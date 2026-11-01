import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const solarLuminosity_Skill_Data = buildSkillConfig({
  slug: "solarLuminosity",
  id: "a8af3148-e49f-4628-869e-95fd4dde8bbf",
  name: {
    en: "Solar Luminosity",
  },
  description: {
    methodological: "Interpret the Sun's total radiant output and its relationship to illumination received at different distances.",
    frontend: {
      en: "Understand the Sun's total energy output and how received light changes with distance.",
    },
  },
});
