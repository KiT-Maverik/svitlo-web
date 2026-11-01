import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const stellarProperMotion_Skill_Data = buildSkillConfig({
  slug: 'stellarProperMotion',
  id: '71ca7ffc-0453-4e24-8935-785c977b708c',
  name: {
    en: 'Stellar Proper Motion',
  },
  description: {
    methodological:
      'Identify the slow positional motion of a star relative to distant background sources and distinguish this physical change from the daily apparent rotation of the sky.',
    frontend: {
      en: "Recognize a star's very slow movement against more distant stars.",
    },
  },
});
