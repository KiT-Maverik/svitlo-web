import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  directImaging_Skill_Data,
  gravitationalMicrolensing_Skill_Data,
  radialVelocityDetection_Skill_Data,
  transitDetection_Skill_Data,
} from './skills';

export const exoplanetDetection_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'exoplanetDetection',
  id: '069ae23d-d15d-47c8-a664-20705a50d448',
  name: {
    en: 'Exoplanet Detection',
  },
  skills: {
    directImaging: directImaging_Skill_Data,
    gravitationalMicrolensing: gravitationalMicrolensing_Skill_Data,
    radialVelocityDetection: radialVelocityDetection_Skill_Data,
    transitDetection: transitDetection_Skill_Data,
  },
  description: {
    methodological:
      'Finding planets around distant stars relies on measured effects and each method has a characteristic sensitivity and ambiguity.',
    frontend: {
      en: 'Discover the methods astronomers use to find planets around distant stars.',
    },
  },
});
