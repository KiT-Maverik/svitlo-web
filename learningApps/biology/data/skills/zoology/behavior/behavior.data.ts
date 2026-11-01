import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { explainBenefitsOfGroupBehavior_Skill_Data, explainTheRoleOfSignalsInAnimalCommunication_Skill_Data, recognizeDefensiveBehavior_Skill_Data } from './skills';

export const behavior_SkillGroup_Data = buildSkillGroupConfig({
  slug: "behavior",
  id: "59114693-ede5-4e1f-af01-366f42656347",
  name: {
    en: "Behavior",
  },
  skills: {
    explainBenefitsOfGroupBehavior: explainBenefitsOfGroupBehavior_Skill_Data,
    explainTheRoleOfSignalsInAnimalCommunication: explainTheRoleOfSignalsInAnimalCommunication_Skill_Data,
    recognizeDefensiveBehavior: recognizeDefensiveBehavior_Skill_Data,
  },
  description: {
    methodological: "Animal actions arise in response to signals and needs; observation makes it possible to identify defense, communication, and benefits of living in groups.",
    frontend: {
      en: "Explore how animal behavior supports communication, protection and group life.",
    },
  },
});
