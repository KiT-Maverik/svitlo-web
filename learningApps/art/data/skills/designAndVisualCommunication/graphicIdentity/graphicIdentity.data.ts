import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { adaptGraphicsAcrossFormats_Skill_Data, buildAVisualIdentity_Skill_Data, designAGraphicSymbol_Skill_Data, designAPoster_Skill_Data } from './skills';

export const graphicIdentity_SkillGroup_Data = buildSkillGroupConfig({
  slug: "graphicIdentity",
  id: "ea36f58b-7263-4869-878e-4716f322976c",
  name: {
    en: "Graphic Identity",
  },
  skills: {
    adaptGraphicsAcrossFormats: adaptGraphicsAcrossFormats_Skill_Data,
    buildAVisualIdentity: buildAVisualIdentity_Skill_Data,
    designAGraphicSymbol: designAGraphicSymbol_Skill_Data,
    designAPoster: designAPoster_Skill_Data,
  },
  description: {
    methodological: "Distinctive visual signs and consistent combinations establish recognizable communication across formats.",
    frontend: {
      en: "Build recognizable visual identities using connected graphic choices.",
    },
  },
});
