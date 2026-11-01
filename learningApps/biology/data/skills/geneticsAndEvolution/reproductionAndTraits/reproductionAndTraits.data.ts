import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { distinguishHereditaryAndAcquiredTraits_Skill_Data, distinguishSexualAndAsexualReproduction_Skill_Data, explainDifferencesAmongOffspringOfTheSameSpecies_Skill_Data, identifyHereditaryTraitsInExamples_Skill_Data } from './skills';

export const reproductionAndTraits_SkillGroup_Data = buildSkillGroupConfig({
  slug: "reproductionAndTraits",
  id: "ce59653f-c5dc-4275-8ebe-1c46e4774fe0",
  name: {
    en: "Reproduction and Traits",
  },
  skills: {
    distinguishHereditaryAndAcquiredTraits: distinguishHereditaryAndAcquiredTraits_Skill_Data,
    distinguishSexualAndAsexualReproduction: distinguishSexualAndAsexualReproduction_Skill_Data,
    explainDifferencesAmongOffspringOfTheSameSpecies: explainDifferencesAmongOffspringOfTheSameSpecies_Skill_Data,
    identifyHereditaryTraitsInExamples: identifyHereditaryTraitsInExamples_Skill_Data,
  },
  description: {
    methodological: "Inherited characteristics can recur in offspring, but individuals of one species are not exact copies; reproductive mode affects variation.",
    frontend: {
      en: "Discover why offspring resemble their relatives but are not always identical.",
    },
  },
});
