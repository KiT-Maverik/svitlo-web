import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  gravitationalPerturbations_Skill_Data,
  orbitalResonances_Skill_Data,
  orbitalStability_Skill_Data,
  tidalForces_Skill_Data,
} from './skills';

export const dynamicalInteractions_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'dynamicalInteractions',
  id: '62929efc-6b42-43e7-9068-10639b784945',
  name: {
    en: 'Dynamical Interactions',
  },
  skills: {
    gravitationalPerturbations: gravitationalPerturbations_Skill_Data,
    orbitalResonances: orbitalResonances_Skill_Data,
    orbitalStability: orbitalStability_Skill_Data,
    tidalForces: tidalForces_Skill_Data,
  },
  description: {
    methodological:
      'Real celestial systems include many bodies, so resonances, tides and perturbations can alter otherwise idealized orbital motion.',
    frontend: {
      en: 'Explore how tides and other gravitational interactions alter celestial motions.',
    },
  },
});
