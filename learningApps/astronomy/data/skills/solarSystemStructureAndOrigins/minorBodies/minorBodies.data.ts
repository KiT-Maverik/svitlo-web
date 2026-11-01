import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  asteroids_Skill_Data,
  comets_Skill_Data,
  meteoroidsMeteorsAndMeteorites_Skill_Data,
  transNeptunianObjects_Skill_Data,
} from './skills';

export const minorBodies_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'minorBodies',
  id: 'a0f454be-1873-4da3-a5dc-6f4669a4b2ac',
  name: {
    en: 'Minor Bodies',
  },
  skills: {
    asteroids: asteroids_Skill_Data,
    comets: comets_Skill_Data,
    meteoroidsMeteorsAndMeteorites: meteoroidsMeteorsAndMeteorites_Skill_Data,
    transNeptunianObjects: transNeptunianObjects_Skill_Data,
  },
  description: {
    methodological:
      'Small populations preserve clues about early formation while showing important differences in composition, orbital origin and activity.',
    frontend: {
      en: 'Learn about smaller Solar System bodies and what they reveal about its past.',
    },
  },
});
