import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const solarTime_Skill_Data = buildSkillConfig({
  slug: "solarTime",
  id: "b376ce37-2809-499f-b7c3-4ce02a988daa",
  name: {
    en: "Solar Time",
  },
  description: {
    methodological: "Describe Sun-referenced time as related to the apparent position of the Sun, including mean and apparent solar conventions.",
    frontend: {
      en: "Understand how the Sun's position relates to solar time.",
    },
  },
});
