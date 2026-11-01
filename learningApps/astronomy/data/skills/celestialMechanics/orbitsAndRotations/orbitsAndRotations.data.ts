import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  axialRotation_Skill_Data,
  axialTilt_Skill_Data,
  orbitalElements_Skill_Data,
  orbitalPeriods_Skill_Data,
  synchronousRotation_Skill_Data,
} from './skills';

export const orbitsAndRotations_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'orbitsAndRotations',
  id: 'c4e000d1-4bc6-4622-9691-9372bcb72c85',
  name: {
    en: 'Orbits and Rotations',
  },
  skills: {
    axialRotation: axialRotation_Skill_Data,
    axialTilt: axialTilt_Skill_Data,
    orbitalElements: orbitalElements_Skill_Data,
    orbitalPeriods: orbitalPeriods_Skill_Data,
    synchronousRotation: synchronousRotation_Skill_Data,
  },
  description: {
    methodological:
      'Orbital shapes and body orientations are specified through distinct physical parameters that affect long-term celestial behavior.',
    frontend: {
      en: 'Describe and compare the shapes, periods and orientations of celestial motions.',
    },
  },
});
