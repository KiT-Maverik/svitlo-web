import { calendar_SkillGroup_Ids } from './calendar/calendar.ids';
import { clock_SkillGroup_Ids } from './clock/clock.ids';
import { duration_SkillGroup_Ids } from './duration/duration.ids';

export const time_SkillGroups_Ids = {
  calendar: calendar_SkillGroup_Ids.calendar,
  clock: clock_SkillGroup_Ids.clock,
  duration: duration_SkillGroup_Ids.duration,
} as const;
