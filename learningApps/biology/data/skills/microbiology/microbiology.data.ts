import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { distinguishBacteriaAndArchaea_Skill_Data, distinguishBeneficialAndHarmfulMicrobialInteractionsWithHumans_Skill_Data, explainBacterialCellDivision_Skill_Data, explainProkaryoticCellStructure_Skill_Data, explainTheirRoleInDecomposition_Skill_Data, explainTheRoleOfMicroorganismsInFermentation_Skill_Data, identifyBacterialHabitats_Skill_Data, recognizeMicroorganismsFromDescriptions_Skill_Data, recognizeMicroscopicEukaryotes_Skill_Data } from './skills';

export const microbiology_SkillDomain_Data = buildSkillDomainConfig({
  slug: "microbiology",
  id: "3ed25895-70bb-442b-b62f-218f92f1ccaf",
  name: {
    en: "Microbiology",
  },
  groups: {
  },
  skills: {
    distinguishBacteriaAndArchaea: distinguishBacteriaAndArchaea_Skill_Data,
    distinguishBeneficialAndHarmfulMicrobialInteractionsWithHumans: distinguishBeneficialAndHarmfulMicrobialInteractionsWithHumans_Skill_Data,
    explainBacterialCellDivision: explainBacterialCellDivision_Skill_Data,
    explainProkaryoticCellStructure: explainProkaryoticCellStructure_Skill_Data,
    explainTheirRoleInDecomposition: explainTheirRoleInDecomposition_Skill_Data,
    explainTheRoleOfMicroorganismsInFermentation: explainTheRoleOfMicroorganismsInFermentation_Skill_Data,
    identifyBacterialHabitats: identifyBacterialHabitats_Skill_Data,
    recognizeMicroorganismsFromDescriptions: recognizeMicroorganismsFromDescriptions_Skill_Data,
    recognizeMicroscopicEukaryotes: recognizeMicroscopicEukaryotes_Skill_Data,
  },
  description: {
    methodological: "Microscopic cellular life forms and their processes, including bacteria, fermentation, decomposition, and interactions with the human body. Microscopic size does not define a single taxon; this Domain considers the shared context of microbial processes.",
    frontend: {
      en: "Discover the diversity of microscopic cellular life and its roles in nature and human activities.",
    },
  },
});
