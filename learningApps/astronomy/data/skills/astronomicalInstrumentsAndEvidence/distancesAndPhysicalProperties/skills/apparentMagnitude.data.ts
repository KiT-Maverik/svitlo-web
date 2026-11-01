import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const apparentMagnitude_Skill_Data = buildSkillConfig({
  slug: 'apparentMagnitude',
  id: 'f2259304-93e6-47e0-87cd-d3b5aa327765',
  name: {
    en: 'Apparent Magnitude',
  },
  description: {
    methodological: 'Interpret a logarithmic brightness scale describing how bright a source appears to an observer.',
    frontend: {
      en: 'Understand the scale astronomers use to describe how bright a celestial object appears.',
    },
  },
});
