import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { analyzePublicArt_Skill_Data, composeALandscapeView_Skill_Data, designSiteSpecificArt_Skill_Data, integrateArtWithArchitecture_Skill_Data } from './skills';

export const landscapeAndPublicArt_SkillGroup_Data = buildSkillGroupConfig({
  slug: "landscapeAndPublicArt",
  id: "118f4346-b897-418f-bcb7-02d754fc8df8",
  name: {
    en: "Landscape and Public Art",
  },
  skills: {
    analyzePublicArt: analyzePublicArt_Skill_Data,
    composeALandscapeView: composeALandscapeView_Skill_Data,
    designSiteSpecificArt: designSiteSpecificArt_Skill_Data,
    integrateArtWithArchitecture: integrateArtWithArchitecture_Skill_Data,
  },
  description: {
    methodological: "Outdoor artworks and landscape compositions respond to specific sites and the people who use them.",
    frontend: {
      en: "Use landscape and outdoor art to respond to places and their communities.",
    },
  },
});
