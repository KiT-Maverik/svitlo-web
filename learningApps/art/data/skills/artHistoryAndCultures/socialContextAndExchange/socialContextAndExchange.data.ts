import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { analyzeArtisticPatronage_Skill_Data, analyzeArtisticTechnologyHistorically_Skill_Data, interpretArtAsHistoricalEvidence_Skill_Data, traceArtisticExchange_Skill_Data } from './skills';

export const socialContextAndExchange_SkillGroup_Data = buildSkillGroupConfig({
  slug: "socialContextAndExchange",
  id: "88ac8eb9-4666-4cc2-b3b3-df1c04132e55",
  name: {
    en: "Social Context and Exchange",
  },
  skills: {
    analyzeArtisticPatronage: analyzeArtisticPatronage_Skill_Data,
    analyzeArtisticTechnologyHistorically: analyzeArtisticTechnologyHistorically_Skill_Data,
    interpretArtAsHistoricalEvidence: interpretArtAsHistoricalEvidence_Skill_Data,
    traceArtisticExchange: traceArtisticExchange_Skill_Data,
  },
  description: {
    methodological: "Artistic production responds to institutions, migration and technology without being reducible to them.",
    frontend: {
      en: "Examine how people, institutions and technologies shape artistic exchange over time.",
    },
  },
});
