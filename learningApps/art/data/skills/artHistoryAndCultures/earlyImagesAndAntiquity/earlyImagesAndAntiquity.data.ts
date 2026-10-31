import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { analyzeAncientEgyptianFuneraryImagery_Skill_Data, analyzeClassicalGreekSculpture_Skill_Data, analyzeMesopotamianNarrativeReliefs_Skill_Data, analyzeRomanPortraiture_Skill_Data, interpretUpperPaleolithicCavePainting_Skill_Data } from './skills';

export const earlyImagesAndAntiquity_SkillGroup_Data = buildSkillGroupConfig({
  slug: "earlyImagesAndAntiquity",
  id: "eccab0e6-bbf1-44c9-a3ba-2d3cf4a429e7",
  name: {
    en: "Early Images and Antiquity",
  },
  skills: {
    analyzeAncientEgyptianFuneraryImagery: analyzeAncientEgyptianFuneraryImagery_Skill_Data,
    analyzeClassicalGreekSculpture: analyzeClassicalGreekSculpture_Skill_Data,
    analyzeMesopotamianNarrativeReliefs: analyzeMesopotamianNarrativeReliefs_Skill_Data,
    analyzeRomanPortraiture: analyzeRomanPortraiture_Skill_Data,
    interpretUpperPaleolithicCavePainting: interpretUpperPaleolithicCavePainting_Skill_Data,
  },
  description: {
    methodological: "These practices emerged in different historical settings and should be read through their own surviving works, functions and available archaeological evidence. Similar motifs do not imply that their makers shared one artistic tradition.",
    frontend: {
      en: "Study early images and ancient art through surviving objects and their specific contexts.",
    },
  },
});
