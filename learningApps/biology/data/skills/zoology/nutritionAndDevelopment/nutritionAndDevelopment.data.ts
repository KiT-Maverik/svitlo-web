import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { classifyAnimalsByDiet_Skill_Data, compareDevelopmentWithAndWithoutMetamorphosis_Skill_Data, distinguishJuvenilesAndAdults_Skill_Data, explainCompleteMetamorphosisInInsects_Skill_Data } from './skills';

export const nutritionAndDevelopment_SkillGroup_Data = buildSkillGroupConfig({
  slug: "nutritionAndDevelopment",
  id: "3aec845c-956f-4dfd-9724-1d76bb243c6b",
  name: {
    en: "Nutrition and Development",
  },
  skills: {
    classifyAnimalsByDiet: classifyAnimalsByDiet_Skill_Data,
    compareDevelopmentWithAndWithoutMetamorphosis: compareDevelopmentWithAndWithoutMetamorphosis_Skill_Data,
    distinguishJuvenilesAndAdults: distinguishJuvenilesAndAdults_Skill_Data,
    explainCompleteMetamorphosisInInsects: explainCompleteMetamorphosisInInsects_Skill_Data,
  },
  description: {
    methodological: "Food sources differ among animal groups, while their life cycles may involve body transformations or development without a drastic change in form.",
    frontend: {
      en: "Discover how diets and life cycles differ among animals.",
    },
  },
});
