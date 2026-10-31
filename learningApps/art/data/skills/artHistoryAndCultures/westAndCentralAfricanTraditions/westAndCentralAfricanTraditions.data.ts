import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { analyzeBeninCourtPlaques_Skill_Data, analyzeGeledeMasqueradeTraditions_Skill_Data, analyzeKongoNkisiFigures_Skill_Data } from './skills';

export const westAndCentralAfricanTraditions_SkillGroup_Data = buildSkillGroupConfig({
  slug: "westAndCentralAfricanTraditions",
  id: "7e2da08a-9d4e-424c-a17e-995d111a6f19",
  name: {
    en: "West and Central African Traditions",
  },
  skills: {
    analyzeBeninCourtPlaques: analyzeBeninCourtPlaques_Skill_Data,
    analyzeGeledeMasqueradeTraditions: analyzeGeledeMasqueradeTraditions_Skill_Data,
    analyzeKongoNkisiFigures: analyzeKongoNkisiFigures_Skill_Data,
  },
  description: {
    methodological: "These examples refer to particular peoples and court or community practices. They are not interchangeable illustrations of a supposedly uniform 'African art'.",
    frontend: {
      en: "Study distinct artistic traditions connected to named West and Central African communities.",
    },
  },
});
