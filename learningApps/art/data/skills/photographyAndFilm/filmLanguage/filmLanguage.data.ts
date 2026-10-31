import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { analyzeFilmShots_Skill_Data, coordinateSoundAndImage_Skill_Data, createMeaningThroughMontage_Skill_Data, editFilmContinuity_Skill_Data, planAShotSequence_Skill_Data, storyboardAFilmSequence_Skill_Data, writeAScreenplay_Skill_Data } from './skills';

export const filmLanguage_SkillGroup_Data = buildSkillGroupConfig({
  slug: "filmLanguage",
  id: "ef99cf61-0359-4e16-804d-a576bd76c776",
  name: {
    en: "Film Language",
  },
  skills: {
    analyzeFilmShots: analyzeFilmShots_Skill_Data,
    coordinateSoundAndImage: coordinateSoundAndImage_Skill_Data,
    createMeaningThroughMontage: createMeaningThroughMontage_Skill_Data,
    editFilmContinuity: editFilmContinuity_Skill_Data,
    planAShotSequence: planAShotSequence_Skill_Data,
    storyboardAFilmSequence: storyboardAFilmSequence_Skill_Data,
    writeAScreenplay: writeAScreenplay_Skill_Data,
  },
  description: {
    methodological: "Relations among shots, timing and sound establish meaning across a moving-image work.",
    frontend: {
      en: "Explore how individual shots, edits and sounds work together in film.",
    },
  },
});
