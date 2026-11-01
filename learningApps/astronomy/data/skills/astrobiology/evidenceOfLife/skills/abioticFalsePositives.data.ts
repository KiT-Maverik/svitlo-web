import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const abioticFalsePositives_Skill_Data = buildSkillConfig({
  slug: 'abioticFalsePositives',
  id: '426e4998-d7b9-4bae-ba1c-c0e51dd78159',
  name: {
    en: 'Abiotic False Positives',
  },
  description: {
    methodological:
      'Identify nonbiological processes capable of producing signals superficially similar to biosignatures.',
    frontend: {
      en: 'Discover how nonliving processes can imitate signs that might suggest life.',
    },
  },
});
