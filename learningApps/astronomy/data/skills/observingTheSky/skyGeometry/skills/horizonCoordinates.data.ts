import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const horizonCoordinates_Skill_Data = buildSkillConfig({
  slug: "horizonCoordinates",
  id: "70f45d89-bf5b-42e2-9b00-7b04a7a48c0a",
  name: {
    en: "Horizon Coordinates",
  },
  description: {
    methodological: "Locate a celestial object using altitude and azimuth relative to an observer's horizon and orientation.",
    frontend: {
      en: "Find a sky object's direction using its height above the horizon and compass bearing.",
    },
  },
});
