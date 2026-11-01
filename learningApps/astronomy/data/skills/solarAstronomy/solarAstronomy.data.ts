import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { heliosphericEffects_SkillGroup_Data } from './heliosphericEffects/heliosphericEffects.data';
import { magneticActivity_SkillGroup_Data } from './magneticActivity/magneticActivity.data';
import { solarStructureAndEnergy_SkillGroup_Data } from './solarStructureAndEnergy/solarStructureAndEnergy.data';

export const solarAstronomy_SkillDomain_Data = buildSkillDomainConfig({
  slug: 'solarAstronomy',
  id: 'a124b21b-c0a8-4063-bb45-48a8c6264e25',
  name: {
    en: 'Solar Astronomy',
  },
  groups: {
    heliosphericEffects: heliosphericEffects_SkillGroup_Data,
    magneticActivity: magneticActivity_SkillGroup_Data,
    solarStructureAndEnergy: solarStructureAndEnergy_SkillGroup_Data,
  },
  description: {
    methodological:
      "The Sun is examined as a physical star whose radiation, plasma and magnetism affect the Solar System. Stellar populations and the Sun's long-term evolutionary fate are treated in stellar astronomy.",
    frontend: {
      en: 'Study the Sun as a star and explore how its energy and activity influence the Solar System.',
    },
  },
});
