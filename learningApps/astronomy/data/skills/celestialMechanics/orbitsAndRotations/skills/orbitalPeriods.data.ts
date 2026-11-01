import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const orbitalPeriods_Skill_Data = buildSkillConfig({
  slug: 'orbitalPeriods',
  id: '846d1abb-c8de-4d15-831a-54ce9ad98a30',
  name: {
    en: 'Orbital Periods',
  },
  description: {
    methodological:
      "Interpret the time needed to complete an orbit and compare sidereal and synodic periods, distinguishing orbital revolution from rotation about the body's own axis.",
    frontend: {
      en: 'Distinguish the time taken to orbit another body from the time taken to spin.',
    },
  },
});
