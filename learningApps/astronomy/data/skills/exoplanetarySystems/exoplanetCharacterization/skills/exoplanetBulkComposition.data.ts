import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const exoplanetBulkComposition_Skill_Data = buildSkillConfig({
  slug: "exoplanetBulkComposition",
  id: "3cae1ddc-a535-4230-a8ac-0dde170d289f",
  name: {
    en: "Exoplanet Bulk Composition",
  },
  description: {
    methodological: "Relate a planet's mass-radius behavior to plausible internal materials while recognizing model degeneracy.",
    frontend: {
      en: "Use mass and radius to investigate possible planetary materials without assuming one answer.",
    },
  },
});
