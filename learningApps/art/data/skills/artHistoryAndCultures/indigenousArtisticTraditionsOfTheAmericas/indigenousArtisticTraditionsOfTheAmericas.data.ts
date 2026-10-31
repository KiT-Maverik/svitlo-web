import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { analyzeAndeanWeavingTraditions_Skill_Data, analyzeClassicMayaReliefSculpture_Skill_Data, analyzeHaidaFormlineArt_Skill_Data } from './skills';

export const indigenousArtisticTraditionsOfTheAmericas_SkillGroup_Data = buildSkillGroupConfig({
  slug: "indigenousArtisticTraditionsOfTheAmericas",
  id: "2b97c500-ae52-427f-9083-4152fa878e9d",
  name: {
    en: "Indigenous Artistic Traditions of the Americas",
  },
  skills: {
    analyzeAndeanWeavingTraditions: analyzeAndeanWeavingTraditions_Skill_Data,
    analyzeClassicMayaReliefSculpture: analyzeClassicMayaReliefSculpture_Skill_Data,
    analyzeHaidaFormlineArt: analyzeHaidaFormlineArt_Skill_Data,
  },
  description: {
    methodological: "Works are understood within named peoples' histories and living cultural continuities, with attention to provenance and the limits of outsider interpretation.",
    frontend: {
      en: "Study artistic traditions of named Indigenous peoples of the Americas in their own contexts.",
    },
  },
});
