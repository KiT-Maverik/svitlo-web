import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { designGarmentSilhouettes_Skill_Data, designGarmentSurfaceDetails_Skill_Data, developAFashionCollection_Skill_Data, draftGarmentPatterns_Skill_Data, drapeFabricOnAForm_Skill_Data, selectTextilesForGarments_Skill_Data } from './skills';

export const fashionAndApparelDesign_SkillGroup_Data = buildSkillGroupConfig({
  slug: "fashionAndApparelDesign",
  id: "3146968a-1438-4078-9b99-a05b14cef062",
  name: {
    en: "Fashion and Apparel Design",
  },
  skills: {
    designGarmentSilhouettes: designGarmentSilhouettes_Skill_Data,
    designGarmentSurfaceDetails: designGarmentSurfaceDetails_Skill_Data,
    developAFashionCollection: developAFashionCollection_Skill_Data,
    draftGarmentPatterns: draftGarmentPatterns_Skill_Data,
    drapeFabricOnAForm: drapeFabricOnAForm_Skill_Data,
    selectTextilesForGarments: selectTextilesForGarments_Skill_Data,
  },
  description: {
    methodological: "Garment design applies artistic decisions to forms worn on the body. Silhouette, material behavior, construction planning and coordinated collections distinguish this practice from textile-surface ornament and theatre-specific costume design.",
    frontend: {
      en: "Explore how garment shape, fabric and detail turn a fashion idea into clothing.",
    },
  },
});
