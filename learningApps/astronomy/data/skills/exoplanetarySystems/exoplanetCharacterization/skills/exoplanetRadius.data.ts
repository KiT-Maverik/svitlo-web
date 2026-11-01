import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const exoplanetRadius_Skill_Data = buildSkillConfig({
  slug: "exoplanetRadius",
  id: "08ee542d-9df0-41ab-b5ae-cb7d8d81dc3a",
  name: {
    en: "Exoplanet Radius",
  },
  description: {
    methodological: "Infer a planet's size from transit or other observations and explain its dependence on stellar parameters.",
    frontend: {
      en: "Estimate a distant planet's size using a transit and information about its star.",
    },
  },
});
