import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { describeGermination_Skill_Data, explainTheRoleOfPollination_Skill_Data, identifyTheRoleOfASeed_Skill_Data, relateFruitCharacteristicsToSeedDispersalMethods_Skill_Data, sequenceStagesOfAFloweringPlantsLifeCycle_Skill_Data } from './skills';

export const reproductionAndDevelopment_SkillGroup_Data = buildSkillGroupConfig({
  slug: "reproductionAndDevelopment",
  id: "b7d6cd43-66fc-4986-bc5d-7354db0eb6a9",
  name: {
    en: "Reproduction and Development",
  },
  skills: {
    describeGermination: describeGermination_Skill_Data,
    explainTheRoleOfPollination: explainTheRoleOfPollination_Skill_Data,
    identifyTheRoleOfASeed: identifyTheRoleOfASeed_Skill_Data,
    relateFruitCharacteristicsToSeedDispersalMethods: relateFruitCharacteristicsToSeedDispersalMethods_Skill_Data,
    sequenceStagesOfAFloweringPlantsLifeCycle: sequenceStagesOfAFloweringPlantsLifeCycle_Skill_Data,
  },
  description: {
    methodological: "A seed plant progresses from a seed through a seedling to producing the next generation; pollination and seed dispersal occur at different stages.",
    frontend: {
      en: "Follow how plants reproduce and develop through their life cycles.",
    },
  },
});
