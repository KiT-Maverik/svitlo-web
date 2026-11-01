import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  cosmicElementEnrichment_Skill_Data,
  neutronStars_Skill_Data,
  pulsars_Skill_Data,
  stellarMassBlackHoles_Skill_Data,
  supernovae_Skill_Data,
  whiteDwarfs_Skill_Data,
} from './skills';

export const stellarRemnants_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'stellarRemnants',
  id: '937abe9e-6b94-43f6-a594-e1ae09a7d0da',
  name: {
    en: 'Stellar Remnants',
  },
  skills: {
    cosmicElementEnrichment: cosmicElementEnrichment_Skill_Data,
    neutronStars: neutronStars_Skill_Data,
    pulsars: pulsars_Skill_Data,
    stellarMassBlackHoles: stellarMassBlackHoles_Skill_Data,
    supernovae: supernovae_Skill_Data,
    whiteDwarfs: whiteDwarfs_Skill_Data,
  },
  description: {
    methodological:
      'The final states of stars differ according to progenitor mass, mass loss and binary interactions; extreme events redistribute energy and elements.',
    frontend: {
      en: 'Explore the compact remains and explosive endings of different kinds of stars.',
    },
  },
});
