import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { explainEndocrineRegulation_Skill_Data, explainMaintenanceOfHomeostasis_Skill_Data } from './skills';

export const regulationAndHomeostasis_SkillGroup_Data = buildSkillGroupConfig({
  slug: "regulationAndHomeostasis",
  id: "dd9f31e0-6af3-43cc-a4c2-9887ceea1b07",
  name: {
    en: "Regulation and Homeostasis",
  },
  skills: {
    explainEndocrineRegulation: explainEndocrineRegulation_Skill_Data,
    explainMaintenanceOfHomeostasis: explainMaintenanceOfHomeostasis_Skill_Data,
  },
  description: {
    methodological: "Nervous and hormonal signals coordinate organ functions, while feedback mechanisms maintain key internal conditions within viable ranges.",
    frontend: {
      en: "Discover how hormones, nerves and feedback help regulate body functions.",
    },
  },
});
