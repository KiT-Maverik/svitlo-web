import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { analyzeMaoriWhakairoCarving_Skill_Data, analyzeYolUBarkPainting_Skill_Data } from './skills';

export const oceaniaArtisticTraditions_SkillGroup_Data = buildSkillGroupConfig({
  slug: "oceaniaArtisticTraditions",
  id: "3a10ec21-8d09-4348-99e3-2418e0198a0b",
  name: {
    en: "Oceania Artistic Traditions",
  },
  skills: {
    analyzeMaoriWhakairoCarving: analyzeMaoriWhakairoCarving_Skill_Data,
    analyzeYolUBarkPainting: analyzeYolUBarkPainting_Skill_Data,
  },
  description: {
    methodological: "Material practices in Aotearoa New Zealand and northern Australia are treated as distinct cultural traditions, not as interchangeable decorative vocabularies.",
    frontend: {
      en: "Study distinct artistic traditions of Māori communities and Yolŋu peoples.",
    },
  },
});
