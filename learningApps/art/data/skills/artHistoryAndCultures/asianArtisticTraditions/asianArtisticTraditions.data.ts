import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { analyzeChineseInkPainting_Skill_Data, analyzeJapaneseUkiyoE_Skill_Data, analyzeKoreanCeladon_Skill_Data, analyzeMughalMiniaturePainting_Skill_Data, analyzePersianMiniaturePainting_Skill_Data } from './skills';

export const asianArtisticTraditions_SkillGroup_Data = buildSkillGroupConfig({
  slug: "asianArtisticTraditions",
  id: "1ec93970-d41f-4086-b3ba-8dbc3af59e9c",
  name: {
    en: "Asian Artistic Traditions",
  },
  skills: {
    analyzeChineseInkPainting: analyzeChineseInkPainting_Skill_Data,
    analyzeJapaneseUkiyoE: analyzeJapaneseUkiyoE_Skill_Data,
    analyzeKoreanCeladon: analyzeKoreanCeladon_Skill_Data,
    analyzeMughalMiniaturePainting: analyzeMughalMiniaturePainting_Skill_Data,
    analyzePersianMiniaturePainting: analyzePersianMiniaturePainting_Skill_Data,
  },
  description: {
    methodological: "Specific regional practices use different material systems, pictorial conventions and patronage contexts; geographic proximity does not imply shared aesthetic rules.",
    frontend: {
      en: "Discover distinct artistic practices across Asia through their own histories and materials.",
    },
  },
});
