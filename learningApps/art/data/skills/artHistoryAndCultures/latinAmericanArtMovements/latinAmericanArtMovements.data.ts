import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { analyzeBrazilianConcreteArt_Skill_Data, analyzeCuscoSchoolPainting_Skill_Data, analyzeMexicanMuralism_Skill_Data } from './skills';

export const latinAmericanArtMovements_SkillGroup_Data = buildSkillGroupConfig({
  slug: "latinAmericanArtMovements",
  id: "7954e614-55ec-4d5e-9468-bd961ba21149",
  name: {
    en: "Latin American Art Movements",
  },
  skills: {
    analyzeBrazilianConcreteArt: analyzeBrazilianConcreteArt_Skill_Data,
    analyzeCuscoSchoolPainting: analyzeCuscoSchoolPainting_Skill_Data,
    analyzeMexicanMuralism: analyzeMexicanMuralism_Skill_Data,
  },
  description: {
    methodological: "These movements reflect different engagements with Indigenous heritage, colonial institutions, modernism and public expression in specified places.",
    frontend: {
      en: "Explore distinct Latin American art movements through their specific settings and aims.",
    },
  },
});
