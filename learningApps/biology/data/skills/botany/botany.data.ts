import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { nutritionAndGrowth_SkillGroup_Data } from './nutritionAndGrowth/nutritionAndGrowth.data';
import { plantAdaptations_SkillGroup_Data } from './plantAdaptations/plantAdaptations.data';
import { plantDiversity_SkillGroup_Data } from './plantDiversity/plantDiversity.data';
import { plantStructure_SkillGroup_Data } from './plantStructure/plantStructure.data';
import { reproductionAndDevelopment_SkillGroup_Data } from './reproductionAndDevelopment/reproductionAndDevelopment.data';

export const botany_SkillDomain_Data = buildSkillDomainConfig({
  slug: "botany",
  id: "c481fc73-e032-4de3-864b-bfe44beeaab5",
  name: {
    en: "Botany",
  },
  groups: {
    nutritionAndGrowth: nutritionAndGrowth_SkillGroup_Data,
    plantAdaptations: plantAdaptations_SkillGroup_Data,
    plantDiversity: plantDiversity_SkillGroup_Data,
    plantStructure: plantStructure_SkillGroup_Data,
    reproductionAndDevelopment: reproductionAndDevelopment_SkillGroup_Data,
  },
  description: {
    methodological: "Study of plants as organisms capable of photosynthesis: vegetative and reproductive organ structure, life cycles, and the dependence of growth on environmental conditions. Unlike Ecology, the focus is on the plant rather than interactions within a community.",
    frontend: {
      en: "Explore how plants are built, grow, reproduce and respond to their environments.",
    },
  },
});
