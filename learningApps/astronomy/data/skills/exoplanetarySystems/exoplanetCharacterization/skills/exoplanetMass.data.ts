import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const exoplanetMass_Skill_Data = buildSkillConfig({
  slug: "exoplanetMass",
  id: "4da7390d-cd26-4fae-b487-4267e589523b",
  name: {
    en: "Exoplanet Mass",
  },
  description: {
    methodological: "Infer a planet's mass from orbital effects, including limits set by viewing geometry and models.",
    frontend: {
      en: "Explore how a planet's gravitational effects help estimate its mass.",
    },
  },
});
