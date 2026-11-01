import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const freeFloatingPlanets_Skill_Data = buildSkillConfig({
  slug: "freeFloatingPlanets",
  id: "e7e468cf-17ff-42b1-84a8-ec993cdf29ae",
  name: {
    en: "Free-Floating Planets",
  },
  description: {
    methodological: "Explain planetary-mass objects not gravitationally bound to a host star, including proposed ejection or isolated-formation origins and detection by microlensing or thermal infrared emission; distinguish low illumination from a complete absence of radiation.",
    frontend: {
      en: "Learn how planets without a host star may form, move and be detected.",
    },
  },
});
