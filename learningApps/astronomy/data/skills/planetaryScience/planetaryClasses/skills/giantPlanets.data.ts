import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const giantPlanets_Skill_Data = buildSkillConfig({
  slug: 'giantPlanets',
  id: '567f6eb6-89db-4bd0-b898-4b2eab564848',
  name: {
    en: 'Giant Planets',
  },
  description: {
    methodological:
      'Distinguish gas giants from ice giants using composition, interior models and observable atmospheric properties.',
    frontend: {
      en: 'Distinguish gas giants and ice giants by their composition and internal structure.',
    },
  },
});
