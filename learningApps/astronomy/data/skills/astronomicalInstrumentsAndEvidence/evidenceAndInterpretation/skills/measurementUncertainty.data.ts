import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const measurementUncertainty_Skill_Data = buildSkillConfig({
  slug: "measurementUncertainty",
  id: "9beca053-75d2-489f-a882-2f7bcc1a49f6",
  name: {
    en: "Measurement Uncertainty",
  },
  description: {
    methodological: "Evaluate how instrument limits, measurement error and model assumptions affect the confidence of an astronomical inference.",
    frontend: {
      en: "Recognize how errors and assumptions affect confidence in astronomical measurements.",
    },
  },
});
