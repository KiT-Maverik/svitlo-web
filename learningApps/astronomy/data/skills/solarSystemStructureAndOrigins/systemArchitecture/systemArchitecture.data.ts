import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  innerAndOuterSolarSystem_Skill_Data,
  planetAndDwarfPlanetClassification_Skill_Data,
  smallBodyReservoirs_Skill_Data,
  solarSystemComponents_Skill_Data,
} from './skills';

export const systemArchitecture_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'systemArchitecture',
  id: 'abfb0627-a4a5-410e-9881-04d22158a297',
  name: {
    en: 'System Architecture',
  },
  skills: {
    innerAndOuterSolarSystem: innerAndOuterSolarSystem_Skill_Data,
    planetAndDwarfPlanetClassification: planetAndDwarfPlanetClassification_Skill_Data,
    smallBodyReservoirs: smallBodyReservoirs_Skill_Data,
    solarSystemComponents: solarSystemComponents_Skill_Data,
  },
  description: {
    methodological:
      'A planetary system includes one or more stars and gravitationally associated objects whose locations are described by nested orbital regions.',
    frontend: {
      en: 'Discover the different regions and kinds of objects orbiting the Sun.',
    },
  },
});
