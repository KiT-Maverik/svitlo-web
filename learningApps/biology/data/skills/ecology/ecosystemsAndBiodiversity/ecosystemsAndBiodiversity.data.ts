import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { distinguishAnOrganismPopulationAndCommunity_Skill_Data, explainMatterCyclingInEcosystems_Skill_Data, explainTheImportanceOfBiodiversity_Skill_Data, explainTheInterdependenceOfEcosystemComponents_Skill_Data, identifyThreatsToLocalSpecies_Skill_Data, justifyProtectionOfSpeciesListedInRedDataBooks_Skill_Data, recognizeNaturalCommunitiesOfUkraine_Skill_Data } from './skills';

export const ecosystemsAndBiodiversity_SkillGroup_Data = buildSkillGroupConfig({
  slug: "ecosystemsAndBiodiversity",
  id: "d97c7695-6316-42e8-9647-fdb9b3303bf4",
  name: {
    en: "Ecosystems and Biodiversity",
  },
  skills: {
    distinguishAnOrganismPopulationAndCommunity: distinguishAnOrganismPopulationAndCommunity_Skill_Data,
    explainMatterCyclingInEcosystems: explainMatterCyclingInEcosystems_Skill_Data,
    explainTheImportanceOfBiodiversity: explainTheImportanceOfBiodiversity_Skill_Data,
    explainTheInterdependenceOfEcosystemComponents: explainTheInterdependenceOfEcosystemComponents_Skill_Data,
    identifyThreatsToLocalSpecies: identifyThreatsToLocalSpecies_Skill_Data,
    justifyProtectionOfSpeciesListedInRedDataBooks: justifyProtectionOfSpeciesListedInRedDataBooks_Skill_Data,
    recognizeNaturalCommunitiesOfUkraine: recognizeNaturalCommunitiesOfUkraine_Skill_Data,
  },
  description: {
    methodological: "Individual organisms, populations, and communities interact with one another and with nonliving factors. Changes in species composition or resource availability can have indirect consequences for an entire ecosystem, making these relationships and the role of biodiversity important to understand.",
    frontend: {
      en: "Understand how populations, communities and environmental factors form ecosystems.",
    },
  },
});
