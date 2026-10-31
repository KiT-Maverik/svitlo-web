import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { controlMovementAlignment_Skill_Data, coordinateDanceWithPulse_Skill_Data, performADancePhrase_Skill_Data, useSpatialLevels_Skill_Data, varyMovementDynamics_Skill_Data } from './skills';

export const movementLanguage_SkillGroup_Data = buildSkillGroupConfig({
  slug: "movementLanguage",
  id: "1cb3cffe-4c1a-4998-95f1-3ac523ed77c0",
  name: {
    en: "Movement Language",
  },
  skills: {
    controlMovementAlignment: controlMovementAlignment_Skill_Data,
    coordinateDanceWithPulse: coordinateDanceWithPulse_Skill_Data,
    performADancePhrase: performADancePhrase_Skill_Data,
    useSpatialLevels: useSpatialLevels_Skill_Data,
    varyMovementDynamics: varyMovementDynamics_Skill_Data,
  },
  description: {
    methodological: "Bodily alignment, energy, pathways and temporal decisions distinguish expressive movement from simply moving between points.",
    frontend: {
      en: "Use body position, energy, space and time to shape expressive movement.",
    },
  },
});
