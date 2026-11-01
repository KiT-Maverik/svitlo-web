import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const exoplanetOrbitalProperties_Skill_Data = buildSkillConfig({
  slug: "exoplanetOrbitalProperties",
  id: "e3a012cd-914d-4058-8beb-d518ba4831c3",
  name: {
    en: "Exoplanet Orbital Properties",
  },
  description: {
    methodological: "Infer or compare orbital period, eccentricity and star–planet distance using available data.",
    frontend: {
      en: "Compare the periods, shapes and sizes of exoplanet orbits.",
    },
  },
});
