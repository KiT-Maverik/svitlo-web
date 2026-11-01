import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const solarAltitudeAndDaylight_Skill_Data = buildSkillConfig({
  slug: "solarAltitudeAndDaylight",
  id: "af55a0d8-0cbb-4317-bccc-92c31d5100d5",
  name: {
    en: "Solar Altitude and Daylight",
  },
  description: {
    methodological: "Relate the Sun's apparent height and daily path to latitude, date and daylight duration.",
    frontend: {
      en: "See how the Sun's apparent height and the length of daylight change with place and season.",
    },
  },
});
