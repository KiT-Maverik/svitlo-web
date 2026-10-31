import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { carveSubtractiveSculpture_Skill_Data, constructThreeDimensionalForm_Skill_Data, createReliefSculpture_Skill_Data, modelAdditiveSculpture_Skill_Data, usePositiveAndNegativeSpace_Skill_Data } from './skills';

export const sculpturalForm_SkillGroup_Data = buildSkillGroupConfig({
  slug: "sculpturalForm",
  id: "65afcf28-567a-4826-8ea2-69cc02876167",
  name: {
    en: "Sculptural Form",
  },
  skills: {
    carveSubtractiveSculpture: carveSubtractiveSculpture_Skill_Data,
    constructThreeDimensionalForm: constructThreeDimensionalForm_Skill_Data,
    createReliefSculpture: createReliefSculpture_Skill_Data,
    modelAdditiveSculpture: modelAdditiveSculpture_Skill_Data,
    usePositiveAndNegativeSpace: usePositiveAndNegativeSpace_Skill_Data,
  },
  description: {
    methodological: "Volume and void, physical viewpoints and material manipulation characterize three-dimensional artistic work.",
    frontend: {
      en: "Explore how volume, empty space and different viewpoints shape sculpture.",
    },
  },
});
