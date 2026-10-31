import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { analyzeMusicalForm_Skill_Data, constructAMusicalChord_Skill_Data, identifyMusicalMotifs_Skill_Data, interpretConsonanceAndDissonance_Skill_Data, recognizeHarmonicProgressions_Skill_Data } from './skills';

export const harmonyAndMusicalForm_SkillGroup_Data = buildSkillGroupConfig({
  slug: "harmonyAndMusicalForm",
  id: "484cf7d8-91c9-40ea-984a-6aa564960b6c",
  name: {
    en: "Harmony and Musical Form",
  },
  skills: {
    analyzeMusicalForm: analyzeMusicalForm_Skill_Data,
    constructAMusicalChord: constructAMusicalChord_Skill_Data,
    identifyMusicalMotifs: identifyMusicalMotifs_Skill_Data,
    interpretConsonanceAndDissonance: interpretConsonanceAndDissonance_Skill_Data,
    recognizeHarmonicProgressions: recognizeHarmonicProgressions_Skill_Data,
  },
  description: {
    methodological: "Vertical sonorities and large-scale repetition create musical expectation within a chosen tradition.",
    frontend: {
      en: "Discover how groups of notes and repeated sections shape a piece of music.",
    },
  },
});
