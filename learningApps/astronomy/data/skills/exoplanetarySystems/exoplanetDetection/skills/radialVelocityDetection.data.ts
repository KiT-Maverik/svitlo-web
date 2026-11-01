import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const radialVelocityDetection_Skill_Data = buildSkillConfig({
  slug: 'radialVelocityDetection',
  id: 'be2c5a7f-3121-4a90-b7e2-380b19adc3ce',
  name: {
    en: 'Radial-Velocity Detection',
  },
  description: {
    methodological:
      'Interpret periodic stellar spectral shifts as evidence for an orbiting companion and constrain its mass.',
    frontend: {
      en: "Use a star's changing spectral motion to infer the pull of an orbiting planet.",
    },
  },
});
