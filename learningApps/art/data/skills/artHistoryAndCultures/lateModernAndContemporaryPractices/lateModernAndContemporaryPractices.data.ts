import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { analyzeConceptualArt_Skill_Data, analyzeInstallationArt_Skill_Data, analyzeMinimalism_Skill_Data, analyzePerformanceArt_Skill_Data, analyzePopArt_Skill_Data } from './skills';

export const lateModernAndContemporaryPractices_SkillGroup_Data = buildSkillGroupConfig({
  slug: "lateModernAndContemporaryPractices",
  id: "6118e75b-0c4a-4fe1-9e6a-a5415066f280",
  name: {
    en: "Late Modern and Contemporary Practices",
  },
  skills: {
    analyzeConceptualArt: analyzeConceptualArt_Skill_Data,
    analyzeInstallationArt: analyzeInstallationArt_Skill_Data,
    analyzeMinimalism: analyzeMinimalism_Skill_Data,
    analyzePerformanceArt: analyzePerformanceArt_Skill_Data,
    analyzePopArt: analyzePopArt_Skill_Data,
  },
  description: {
    methodological: "Artworks in these practices can privilege ideas, everyday images, participation or spatial conditions over traditional single-object representation.",
    frontend: {
      en: "Explore artworks that place unusual emphasis on ideas, space, participation or everyday imagery.",
    },
  },
});
