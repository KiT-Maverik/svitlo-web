import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const astronomicalObservationRecords_Skill_Data = buildSkillConfig({
  slug: 'astronomicalObservationRecords',
  id: '05f79f1d-da4d-4c52-a2d1-332cfd48867c',
  name: {
    en: 'Astronomical Observation Records',
  },
  description: {
    methodological:
      'Record the time, location, conditions, method and observed changes so that a sighting can be interpreted or compared.',
    frontend: {
      en: 'Record when, where and how you saw something in the sky.',
    },
  },
});
