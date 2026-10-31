import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { interpretMusicalMeter_Skill_Data, maintainASteadyBeat_Skill_Data, performSyncopation_Skill_Data, reproduceARhythmicPattern_Skill_Data, usePolyrhythm_Skill_Data } from './skills';

export const pulseAndRhythm_SkillGroup_Data = buildSkillGroupConfig({
  slug: "pulseAndRhythm",
  id: "7baa3205-c393-4572-81e5-6ed3f5401197",
  name: {
    en: "Pulse and Rhythm",
  },
  skills: {
    interpretMusicalMeter: interpretMusicalMeter_Skill_Data,
    maintainASteadyBeat: maintainASteadyBeat_Skill_Data,
    performSyncopation: performSyncopation_Skill_Data,
    reproduceARhythmicPattern: reproduceARhythmicPattern_Skill_Data,
    usePolyrhythm: usePolyrhythm_Skill_Data,
  },
  description: {
    methodological: "A steady temporal reference can coexist with differing performed durations, accents and layered rhythmic cycles.",
    frontend: {
      en: "Explore how a steady pulse supports different rhythmic patterns.",
    },
  },
});
