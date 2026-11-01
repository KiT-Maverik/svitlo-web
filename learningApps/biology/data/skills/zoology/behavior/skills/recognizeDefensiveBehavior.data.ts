import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const recognizeDefensiveBehavior_Skill_Data = buildSkillConfig({
  slug: "recognizeDefensiveBehavior",
  id: "f0b5a1bb-a72b-4b0e-85de-aed764100045",
  name: {
    en: "Recognize Defensive Behavior",
  },
  description: {
    methodological: "Determine whether fleeing, freezing, distraction, or attacking reduces a threat in a given situation.",
    frontend: {
      en: "Recognize behaviors animals use when threatened.",
    },
  },
});
