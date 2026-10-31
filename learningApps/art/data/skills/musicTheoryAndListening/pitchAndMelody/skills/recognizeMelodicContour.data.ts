import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const recognizeMelodicContour_Skill_Data = buildSkillConfig({
  slug: "recognizeMelodicContour",
  id: "01e30a13-9365-4f29-8585-b132a0477869",
  name: {
    en: "Recognize Melodic Contour",
  },
  description: {
    methodological: "Trace rising, falling and repeated pitches across an audible musical phrase.",
    frontend: {
      en: "Hear whether a melody rises, falls or stays on the same note.",
    },
  },
});
