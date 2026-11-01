import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const solarActivityCycle_Skill_Data = buildSkillConfig({
  slug: "solarActivityCycle",
  id: "6a79e86a-9c8c-4588-881e-b661f7a6a0c1",
  name: {
    en: "Solar Activity Cycle",
  },
  description: {
    methodological: "Interpret periodic trends in solar magnetic activity without assuming identical cycles.",
    frontend: {
      en: "Follow the changing patterns of solar activity without assuming every cycle is identical.",
    },
  },
});
