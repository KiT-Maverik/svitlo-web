import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { analyzeBoychukism_Skill_Data, analyzePetrykivkaDecorativePainting_Skill_Data, analyzeUkrainianBaroqueIconPainting_Skill_Data } from './skills';

export const ukrainianArtisticTraditions_SkillGroup_Data = buildSkillGroupConfig({
  slug: "ukrainianArtisticTraditions",
  id: "44070f30-13ab-479f-9130-cb3354df3382",
  name: {
    en: "Ukrainian Artistic Traditions",
  },
  skills: {
    analyzeBoychukism: analyzeBoychukism_Skill_Data,
    analyzePetrykivkaDecorativePainting: analyzePetrykivkaDecorativePainting_Skill_Data,
    analyzeUkrainianBaroqueIconPainting: analyzeUkrainianBaroqueIconPainting_Skill_Data,
  },
  description: {
    methodological: "These practices distinguish decorative folk art, historical religious painting and a twentieth-century monumental-art movement while acknowledging their exchanges and transformations.",
    frontend: {
      en: "Explore distinct Ukrainian painting and monumental art traditions through their histories.",
    },
  },
});
