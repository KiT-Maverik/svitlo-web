import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { arrangeMusicForAnEnsemble_Skill_Data, composeAMusicalPiece_Skill_Data, composeARhythmicGroove_Skill_Data, improviseAMelody_Skill_Data, improviseARhythm_Skill_Data } from './skills';

export const compositionAndImprovisation_SkillGroup_Data = buildSkillGroupConfig({
  slug: "compositionAndImprovisation",
  id: "46737c7a-d01b-41a9-a3be-05b9d1cd3509",
  name: {
    en: "Composition and Improvisation",
  },
  skills: {
    arrangeMusicForAnEnsemble: arrangeMusicForAnEnsemble_Skill_Data,
    composeAMusicalPiece: composeAMusicalPiece_Skill_Data,
    composeARhythmicGroove: composeARhythmicGroove_Skill_Data,
    improviseAMelody: improviseAMelody_Skill_Data,
    improviseARhythm: improviseARhythm_Skill_Data,
  },
  description: {
    methodological: "Generating new musical phrases, forming completed pieces and arranging existing material require distinct authorial choices.",
    frontend: {
      en: "Invent, combine and organize musical ideas into complete pieces.",
    },
  },
});
