import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { distinguishAVirusFromACellularOrganism_Skill_Data, explainMechanismsOfViralTransmission_Skill_Data, explainWhatAVirusIs_Skill_Data } from './skills';

export const virology_SkillDomain_Data = buildSkillDomainConfig({
  slug: "virology",
  id: "6f623b80-73dc-4f25-8d00-7be5a74a4096",
  name: {
    en: "Virology",
  },
  groups: {
  },
  skills: {
    distinguishAVirusFromACellularOrganism: distinguishAVirusFromACellularOrganism_Skill_Data,
    explainMechanismsOfViralTransmission: explainMechanismsOfViralTransmission_Skill_Data,
    explainWhatAVirusIs: explainWhatAVirusIs_Skill_Data,
  },
  description: {
    methodological: "Viruses as noncellular infectious agents: structure, reproduction inside host cells, and routes of transmission. They are not cellular organisms, although they are studied alongside them.",
    frontend: {
      en: "Explore what viruses are, how they reproduce in host cells and how they spread.",
    },
  },
});
