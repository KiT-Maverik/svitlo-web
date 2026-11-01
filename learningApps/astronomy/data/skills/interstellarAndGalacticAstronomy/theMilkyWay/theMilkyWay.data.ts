import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  galacticRotation_Skill_Data,
  milkyWayStructure_Skill_Data,
  solarSystemsGalacticLocation_Skill_Data,
  starClusters_Skill_Data,
} from './skills';

export const theMilkyWay_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'theMilkyWay',
  id: '8e527ec4-34b1-40bc-9dd1-851c05b29573',
  name: {
    en: 'The Milky Way',
  },
  skills: {
    galacticRotation: galacticRotation_Skill_Data,
    milkyWayStructure: milkyWayStructure_Skill_Data,
    solarSystemsGalacticLocation: solarSystemsGalacticLocation_Skill_Data,
    starClusters: starClusters_Skill_Data,
  },
  description: {
    methodological:
      'Our galaxy is mapped from an interior viewpoint by combining stellar distributions, gas, motions and distance measurements.',
    frontend: {
      en: 'Learn how astronomers map the Milky Way from inside it.',
    },
  },
});
