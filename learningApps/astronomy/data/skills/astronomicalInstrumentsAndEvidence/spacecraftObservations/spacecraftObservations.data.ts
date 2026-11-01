import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  flybyMeasurements_Skill_Data,
  landersAndRoversAsScientificProbes_Skill_Data,
  orbitalMeasurements_Skill_Data,
  sampleReturnEvidence_Skill_Data,
} from './skills';

export const spacecraftObservations_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'spacecraftObservations',
  id: 'c6f1e706-cd72-4036-b85f-2ee7e37b22f8',
  name: {
    en: 'Spacecraft Observations',
  },
  skills: {
    flybyMeasurements: flybyMeasurements_Skill_Data,
    landersAndRoversAsScientificProbes: landersAndRoversAsScientificProbes_Skill_Data,
    orbitalMeasurements: orbitalMeasurements_Skill_Data,
    sampleReturnEvidence: sampleReturnEvidence_Skill_Data,
  },
  description: {
    methodological:
      'Remote flybys, orbiters, landers and sample-return missions provide different access to remote worlds. These competencies concern scientific evidence, temporal coverage, sampling limits and interpretation; they exclude the engineering design of the vehicles.',
    frontend: {
      en: 'Explore what different spacecraft missions can measure about distant worlds.',
    },
  },
});
