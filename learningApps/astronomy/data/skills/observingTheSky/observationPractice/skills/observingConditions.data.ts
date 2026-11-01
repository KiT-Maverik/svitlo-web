import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const observingConditions_Skill_Data = buildSkillConfig({
  slug: 'observingConditions',
  id: 'e03d9418-ddf6-4202-946a-6e76d2deeb85',
  name: {
    en: 'Observing Conditions',
  },
  description: {
    methodological:
      'Evaluate how clouds, atmospheric turbulence, transparency, artificial light and horizon obstructions affect a planned observation.',
    frontend: {
      en: 'Choose observing times and places with suitable weather, darkness and visibility.',
    },
  },
});
