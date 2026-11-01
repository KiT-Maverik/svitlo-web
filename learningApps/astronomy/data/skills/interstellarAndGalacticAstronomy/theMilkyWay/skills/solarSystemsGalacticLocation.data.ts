import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const solarSystemsGalacticLocation_Skill_Data = buildSkillConfig({
  slug: "solarSystemsGalacticLocation",
  id: "b4eca2f9-27c6-41d7-93e3-f1a183415b1f",
  name: {
    en: "Solar System's Galactic Location",
  },
  description: {
    methodological: "Locate the Sun approximately within the Galactic disk, distinguishing its local spiral-arm environment from the Galactic center.",
    frontend: {
      en: "Locate the Solar System within the Milky Way rather than at its centre.",
    },
  },
});
