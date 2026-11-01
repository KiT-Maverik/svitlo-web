import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { cosmicStructureFormation_Skill_Data, cosmicWeb_Skill_Data } from './skills';

export const cosmicStructureAndEvolution_SkillGroup_Data = buildSkillGroupConfig({
  slug: "cosmicStructureAndEvolution",
  id: "1ce2a9e1-43b6-4f49-aaad-0816c74d5916",
  name: {
    en: "Cosmic Structure and Evolution",
  },
  skills: {
    cosmicStructureFormation: cosmicStructureFormation_Skill_Data,
    cosmicWeb: cosmicWeb_Skill_Data,
  },
  description: {
    methodological: "Density perturbations, gravity and cosmic expansion shape the cosmic web over time. This branch focuses on spatial organization and dynamical evolution, as distinct from the initial hot state or the physical nature of the Universe's dark components.",
    frontend: {
      en: "Investigate how gravity shapes matter into large structures over cosmic history.",
    },
  },
});
