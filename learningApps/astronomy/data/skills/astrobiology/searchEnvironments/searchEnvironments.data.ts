import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { exoplanetLifeSearches_Skill_Data, solarSystemLifeSearches_Skill_Data, subsurfaceHabitats_Skill_Data } from './skills';

export const searchEnvironments_SkillGroup_Data = buildSkillGroupConfig({
  slug: "searchEnvironments",
  id: "f2ee296d-7ca0-4318-a494-cb036f74b21b",
  name: {
    en: "Search Environments",
  },
  skills: {
    exoplanetLifeSearches: exoplanetLifeSearches_Skill_Data,
    solarSystemLifeSearches: solarSystemLifeSearches_Skill_Data,
    subsurfaceHabitats: subsurfaceHabitats_Skill_Data,
  },
  description: {
    methodological: "Search strategies differ for nearby worlds whose material can be sampled and distant worlds known mainly through remote measurements.",
    frontend: {
      en: "Compare scientific methods for searching different worlds and environments for life.",
    },
  },
});
