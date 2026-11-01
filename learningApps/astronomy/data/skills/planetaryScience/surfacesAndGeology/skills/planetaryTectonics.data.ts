import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const planetaryTectonics_Skill_Data = buildSkillConfig({
  slug: "planetaryTectonics",
  id: "c00cb75e-f141-46c9-907c-f324a61832f4",
  name: {
    en: "Planetary Tectonics",
  },
  description: {
    methodological: "Compare crustal deformation and tectonic regimes across worlds without assuming Earth-style plate tectonics everywhere.",
    frontend: {
      en: "Compare how the crusts of different worlds bend, break or move.",
    },
  },
});
