import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const surfaceAgeEstimation_Skill_Data = buildSkillConfig({
  slug: "surfaceAgeEstimation",
  id: "832be903-d031-4b3b-89a0-f2473316891c",
  name: {
    en: "Surface Age Estimation",
  },
  description: {
    methodological: "Use relative geologic relationships and calibrated crater statistics to infer the chronology of planetary surfaces.",
    frontend: {
      en: "Estimate when surfaces formed using geological relationships and impact craters.",
    },
  },
});
