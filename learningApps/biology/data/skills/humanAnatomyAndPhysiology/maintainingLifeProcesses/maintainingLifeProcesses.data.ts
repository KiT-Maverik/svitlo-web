import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { explainDigestionOfNutrients_Skill_Data, explainGasExchangeInTheLungs_Skill_Data, explainLungVentilation_Skill_Data, explainNutrientAbsorption_Skill_Data, explainTheHeartsRoleInCirculation_Skill_Data, explainThePassageOfFoodThroughTheDigestiveSystem_Skill_Data, explainTheRoleOfTheKidneysInExcretion_Skill_Data, identifyBreathingChangesDuringPhysicalActivity_Skill_Data } from './skills';

export const maintainingLifeProcesses_SkillGroup_Data = buildSkillGroupConfig({
  slug: "maintainingLifeProcesses",
  id: "135fbe86-2e20-4fdb-9e90-07e3c347fd0b",
  name: {
    en: "Maintaining Life Processes",
  },
  skills: {
    explainDigestionOfNutrients: explainDigestionOfNutrients_Skill_Data,
    explainGasExchangeInTheLungs: explainGasExchangeInTheLungs_Skill_Data,
    explainLungVentilation: explainLungVentilation_Skill_Data,
    explainNutrientAbsorption: explainNutrientAbsorption_Skill_Data,
    explainTheHeartsRoleInCirculation: explainTheHeartsRoleInCirculation_Skill_Data,
    explainThePassageOfFoodThroughTheDigestiveSystem: explainThePassageOfFoodThroughTheDigestiveSystem_Skill_Data,
    explainTheRoleOfTheKidneysInExcretion: explainTheRoleOfTheKidneysInExcretion_Skill_Data,
    identifyBreathingChangesDuringPhysicalActivity: identifyBreathingChangesDuringPhysicalActivity_Skill_Data,
  },
  description: {
    methodological: "Nutrients, oxygen, and blood travel along different pathways; their coordinated operation provides cells with resources.",
    frontend: {
      en: "Investigate how digestion, breathing and circulation supply the body's cells.",
    },
  },
});
