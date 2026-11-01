import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { coronalMassEjections_Skill_Data, solarActivityCycle_Skill_Data, solarFlares_Skill_Data, sunspots_Skill_Data } from './skills';

export const magneticActivity_SkillGroup_Data = buildSkillGroupConfig({
  slug: "magneticActivity",
  id: "477e03be-7e47-4d37-b428-ac6c4066addd",
  name: {
    en: "Magnetic Activity",
  },
  skills: {
    coronalMassEjections: coronalMassEjections_Skill_Data,
    solarActivityCycle: solarActivityCycle_Skill_Data,
    solarFlares: solarFlares_Skill_Data,
    sunspots: sunspots_Skill_Data,
  },
  description: {
    methodological: "Magnetic fields in solar plasma produce time-variable surface features and energetic events rather than a perfectly steady star.",
    frontend: {
      en: "Explore how changing solar magnetic fields produce spots and energetic events.",
    },
  },
});
