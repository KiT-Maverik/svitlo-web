import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { checkVisualAccessibility_Skill_Data, designAnEditorialSpread_Skill_Data, designAPictogramFamily_Skill_Data, designPackagingGraphics_Skill_Data } from './skills';

export const appliedGraphics_SkillGroup_Data = buildSkillGroupConfig({
  slug: "appliedGraphics",
  id: "f80539fa-6eed-494b-8834-f80c16a4a026",
  name: {
    en: "Applied Graphics",
  },
  skills: {
    checkVisualAccessibility: checkVisualAccessibility_Skill_Data,
    designAnEditorialSpread: designAnEditorialSpread_Skill_Data,
    designAPictogramFamily: designAPictogramFamily_Skill_Data,
    designPackagingGraphics: designPackagingGraphics_Skill_Data,
  },
  description: {
    methodological: "Packaging, editorial designs and pictograms require visual decisions constrained by surfaces or public information.",
    frontend: {
      en: "Design graphics for packages, publications and public information.",
    },
  },
});
