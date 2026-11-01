import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { explainTheRoleOfPollinatorsInSpeciesInteractions_Skill_Data, recognizeCompetition_Skill_Data, recognizeMutuallyBeneficialRelationships_Skill_Data, recognizePredation_Skill_Data } from './skills';

export const interactionsAmongOrganisms_SkillGroup_Data = buildSkillGroupConfig({
  slug: "interactionsAmongOrganisms",
  id: "b6747083-f25f-4e46-91e9-2e8cf655f084",
  name: {
    en: "Interactions Among Organisms",
  },
  skills: {
    explainTheRoleOfPollinatorsInSpeciesInteractions: explainTheRoleOfPollinatorsInSpeciesInteractions_Skill_Data,
    recognizeCompetition: recognizeCompetition_Skill_Data,
    recognizeMutuallyBeneficialRelationships: recognizeMutuallyBeneficialRelationships_Skill_Data,
    recognizePredation: recognizePredation_Skill_Data,
  },
  description: {
    methodological: "Organisms may use one another as resources, compete, or benefit one another; the nature of an interaction is determined by its consequences for those involved.",
    frontend: {
      en: "Explore how organisms compete, feed on one another or cooperate.",
    },
  },
});
