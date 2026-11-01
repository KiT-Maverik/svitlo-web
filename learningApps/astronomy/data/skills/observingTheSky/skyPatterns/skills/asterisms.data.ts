import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const asterisms_Skill_Data = buildSkillConfig({
  slug: 'asterisms',
  id: '4b52f809-2bfc-4e45-b715-bdcc1ada07f1',
  name: {
    en: 'Asterisms',
  },
  description: {
    methodological:
      'Recognize named visual star patterns that can cross constellation boundaries and distinguish them from officially defined regions.',
    frontend: {
      en: 'Identify familiar star patterns that are not necessarily official constellations.',
    },
  },
});
