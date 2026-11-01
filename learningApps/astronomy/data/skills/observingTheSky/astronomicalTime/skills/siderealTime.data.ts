import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const siderealTime_Skill_Data = buildSkillConfig({
  slug: "siderealTime",
  id: "f8287f39-a8a4-4c79-a4ba-c7083d09197b",
  name: {
    en: "Sidereal Time",
  },
  description: {
    methodological: "Explain how rotation relative to distant stars defines sidereal time and predicts which celestial coordinates cross a local meridian.",
    frontend: {
      en: "Use the stars' apparent motion to understand sidereal time.",
    },
  },
});
