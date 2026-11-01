import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  cryovolcanism_Skill_Data,
  planetaryInteriorStructure_Skill_Data,
  planetaryMagneticFields_Skill_Data,
  subsurfaceOceans_Skill_Data,
  waterAndIceBeyondEarth_Skill_Data,
} from './skills';

export const interiorsAndVolatiles_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'interiorsAndVolatiles',
  id: '33668712-2b1a-46f2-adda-11075f163edd',
  name: {
    en: 'Interiors and Volatiles',
  },
  skills: {
    cryovolcanism: cryovolcanism_Skill_Data,
    planetaryInteriorStructure: planetaryInteriorStructure_Skill_Data,
    planetaryMagneticFields: planetaryMagneticFields_Skill_Data,
    subsurfaceOceans: subsurfaceOceans_Skill_Data,
    waterAndIceBeyondEarth: waterAndIceBeyondEarth_Skill_Data,
  },
  description: {
    methodological:
      'Indirect observations of magnetic fields, heat and fluid materials constrain unseen layers and possible activity beneath planetary surfaces.',
    frontend: {
      en: 'Investigate hidden planetary layers, magnetic fields, water and ice.',
    },
  },
});
