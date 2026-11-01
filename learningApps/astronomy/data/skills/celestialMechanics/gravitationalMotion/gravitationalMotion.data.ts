import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  barycentricMotion_Skill_Data,
  keplersFirstLaw_Skill_Data,
  keplersSecondLaw_Skill_Data,
  keplersThirdLaw_Skill_Data,
  orbitalEnergy_Skill_Data,
  universalGravitation_Skill_Data,
} from './skills';

export const gravitationalMotion_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'gravitationalMotion',
  id: 'fa20bd50-b69d-4533-8320-395d75441a18',
  name: {
    en: 'Gravitational Motion',
  },
  skills: {
    barycentricMotion: barycentricMotion_Skill_Data,
    keplersFirstLaw: keplersFirstLaw_Skill_Data,
    keplersSecondLaw: keplersSecondLaw_Skill_Data,
    keplersThirdLaw: keplersThirdLaw_Skill_Data,
    orbitalEnergy: orbitalEnergy_Skill_Data,
    universalGravitation: universalGravitation_Skill_Data,
  },
  description: {
    methodological:
      'Gravitational interactions produce trajectories governed by mass, initial conditions and the reference frame in which motion is described.',
    frontend: {
      en: 'Discover how gravity governs the motion of celestial bodies.',
    },
  },
});
