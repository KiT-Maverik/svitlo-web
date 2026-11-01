import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { explainTheRoleOfSensoryOrgansInBehavior_Skill_Data, identifyProtectiveAdaptationsInAnimals_Skill_Data, relateBodyCoveringsToTheirFunctions_Skill_Data, relateLimbStructureToLocomotion_Skill_Data } from './skills';

export const structureAndFunctions_SkillGroup_Data = buildSkillGroupConfig({
  slug: "structureAndFunctions",
  id: "54861785-2bd9-424e-8249-ed2334755aab",
  name: {
    en: "Structure and Functions",
  },
  skills: {
    explainTheRoleOfSensoryOrgansInBehavior: explainTheRoleOfSensoryOrgansInBehavior_Skill_Data,
    identifyProtectiveAdaptationsInAnimals: identifyProtectiveAdaptationsInAnimals_Skill_Data,
    relateBodyCoveringsToTheirFunctions: relateBodyCoveringsToTheirFunctions_Skill_Data,
    relateLimbStructureToLocomotion: relateLimbStructureToLocomotion_Skill_Data,
  },
  description: {
    methodological: "The forms of limbs, body coverings, and sensory structures are explained by their roles in locomotion, orientation, and protection against danger.",
    frontend: {
      en: "Explore how animal structures help them move, sense and protect themselves.",
    },
  },
});
