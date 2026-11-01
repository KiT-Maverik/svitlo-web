import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { eclipseSeasons_Skill_Data, lunarEclipses_Skill_Data, solarEclipses_Skill_Data } from './skills';

export const eclipsesAndAlignments_SkillGroup_Data = buildSkillGroupConfig({
  slug: "eclipsesAndAlignments",
  id: "326cf167-b599-47d4-b53e-bea0cc5fc468",
  name: {
    en: "Eclipses and Alignments",
  },
  skills: {
    eclipseSeasons: eclipseSeasons_Skill_Data,
    lunarEclipses: lunarEclipses_Skill_Data,
    solarEclipses: solarEclipses_Skill_Data,
  },
  description: {
    methodological: "Occultation and shadow phenomena depend on an observer's line of sight and the relative positions and apparent sizes of bodies.",
    frontend: {
      en: "Learn how eclipses depend on the alignment of celestial objects and their shadows.",
    },
  },
});
