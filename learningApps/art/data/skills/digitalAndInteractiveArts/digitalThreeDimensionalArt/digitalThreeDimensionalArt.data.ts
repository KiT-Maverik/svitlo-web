import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { applyDigitalThreeDimensionalMaterials_Skill_Data, composeADigitalThreeDimensionalScene_Skill_Data, lightADigitalThreeDimensionalScene_Skill_Data, modelDigitalThreeDimensionalForms_Skill_Data } from './skills';

export const digitalThreeDimensionalArt_SkillGroup_Data = buildSkillGroupConfig({
  slug: "digitalThreeDimensionalArt",
  id: "7a47dab9-19a9-4d22-9308-e97353302f3f",
  name: {
    en: "Digital Three-Dimensional Art",
  },
  skills: {
    applyDigitalThreeDimensionalMaterials: applyDigitalThreeDimensionalMaterials_Skill_Data,
    composeADigitalThreeDimensionalScene: composeADigitalThreeDimensionalScene_Skill_Data,
    lightADigitalThreeDimensionalScene: lightADigitalThreeDimensionalScene_Skill_Data,
    modelDigitalThreeDimensionalForms: modelDigitalThreeDimensionalForms_Skill_Data,
  },
  description: {
    methodological: "A digital scene requires modeling of volume, material appearance, lighting and viewpoint; the focus is expressive representation, not implementing a rendering engine.",
    frontend: {
      en: "Build expressive virtual spaces through modeling, materials, light and composition.",
    },
  },
});
