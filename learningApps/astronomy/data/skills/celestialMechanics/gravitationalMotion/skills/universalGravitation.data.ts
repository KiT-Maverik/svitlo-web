import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const universalGravitation_Skill_Data = buildSkillConfig({
  slug: 'universalGravitation',
  id: '9d342d91-27a6-4c64-9e4d-8b04a2b3dbcc',
  name: {
    en: 'Universal Gravitation',
  },
  description: {
    methodological:
      'Apply the dependence of gravitational attraction on interacting masses and separation to astronomical situations.',
    frontend: {
      en: 'Use the masses and distances of objects to reason about gravitational attraction.',
    },
  },
});
