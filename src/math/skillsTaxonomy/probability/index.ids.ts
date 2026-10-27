import { events_SkillGroup_Ids } from './events/events.ids';
import { experiments_SkillGroup_Ids } from './experiments/experiments.ids';

export const probability_SkillGroups_Ids = {
  events: events_SkillGroup_Ids.events,
  experiments: experiments_SkillGroup_Ids.experiments,
} as const;
