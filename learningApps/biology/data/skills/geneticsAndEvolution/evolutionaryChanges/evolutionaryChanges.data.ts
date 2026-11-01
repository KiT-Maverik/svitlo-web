import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { distinguishIndividualChangesDuringLifeFromPopulationChanges_Skill_Data, explainCommonAncestryOfSpecies_Skill_Data, explainHereditaryVariationAmongIndividuals_Skill_Data, explainMechanismsOfEvolutionaryChange_Skill_Data, explainNaturalSelection_Skill_Data, explainSpeciation_Skill_Data, explainTheTheoryOfEvolution_Skill_Data, interpretEvidenceOfEvolution_Skill_Data } from './skills';

export const evolutionaryChanges_SkillGroup_Data = buildSkillGroupConfig({
  slug: "evolutionaryChanges",
  id: "00e1ba26-ce3a-4517-8d04-c29f54960bc4",
  name: {
    en: "Evolutionary Changes",
  },
  skills: {
    distinguishIndividualChangesDuringLifeFromPopulationChanges: distinguishIndividualChangesDuringLifeFromPopulationChanges_Skill_Data,
    explainCommonAncestryOfSpecies: explainCommonAncestryOfSpecies_Skill_Data,
    explainHereditaryVariationAmongIndividuals: explainHereditaryVariationAmongIndividuals_Skill_Data,
    explainMechanismsOfEvolutionaryChange: explainMechanismsOfEvolutionaryChange_Skill_Data,
    explainNaturalSelection: explainNaturalSelection_Skill_Data,
    explainSpeciation: explainSpeciation_Skill_Data,
    explainTheTheoryOfEvolution: explainTheTheoryOfEvolution_Skill_Data,
    interpretEvidenceOfEvolution: interpretEvidenceOfEvolution_Skill_Data,
  },
  description: {
    methodological: "Hereditary variation and differences in reproductive success alter the prevalence of traits in populations across generations; this is not the same as development of an individual organism.",
    frontend: {
      en: "Discover how inherited variation changes within populations over generations.",
    },
  },
});
