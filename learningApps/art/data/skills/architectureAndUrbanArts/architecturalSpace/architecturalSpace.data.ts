import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { analyzeBuildingCirculation_Skill_Data, analyzeSpatialProportions_Skill_Data, composeASpatialSequence_Skill_Data, readArchitecturalPlans_Skill_Data } from './skills';

export const architecturalSpace_SkillGroup_Data = buildSkillGroupConfig({
  slug: "architecturalSpace",
  id: "e7a0c57f-5516-46ab-9158-a9f7f9013d46",
  name: {
    en: "Architectural Space",
  },
  skills: {
    analyzeBuildingCirculation: analyzeBuildingCirculation_Skill_Data,
    analyzeSpatialProportions: analyzeSpatialProportions_Skill_Data,
    composeASpatialSequence: composeASpatialSequence_Skill_Data,
    readArchitecturalPlans: readArchitecturalPlans_Skill_Data,
  },
  description: {
    methodological: "Proportion, enclosure and movement shape the sensory experience of a building.",
    frontend: {
      en: "Explore how the sizes and connections of spaces shape what a building feels like.",
    },
  },
});
