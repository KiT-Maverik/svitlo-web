import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { identifyAnOrganismsHabitat_Skill_Data, identifyBioticAndAbioticFactors_Skill_Data, predictAnOrganismsResponseToEnvironmentalChange_Skill_Data, relateOrganismStructureToEnvironmentalConditions_Skill_Data } from './skills';

export const habitats_SkillGroup_Data = buildSkillGroupConfig({
  slug: "habitats",
  id: "a0b78fd2-16f0-4d39-ab65-ad420593b605",
  name: {
    en: "Habitats",
  },
  skills: {
    identifyAnOrganismsHabitat: identifyAnOrganismsHabitat_Skill_Data,
    identifyBioticAndAbioticFactors: identifyBioticAndAbioticFactors_Skill_Data,
    predictAnOrganismsResponseToEnvironmentalChange: predictAnOrganismsResponseToEnvironmentalChange_Skill_Data,
    relateOrganismStructureToEnvironmentalConditions: relateOrganismStructureToEnvironmentalConditions_Skill_Data,
  },
  description: {
    methodological: "Temperature, water, light, other organisms, and resources affect the survival prospects of a particular species.",
    frontend: {
      en: "Discover how environmental conditions shape the lives of organisms.",
    },
  },
});
