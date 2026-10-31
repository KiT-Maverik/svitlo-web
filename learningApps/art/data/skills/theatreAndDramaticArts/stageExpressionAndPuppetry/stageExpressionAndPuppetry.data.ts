import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { animateAPuppet_Skill_Data, designCharacterCostume_Skill_Data, designScenicAtmosphere_Skill_Data, designStageLighting_Skill_Data } from './skills';

export const stageExpressionAndPuppetry_SkillGroup_Data = buildSkillGroupConfig({
  slug: "stageExpressionAndPuppetry",
  id: "9b487da8-357b-4b65-944d-c8ef50ae19d8",
  name: {
    en: "Stage Expression and Puppetry",
  },
  skills: {
    animateAPuppet: animateAPuppet_Skill_Data,
    designCharacterCostume: designCharacterCostume_Skill_Data,
    designScenicAtmosphere: designScenicAtmosphere_Skill_Data,
    designStageLighting: designStageLighting_Skill_Data,
  },
  description: {
    methodological: "Scenery, costumes, light and animated objects carry expressive functions in a performance beyond decoration.",
    frontend: {
      en: "Use sets, clothing, light and puppets to express meaning on stage.",
    },
  },
});
