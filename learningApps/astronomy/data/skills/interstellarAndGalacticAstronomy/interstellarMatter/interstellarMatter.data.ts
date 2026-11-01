import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { interstellarChemicalCycling_Skill_Data, interstellarDust_Skill_Data, interstellarGas_Skill_Data, nebulae_Skill_Data } from './skills';

export const interstellarMatter_SkillGroup_Data = buildSkillGroupConfig({
  slug: "interstellarMatter",
  id: "9c92c9d0-5b03-475a-beb6-678aa43131c2",
  name: {
    en: "Interstellar Matter",
  },
  skills: {
    interstellarChemicalCycling: interstellarChemicalCycling_Skill_Data,
    interstellarDust: interstellarDust_Skill_Data,
    interstellarGas: interstellarGas_Skill_Data,
    nebulae: nebulae_Skill_Data,
  },
  description: {
    methodological: "Gas, dust, radiation and magnetic fields between stars are active participants in the cycling of matter across galaxies.",
    frontend: {
      en: "Discover how gas, dust and magnetic fields influence the space between stars.",
    },
  },
});
