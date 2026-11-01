import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { astronomicalObservationRecords_Skill_Data, observingConditions_Skill_Data, safeSolarObservation_Skill_Data, skyMapsAndStarCharts_Skill_Data } from './skills';

export const observationPractice_SkillGroup_Data = buildSkillGroupConfig({
  slug: "observationPractice",
  id: "6b5700fb-8ba9-4483-9b1b-5c6a28347e12",
  name: {
    en: "Observation Practice",
  },
  skills: {
    astronomicalObservationRecords: astronomicalObservationRecords_Skill_Data,
    observingConditions: observingConditions_Skill_Data,
    safeSolarObservation: safeSolarObservation_Skill_Data,
    skyMapsAndStarCharts: skyMapsAndStarCharts_Skill_Data,
  },
  description: {
    methodological: "Reliable sky observation requires choosing conditions, finding objects, maintaining records and avoiding preventable observational hazards.",
    frontend: {
      en: "Plan safe, useful sky observations and keep records that others can understand.",
    },
  },
});
