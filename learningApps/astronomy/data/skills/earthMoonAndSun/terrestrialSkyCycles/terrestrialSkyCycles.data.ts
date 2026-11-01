import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  dayAndNight_Skill_Data,
  seasons_Skill_Data,
  solarAltitudeAndDaylight_Skill_Data,
  solsticesAndEquinoxes_Skill_Data,
} from './skills';

export const terrestrialSkyCycles_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'terrestrialSkyCycles',
  id: 'c8f35ba8-a7b9-4e99-83bc-1f21326aafc7',
  name: {
    en: 'Terrestrial Sky Cycles',
  },
  skills: {
    dayAndNight: dayAndNight_Skill_Data,
    seasons: seasons_Skill_Data,
    solarAltitudeAndDaylight: solarAltitudeAndDaylight_Skill_Data,
    solsticesAndEquinoxes: solsticesAndEquinoxes_Skill_Data,
  },
  description: {
    methodological:
      "Earth's orientation with respect to sunlight generates daily and annual changes in the visible sky and the duration of daylight.",
    frontend: {
      en: "Explore how Earth's rotation and tilt shape daylight and seasonal changes.",
    },
  },
});
