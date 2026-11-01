import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const orbitalElements_Skill_Data = buildSkillConfig({
  slug: "orbitalElements",
  id: "d4677281-c68b-4a68-be2f-01d00ae8e185",
  name: {
    en: "Orbital Elements",
  },
  description: {
    methodological: "Interpret inclination, eccentricity and other orbital descriptors when comparing celestial trajectories.",
    frontend: {
      en: "Read the parameters that describe an orbit's shape and orientation.",
    },
  },
});
