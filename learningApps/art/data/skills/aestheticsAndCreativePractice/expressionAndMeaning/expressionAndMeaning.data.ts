import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { analyzeArtisticMetaphor_Skill_Data, analyzeEmotionalExpression_Skill_Data, interpretArtisticSymbols_Skill_Data, relateArtisticFormToContent_Skill_Data } from './skills';

export const expressionAndMeaning_SkillGroup_Data = buildSkillGroupConfig({
  slug: "expressionAndMeaning",
  id: "433ef00c-63d4-43d7-9d6f-764d0ba50c2b",
  name: {
    en: "Expression and Meaning",
  },
  skills: {
    analyzeArtisticMetaphor: analyzeArtisticMetaphor_Skill_Data,
    analyzeEmotionalExpression: analyzeEmotionalExpression_Skill_Data,
    interpretArtisticSymbols: interpretArtisticSymbols_Skill_Data,
    relateArtisticFormToContent: relateArtisticFormToContent_Skill_Data,
  },
  description: {
    methodological: "Symbolism and emotional character require interpretations anchored in artistic choices and context.",
    frontend: {
      en: "Explore how symbols, emotions and formal choices communicate artistic meaning.",
    },
  },
});
