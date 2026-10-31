import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { classifyMusicalInstruments_Skill_Data, distinguishPitchFromLoudness_Skill_Data, followMusicalPhrases_Skill_Data, identifyMusicalTexture_Skill_Data, identifyMusicalTimbre_Skill_Data } from './skills';

export const musicalSoundAndTexture_SkillGroup_Data = buildSkillGroupConfig({
  slug: "musicalSoundAndTexture",
  id: "a524868f-b5fe-4d53-a8f8-9b9471f9a6df",
  name: {
    en: "Musical Sound and Texture",
  },
  skills: {
    classifyMusicalInstruments: classifyMusicalInstruments_Skill_Data,
    distinguishPitchFromLoudness: distinguishPitchFromLoudness_Skill_Data,
    followMusicalPhrases: followMusicalPhrases_Skill_Data,
    identifyMusicalTexture: identifyMusicalTexture_Skill_Data,
    identifyMusicalTimbre: identifyMusicalTimbre_Skill_Data,
  },
  description: {
    methodological: "Timbre, sound sources and simultaneous parts provide perceptual distinctions beyond the height or intensity of a note.",
    frontend: {
      en: "Discover the sounds and layers that make musical performances recognizable.",
    },
  },
});
