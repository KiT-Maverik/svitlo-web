import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { darkEnergyEvidence_Skill_Data, darkMatterEvidence_Skill_Data, limitsOfCosmologicalKnowledge_Skill_Data } from './skills';

export const cosmicComponentsAndConstraints_SkillGroup_Data = buildSkillGroupConfig({
  slug: "cosmicComponentsAndConstraints",
  id: "d7b419e2-0983-4fb1-853a-7705e41cce82",
  name: {
    en: "Cosmic Components and Constraints",
  },
  skills: {
    darkEnergyEvidence: darkEnergyEvidence_Skill_Data,
    darkMatterEvidence: darkMatterEvidence_Skill_Data,
    limitsOfCosmologicalKnowledge: limitsOfCosmologicalKnowledge_Skill_Data,
  },
  description: {
    methodological: "Gravitational and expansion measurements constrain otherwise unseen components, while cosmological parameters and theoretical uncertainties limit the interpretations that can be supported by available evidence.",
    frontend: {
      en: "Learn how cosmic measurements point to components and questions we cannot yet fully explain.",
    },
  },
});
