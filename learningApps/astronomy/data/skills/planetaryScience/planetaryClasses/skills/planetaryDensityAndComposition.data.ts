import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const planetaryDensityAndComposition_Skill_Data = buildSkillConfig({
  slug: "planetaryDensityAndComposition",
  id: "53bffe0e-2822-4ca4-8bc1-c9781059edce",
  name: {
    en: "Planetary Density and Composition",
  },
  description: {
    methodological: "Use mass, radius and density to constrain plausible bulk material and planetary classification.",
    frontend: {
      en: "Use a world's mass, size and density to reason about what it contains.",
    },
  },
});
