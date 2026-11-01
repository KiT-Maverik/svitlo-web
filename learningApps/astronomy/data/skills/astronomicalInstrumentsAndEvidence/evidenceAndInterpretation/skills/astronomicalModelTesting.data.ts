import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const astronomicalModelTesting_Skill_Data = buildSkillConfig({
  slug: 'astronomicalModelTesting',
  id: 'b8fc21c2-b6ee-4027-95aa-62d160f3edff',
  name: {
    en: 'Astronomical Model Testing',
  },
  description: {
    methodological:
      'Compare competing explanations with observations and revised predictions, including historically important planetary models.',
    frontend: {
      en: 'Compare astronomical models against evidence and decide which predictions hold up.',
    },
  },
});
