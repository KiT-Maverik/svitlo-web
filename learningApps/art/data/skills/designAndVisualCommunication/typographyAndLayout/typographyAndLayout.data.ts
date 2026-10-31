import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { applyALayoutGrid_Skill_Data, designReadableText_Skill_Data, establishTypographicHierarchy_Skill_Data, selectATypeface_Skill_Data } from './skills';

export const typographyAndLayout_SkillGroup_Data = buildSkillGroupConfig({
  slug: "typographyAndLayout",
  id: "907d7702-6970-46a4-9801-22056e87b65c",
  name: {
    en: "Typography and Layout",
  },
  skills: {
    applyALayoutGrid: applyALayoutGrid_Skill_Data,
    designReadableText: designReadableText_Skill_Data,
    establishTypographicHierarchy: establishTypographicHierarchy_Skill_Data,
    selectATypeface: selectATypeface_Skill_Data,
  },
  description: {
    methodological: "Text legibility, typographic tone and systematic spatial organization shape how designed information is read.",
    frontend: {
      en: "Make written information clear and expressive through type and layout.",
    },
  },
});
