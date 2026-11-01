import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { constructASimpleFoodChain_Skill_Data, distinguishProducersAndConsumers_Skill_Data, explainEnergyFlowInAnEcosystem_Skill_Data, explainFoodWebs_Skill_Data, recognizeDecomposers_Skill_Data } from './skills';

export const feedingRelationships_SkillGroup_Data = buildSkillGroupConfig({
  slug: "feedingRelationships",
  id: "68f19202-48b2-407f-8a10-12a4de57359d",
  name: {
    en: "Feeding Relationships",
  },
  skills: {
    constructASimpleFoodChain: constructASimpleFoodChain_Skill_Data,
    distinguishProducersAndConsumers: distinguishProducersAndConsumers_Skill_Data,
    explainEnergyFlowInAnEcosystem: explainEnergyFlowInAnEcosystem_Skill_Data,
    explainFoodWebs: explainFoodWebs_Skill_Data,
    recognizeDecomposers: recognizeDecomposers_Skill_Data,
  },
  description: {
    methodological: "Matter and energy pass between organisms, and decomposers return matter to the environment; a disrupted relationship affects subsequent links.",
    frontend: {
      en: "Explore how food relationships transfer matter and energy through ecosystems.",
    },
  },
});
