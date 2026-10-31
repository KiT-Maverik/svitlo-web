import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { choreographToMusic_Skill_Data, createAMovementMotif_Skill_Data, designDanceFormations_Skill_Data, structureADanceComposition_Skill_Data, varyAMovementMotif_Skill_Data } from './skills';

export const choreography_SkillGroup_Data = buildSkillGroupConfig({
  slug: "choreography",
  id: "6318e49f-0253-4a32-a0f5-24cba3bec330",
  name: {
    en: "Choreography",
  },
  skills: {
    choreographToMusic: choreographToMusic_Skill_Data,
    createAMovementMotif: createAMovementMotif_Skill_Data,
    designDanceFormations: designDanceFormations_Skill_Data,
    structureADanceComposition: structureADanceComposition_Skill_Data,
    varyAMovementMotif: varyAMovementMotif_Skill_Data,
  },
  description: {
    methodological: "Movement motifs and their transformations create deliberate time-space relationships among dancers.",
    frontend: {
      en: "Create and transform movement phrases to make a complete dance.",
    },
  },
});
