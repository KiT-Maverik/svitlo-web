import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { animalDiversity_SkillGroup_Data } from './animalDiversity/animalDiversity.data';
import { behavior_SkillGroup_Data } from './behavior/behavior.data';
import { nutritionAndDevelopment_SkillGroup_Data } from './nutritionAndDevelopment/nutritionAndDevelopment.data';
import { structureAndFunctions_SkillGroup_Data } from './structureAndFunctions/structureAndFunctions.data';

export const zoology_SkillDomain_Data = buildSkillDomainConfig({
  slug: "zoology",
  id: "afaca13a-3925-4c2b-92ff-ff447bdc5f51",
  name: {
    en: "Zoology",
  },
  groups: {
    animalDiversity: animalDiversity_SkillGroup_Data,
    behavior: behavior_SkillGroup_Data,
    nutritionAndDevelopment: nutritionAndDevelopment_SkillGroup_Data,
    structureAndFunctions: structureAndFunctions_SkillGroup_Data,
  },
  description: {
    methodological: "Comparison of major animal groups, relationships between structure and function, feeding patterns, development, and behavior. Food chains and interspecies networks as whole systems belong to Ecology.",
    frontend: {
      en: "Discover how animals differ in structure, movement, growth and behavior.",
    },
  },
});
