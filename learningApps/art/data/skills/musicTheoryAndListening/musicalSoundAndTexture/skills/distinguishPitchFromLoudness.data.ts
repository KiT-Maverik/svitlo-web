import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const distinguishPitchFromLoudness_Skill_Data = buildSkillConfig({
  slug: "distinguishPitchFromLoudness",
  id: "3984a4ae-4fd1-49c2-b66e-2347e714e433",
  name: {
    en: "Distinguish Pitch from Loudness",
  },
  description: {
    methodological: "Identify perceived note height separately from sound intensity rather than conflating them.",
    frontend: {
      en: "Tell whether a sound is high or low without confusing it with loudness.",
    },
  },
});
