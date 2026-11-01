import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { explainCellularRespiration_Skill_Data, explainPhotosynthesis_Skill_Data, identifyExamplesOfNutrition_Skill_Data, recognizeGrowthAndDevelopment_Skill_Data, recognizeResponsesToStimuli_Skill_Data } from './skills';

export const lifeProcesses_SkillGroup_Data = buildSkillGroupConfig({
  slug: "lifeProcesses",
  id: "776f42c8-d35e-43e9-81a3-4471c5cc62be",
  name: {
    en: "Life Processes",
  },
  skills: {
    explainCellularRespiration: explainCellularRespiration_Skill_Data,
    explainPhotosynthesis: explainPhotosynthesis_Skill_Data,
    identifyExamplesOfNutrition: identifyExamplesOfNutrition_Skill_Data,
    recognizeGrowthAndDevelopment: recognizeGrowthAndDevelopment_Skill_Data,
    recognizeResponsesToStimuli: recognizeResponsesToStimuli_Skill_Data,
  },
  description: {
    methodological: "Exchange of matter and energy, increases in size, changes in form, and responses to conditions are manifestations of life that can be observed or modeled.",
    frontend: {
      en: "Discover how organisms obtain resources, grow and respond to their surroundings.",
    },
  },
});
