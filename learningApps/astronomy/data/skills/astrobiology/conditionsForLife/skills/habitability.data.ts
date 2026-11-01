import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const habitability_Skill_Data = buildSkillConfig({
  slug: 'habitability',
  id: 'ffb659ed-b31f-4282-9653-af21af95a950',
  name: {
    en: 'Habitability',
  },
  description: {
    methodological:
      'Evaluate energy sources, chemical building blocks, solvent availability and environmental stability as possible prerequisites for known life.',
    frontend: {
      en: 'Explore the energy, chemistry, liquids and stability that could make an environment habitable.',
    },
  },
});
