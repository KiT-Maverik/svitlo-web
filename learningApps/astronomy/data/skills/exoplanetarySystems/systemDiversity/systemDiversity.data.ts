import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { circumstellarHabitableZones_Skill_Data, exoplanetSystemArchitectures_Skill_Data, limitsOfHabitabilityIndicators_Skill_Data, planetaryMigration_Skill_Data } from './skills';

export const systemDiversity_SkillGroup_Data = buildSkillGroupConfig({
  slug: "systemDiversity",
  id: "2fdf0bf7-2911-4ca4-a23f-9dc2030d3f14",
  name: {
    en: "System Diversity",
  },
  skills: {
    circumstellarHabitableZones: circumstellarHabitableZones_Skill_Data,
    exoplanetSystemArchitectures: exoplanetSystemArchitectures_Skill_Data,
    limitsOfHabitabilityIndicators: limitsOfHabitabilityIndicators_Skill_Data,
    planetaryMigration: planetaryMigration_Skill_Data,
  },
  description: {
    methodological: "Comparing observed systems reveals patterns and exceptions relative to Solar System expectations.",
    frontend: {
      en: "Discover how planetary systems can differ greatly from our own.",
    },
  },
});
