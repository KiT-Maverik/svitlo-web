import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { explainPlantsNeedForWater_Skill_Data, explainTheRoleOfAir_Skill_Data, explainTheRoleOfLight_Skill_Data, identifyTheRoleOfMineralNutrition_Skill_Data, predictEffectsOfChangingConditionsOnPlantGrowth_Skill_Data } from './skills';

export const nutritionAndGrowth_SkillGroup_Data = buildSkillGroupConfig({
  slug: "nutritionAndGrowth",
  id: "78aecc9a-264f-447e-a7a1-a28febffe2df",
  name: {
    en: "Nutrition and Growth",
  },
  skills: {
    explainPlantsNeedForWater: explainPlantsNeedForWater_Skill_Data,
    explainTheRoleOfAir: explainTheRoleOfAir_Skill_Data,
    explainTheRoleOfLight: explainTheRoleOfLight_Skill_Data,
    identifyTheRoleOfMineralNutrition: identifyTheRoleOfMineralNutrition_Skill_Data,
    predictEffectsOfChangingConditionsOnPlantGrowth: predictEffectsOfChangingConditionsOnPlantGrowth_Skill_Data,
  },
  description: {
    methodological: "Water, light, atmospheric gases, and minerals play different roles; deviations in environmental conditions change the rate and pattern of plant development.",
    frontend: {
      en: "Explore how water, light, air and minerals support plant growth.",
    },
  },
});
