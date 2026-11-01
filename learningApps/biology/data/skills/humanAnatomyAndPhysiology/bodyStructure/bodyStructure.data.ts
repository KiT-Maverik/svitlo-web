import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { distinguishAnOrganFromAnOrganSystem_Skill_Data, identifyMajorBodyParts_Skill_Data, relateOrgansToTheirFunctions_Skill_Data } from './skills';

export const bodyStructure_SkillGroup_Data = buildSkillGroupConfig({
  slug: "bodyStructure",
  id: "89ff6336-56ca-4763-8058-5b9f999946ee",
  name: {
    en: "Body Structure",
  },
  skills: {
    distinguishAnOrganFromAnOrganSystem: distinguishAnOrganFromAnOrganSystem_Skill_Data,
    identifyMajorBodyParts: identifyMajorBodyParts_Skill_Data,
    relateOrgansToTheirFunctions: relateOrgansToTheirFunctions_Skill_Data,
  },
  description: {
    methodological: "External and internal body parts form organs and systems, each performing a particular function in the organism.",
    frontend: {
      en: "Learn how body parts, organs and systems fit together.",
    },
  },
});
