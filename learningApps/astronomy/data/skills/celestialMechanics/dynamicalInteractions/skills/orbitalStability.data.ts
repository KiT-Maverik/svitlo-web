import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const orbitalStability_Skill_Data = buildSkillConfig({
  slug: "orbitalStability",
  id: "ff5961e6-5ce4-426d-8770-b9e52d294bac",
  name: {
    en: "Orbital Stability",
  },
  description: {
    methodological: "Evaluate how changing orbital parameters and interactions can affect whether a system remains dynamically stable.",
    frontend: {
      en: "Explore what helps an orbital system remain stable—or makes it change.",
    },
  },
});
