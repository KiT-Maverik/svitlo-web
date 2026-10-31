import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { analyzeArtisticRhythm_Skill_Data, analyzeColorRelationships_Skill_Data, analyzeComposition_Skill_Data, analyzeLineAndShape_Skill_Data, analyzeTextureAndSurface_Skill_Data } from './skills';

export const formalLanguage_SkillGroup_Data = buildSkillGroupConfig({
  slug: "formalLanguage",
  id: "9564d421-7e4d-47eb-a8b2-42da8f19c7e3",
  name: {
    en: "Formal Language",
  },
  skills: {
    analyzeArtisticRhythm: analyzeArtisticRhythm_Skill_Data,
    analyzeColorRelationships: analyzeColorRelationships_Skill_Data,
    analyzeComposition: analyzeComposition_Skill_Data,
    analyzeLineAndShape: analyzeLineAndShape_Skill_Data,
    analyzeTextureAndSurface: analyzeTextureAndSurface_Skill_Data,
  },
  description: {
    methodological: "Formal choices direct perception and establish relationships within a work. Analysis here is cross-medium rather than the execution of a technical medium-specific method.",
    frontend: {
      en: "Discover how lines, colors, shapes and other features guide our experience of art.",
    },
  },
});
