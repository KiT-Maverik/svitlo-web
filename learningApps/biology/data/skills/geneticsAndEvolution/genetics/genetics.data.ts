import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { distinguishAGeneFromATrait_Skill_Data, explainExpressionOfGeneticInformation_Skill_Data, explainMechanismsOfTraitInheritance_Skill_Data, explainTransmissionOfHereditaryInformation_Skill_Data, recognizeDNAsRoleInStoringHereditaryInformation_Skill_Data } from './skills';

export const genetics_SkillGroup_Data = buildSkillGroupConfig({
  slug: "genetics",
  id: "892fece4-898f-42d7-bf04-7b965d5d82a8",
  name: {
    en: "Genetics",
  },
  skills: {
    distinguishAGeneFromATrait: distinguishAGeneFromATrait_Skill_Data,
    explainExpressionOfGeneticInformation: explainExpressionOfGeneticInformation_Skill_Data,
    explainMechanismsOfTraitInheritance: explainMechanismsOfTraitInheritance_Skill_Data,
    explainTransmissionOfHereditaryInformation: explainTransmissionOfHereditaryInformation_Skill_Data,
    recognizeDNAsRoleInStoringHereditaryInformation: recognizeDNAsRoleInStoringHereditaryInformation_Skill_Data,
  },
  description: {
    methodological: "Genes, as segments of hereditary information, help explain relatedness and differences; how a trait is expressed also depends on regulation and the environment.",
    frontend: {
      en: "Learn how DNA, genes and their activity shape inherited characteristics.",
    },
  },
});
