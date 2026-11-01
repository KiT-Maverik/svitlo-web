import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { distinguishStagesOfHumanDevelopment_Skill_Data, explainFunctionsOfTheHumanReproductiveSystem_Skill_Data, explainTheImmuneSystemsProtectiveRole_Skill_Data, explainTheImportanceOfSleepForRecovery_Skill_Data } from './skills';

export const developmentAndProtectionOfTheOrganism_SkillGroup_Data = buildSkillGroupConfig({
  slug: "developmentAndProtectionOfTheOrganism",
  id: "e64e4704-4951-4fa9-9fad-8f60a8c8f14f",
  name: {
    en: "Development and Protection of the Organism",
  },
  skills: {
    distinguishStagesOfHumanDevelopment: distinguishStagesOfHumanDevelopment_Skill_Data,
    explainFunctionsOfTheHumanReproductiveSystem: explainFunctionsOfTheHumanReproductiveSystem_Skill_Data,
    explainTheImmuneSystemsProtectiveRole: explainTheImmuneSystemsProtectiveRole_Skill_Data,
    explainTheImportanceOfSleepForRecovery: explainTheImportanceOfSleepForRecovery_Skill_Data,
  },
  description: {
    methodological: "Changes from childhood to adulthood, immune mechanisms, and physiological recovery help maintain bodily functions over time.",
    frontend: {
      en: "Explore how development, immune defenses and recovery help sustain the body.",
    },
  },
});
