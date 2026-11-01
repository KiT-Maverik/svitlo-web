import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  celestialObjectClassification_Skill_Data,
  diffuseAndCompositeObjects_Skill_Data,
  objectsAndPhenomena_Skill_Data,
  stellarSubstellarAndPlanetaryBoundaries_Skill_Data,
} from './skills';

export const objectFamilies_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'objectFamilies',
  id: '7b359c09-264a-4a59-ab49-ddf45862d833',
  name: {
    en: 'Object Families',
  },
  skills: {
    celestialObjectClassification: celestialObjectClassification_Skill_Data,
    diffuseAndCompositeObjects: diffuseAndCompositeObjects_Skill_Data,
    objectsAndPhenomena: objectsAndPhenomena_Skill_Data,
    stellarSubstellarAndPlanetaryBoundaries: stellarSubstellarAndPlanetaryBoundaries_Skill_Data,
  },
  description: {
    methodological:
      'Classification of astronomical entities requires more than their appearance in a photograph: a point source, a diffuse cloud, a cluster and an extended galaxy may be distinguished by physical evidence and scale.',
    frontend: {
      en: 'Learn how astronomers identify different types of objects using physical evidence rather than appearance alone.',
    },
  },
});
