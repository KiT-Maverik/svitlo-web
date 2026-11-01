import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const constellations_Skill_Data = buildSkillConfig({
  slug: 'constellations',
  id: 'fa760e4a-df7a-4ebc-a0d6-5b913e1aacfe',
  name: {
    en: 'Constellations',
  },
  description: {
    methodological:
      'Use officially defined regions of the celestial sphere to locate objects without assuming their member stars form a physical cluster.',
    frontend: {
      en: 'Use constellation regions to locate objects without assuming their stars are physically close together.',
    },
  },
});
