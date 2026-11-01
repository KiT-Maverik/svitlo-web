import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const barycentricMotion_Skill_Data = buildSkillConfig({
  slug: 'barycentricMotion',
  id: '9b0e19d9-848c-4f09-8985-17588e9748cc',
  name: {
    en: 'Barycentric Motion',
  },
  description: {
    methodological:
      'Explain why interacting celestial bodies orbit a shared center of mass rather than one body always remaining stationary.',
    frontend: {
      en: 'Understand why two orbiting bodies move around a shared centre of mass.',
    },
  },
});
