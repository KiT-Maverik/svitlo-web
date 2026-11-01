import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { astronomicalDatesAndEpochs_Skill_Data, lunarCalendarCycles_Skill_Data, siderealTime_Skill_Data, solarCalendarCycles_Skill_Data, solarTime_Skill_Data } from './skills';

export const astronomicalTime_SkillGroup_Data = buildSkillGroupConfig({
  slug: "astronomicalTime",
  id: "40fbde37-c257-44a2-b82b-d38724a086ab",
  name: {
    en: "Astronomical Time",
  },
  skills: {
    astronomicalDatesAndEpochs: astronomicalDatesAndEpochs_Skill_Data,
    lunarCalendarCycles: lunarCalendarCycles_Skill_Data,
    siderealTime: siderealTime_Skill_Data,
    solarCalendarCycles: solarCalendarCycles_Skill_Data,
    solarTime: solarTime_Skill_Data,
  },
  description: {
    methodological: "Timekeeping conventions derived from repeated celestial cycles support observation and comparison across dates, without constituting a curriculum in civil time zones.",
    frontend: {
      en: "Explore how recurring movements of the Sun, Moon and stars are used to measure time.",
    },
  },
});
