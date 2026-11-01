import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const stellarSpectralTypes_Skill_Data = buildSkillConfig({
  slug: 'stellarSpectralTypes',
  id: '200ba789-22b7-43cb-a334-68db0487f804',
  name: {
    en: 'Stellar Spectral Types',
  },
  description: {
    methodological: 'Classify stars by temperature-sensitive spectral characteristics rather than by color alone.',
    frontend: {
      en: 'Identify stellar spectral classes using features in their light.',
    },
  },
});
