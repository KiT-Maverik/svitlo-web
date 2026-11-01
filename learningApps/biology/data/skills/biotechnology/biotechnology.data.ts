import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { evaluateEcologicalRisksOfBiotechnologyUse_Skill_Data, explainThePrincipleOfGeneticModification_Skill_Data, explainThePrincipleOfSelectiveBreeding_Skill_Data, explainThePurposeOfASimpleBiotechnologicalProcedure_Skill_Data, recognizeHumanUsesOfMicroorganisms_Skill_Data } from './skills';

export const biotechnology_SkillDomain_Data = buildSkillDomainConfig({
  slug: "biotechnology",
  id: "6e041ba0-2fb9-48c6-a0eb-ee92ba9d03f1",
  name: {
    en: "Biotechnology",
  },
  groups: {
  },
  skills: {
    evaluateEcologicalRisksOfBiotechnologyUse: evaluateEcologicalRisksOfBiotechnologyUse_Skill_Data,
    explainThePrincipleOfGeneticModification: explainThePrincipleOfGeneticModification_Skill_Data,
    explainThePrincipleOfSelectiveBreeding: explainThePrincipleOfSelectiveBreeding_Skill_Data,
    explainThePurposeOfASimpleBiotechnologicalProcedure: explainThePurposeOfASimpleBiotechnologicalProcedure_Skill_Data,
    recognizeHumanUsesOfMicroorganisms: recognizeHumanUsesOfMicroorganisms_Skill_Data,
  },
  description: {
    methodological: "Use of properties of organisms, cells, enzymes, and hereditary information to obtain products and intentionally change traits. Includes selective breeding, genetic modification, and analysis of potential ecological consequences of interventions; natural ecosystem interactions belong to Ecology, while engineering applications of biological principles belong to the separate subject Engineering.",
    frontend: {
      en: "Explore how people use organisms, cells and biological processes to make useful products.",
    },
  },
});
