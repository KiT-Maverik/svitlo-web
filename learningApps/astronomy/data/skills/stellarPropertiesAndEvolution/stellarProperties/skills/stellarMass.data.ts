import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const stellarMass_Skill_Data = buildSkillConfig({
  slug: 'stellarMass',
  id: 'bb53a6db-367e-4b9a-9b77-e406a5733911',
  name: {
    en: 'Stellar Mass',
  },
  description: {
    methodological: 'Determine or constrain stellar mass from orbital dynamics or other model-dependent observations.',
    frontend: {
      en: "Use orbital measurements and models to estimate a star's mass.",
    },
  },
});
