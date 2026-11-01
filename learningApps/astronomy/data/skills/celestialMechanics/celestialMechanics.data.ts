import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { dynamicalInteractions_SkillGroup_Data } from './dynamicalInteractions/dynamicalInteractions.data';
import { gravitationalMotion_SkillGroup_Data } from './gravitationalMotion/gravitationalMotion.data';
import { orbitsAndRotations_SkillGroup_Data } from './orbitsAndRotations/orbitsAndRotations.data';

export const celestialMechanics_SkillDomain_Data = buildSkillDomainConfig({
  slug: 'celestialMechanics',
  id: 'beff441b-e494-47ba-84ed-10fa679fd636',
  name: {
    en: 'Celestial Mechanics',
  },
  groups: {
    dynamicalInteractions: dynamicalInteractions_SkillGroup_Data,
    gravitationalMotion: gravitationalMotion_SkillGroup_Data,
    orbitsAndRotations: orbitsAndRotations_SkillGroup_Data,
  },
  description: {
    methodological:
      'This domain concerns how gravity and angular momentum govern orbital motion, rotation and mutual perturbations across planetary and stellar systems. Geometrical appearances arising from these motions are addressed separately when the observational phenomenon itself is the competency.',
    frontend: {
      en: 'Explore how gravity and motion shape the paths and rotations of objects in space.',
    },
  },
});
