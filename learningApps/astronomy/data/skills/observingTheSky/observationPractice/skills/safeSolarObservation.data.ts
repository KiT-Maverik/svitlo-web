import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const safeSolarObservation_Skill_Data = buildSkillConfig({
  slug: "safeSolarObservation",
  id: "b4b9b469-391d-40f8-b11d-6884c76ed106",
  name: {
    en: "Safe Solar Observation",
  },
  description: {
    methodological: "Distinguish approved solar-viewing methods from unsafe direct viewing or unfiltered optical magnification.",
    frontend: {
      en: "Identify safe ways to view the Sun and avoid methods that can damage eyesight.",
    },
  },
});
