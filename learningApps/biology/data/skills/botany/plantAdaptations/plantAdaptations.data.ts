import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { describeSeasonalChangesInPlants_Skill_Data, recognizeAdaptationsToTheEnvironment_Skill_Data, relatePlantStructuralFeaturesToEnvironmentalConditions_Skill_Data } from './skills';

export const plantAdaptations_SkillGroup_Data = buildSkillGroupConfig({
  slug: "plantAdaptations",
  id: "2faa4f86-3f0d-44b9-bb1e-672d2d96d04f",
  name: {
    en: "Plant Adaptations",
  },
  skills: {
    describeSeasonalChangesInPlants: describeSeasonalChangesInPlants_Skill_Data,
    recognizeAdaptationsToTheEnvironment: recognizeAdaptationsToTheEnvironment_Skill_Data,
    relatePlantStructuralFeaturesToEnvironmentalConditions: relatePlantStructuralFeaturesToEnvironmentalConditions_Skill_Data,
  },
  description: {
    methodological: "Leaf, root, and shoot forms and seasonal changes can improve survival when water or light is limited or temperatures are low.",
    frontend: {
      en: "See how plant features help them survive in different environments.",
    },
  },
});
