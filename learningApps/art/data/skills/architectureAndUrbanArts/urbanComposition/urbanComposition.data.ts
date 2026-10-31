import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { analyzeAStreetscape_Skill_Data, compareUrbanSpatialPatterns_Skill_Data, designAPublicSquare_Skill_Data, interpretUrbanLandmarks_Skill_Data } from './skills';

export const urbanComposition_SkillGroup_Data = buildSkillGroupConfig({
  slug: "urbanComposition",
  id: "347be040-a03c-4312-9fe0-2e8819bb3046",
  name: {
    en: "Urban Composition",
  },
  skills: {
    analyzeAStreetscape: analyzeAStreetscape_Skill_Data,
    compareUrbanSpatialPatterns: compareUrbanSpatialPatterns_Skill_Data,
    designAPublicSquare: designAPublicSquare_Skill_Data,
    interpretUrbanLandmarks: interpretUrbanLandmarks_Skill_Data,
  },
  description: {
    methodological: "The arrangement of streets, building fronts and public gathering places contributes to city identity and experience.",
    frontend: {
      en: "Discover how the arrangement of streets and public places shapes a city's character.",
    },
  },
});
