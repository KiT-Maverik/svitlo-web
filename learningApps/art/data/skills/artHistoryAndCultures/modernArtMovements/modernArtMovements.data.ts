import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { analyzeConstructivism_Skill_Data, analyzeCubism_Skill_Data, analyzeGermanExpressionistPainting_Skill_Data, analyzeImpressionism_Skill_Data, analyzePostImpressionism_Skill_Data, analyzeRealistPainting_Skill_Data, analyzeRomanticPainting_Skill_Data, analyzeSurrealism_Skill_Data } from './skills';

export const modernArtMovements_SkillGroup_Data = buildSkillGroupConfig({
  slug: "modernArtMovements",
  id: "f39c14cf-8aa4-448c-b0ed-b5e60f78d161",
  name: {
    en: "Modern Art Movements",
  },
  skills: {
    analyzeConstructivism: analyzeConstructivism_Skill_Data,
    analyzeCubism: analyzeCubism_Skill_Data,
    analyzeGermanExpressionistPainting: analyzeGermanExpressionistPainting_Skill_Data,
    analyzeImpressionism: analyzeImpressionism_Skill_Data,
    analyzePostImpressionism: analyzePostImpressionism_Skill_Data,
    analyzeRealistPainting: analyzeRealistPainting_Skill_Data,
    analyzeRomanticPainting: analyzeRomanticPainting_Skill_Data,
    analyzeSurrealism: analyzeSurrealism_Skill_Data,
  },
  description: {
    methodological: "These named movements generated differing responses to social modernity and established visual conventions. Mastery of one movement does not imply mastery of its neighbors.",
    frontend: {
      en: "Explore how different modern art movements challenged familiar artistic conventions.",
    },
  },
});
