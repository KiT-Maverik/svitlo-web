import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { composeAMelody_Skill_Data, distinguishMusicalIntervals_Skill_Data, readPitchNotation_Skill_Data, recognizeMelodicContour_Skill_Data, useMusicalScales_Skill_Data } from './skills';

export const pitchAndMelody_SkillGroup_Data = buildSkillGroupConfig({
  slug: "pitchAndMelody",
  id: "a4e0bd90-0a3d-40c6-9f77-52bc073fa2b6",
  name: {
    en: "Pitch and Melody",
  },
  skills: {
    composeAMelody: composeAMelody_Skill_Data,
    distinguishMusicalIntervals: distinguishMusicalIntervals_Skill_Data,
    readPitchNotation: readPitchNotation_Skill_Data,
    recognizeMelodicContour: recognizeMelodicContour_Skill_Data,
    useMusicalScales: useMusicalScales_Skill_Data,
  },
  description: {
    methodological: "Melodic patterns rely on relative pitch motion, intervals and a selected pitch collection.",
    frontend: {
      en: "Explore how notes move and combine to make melodies.",
    },
  },
});
