import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const stellarRadius_Skill_Data = buildSkillConfig({
  slug: "stellarRadius",
  id: "32ed5f6b-3ae3-4019-b6fd-d969ffa37b4c",
  name: {
    en: "Stellar Radius",
  },
  description: {
    methodological: "Infer a star's size from luminosity, temperature, eclipses or other relevant evidence.",
    frontend: {
      en: "Find out how astronomers infer a star's radius from its light and other observations.",
    },
  },
});
