import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { controlSungPitch_Skill_Data, performBeatboxing_Skill_Data, performBodyPercussion_Skill_Data, phraseAVocalPerformance_Skill_Data, singVocalHarmony_Skill_Data } from './skills';

export const voiceAndBodyPercussion_SkillGroup_Data = buildSkillGroupConfig({
  slug: "voiceAndBodyPercussion",
  id: "18c1fd5a-c540-42f6-8662-8f81858811c4",
  name: {
    en: "Voice and Body Percussion",
  },
  skills: {
    controlSungPitch: controlSungPitch_Skill_Data,
    performBeatboxing: performBeatboxing_Skill_Data,
    performBodyPercussion: performBodyPercussion_Skill_Data,
    phraseAVocalPerformance: phraseAVocalPerformance_Skill_Data,
    singVocalHarmony: singVocalHarmony_Skill_Data,
  },
  description: {
    methodological: "Vocal articulation, breath and deliberate bodily sounds allow melodic and rhythmic performance without external instruments.",
    frontend: {
      en: "Create melodies and rhythms using singing and sounds made with your body.",
    },
  },
});
