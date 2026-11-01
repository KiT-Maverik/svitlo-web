import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { extraterrestrialVolcanism_Skill_Data, impactCratering_Skill_Data, planetaryTectonics_Skill_Data, surfaceAgeEstimation_Skill_Data } from './skills';

export const surfacesAndGeology_SkillGroup_Data = buildSkillGroupConfig({
  slug: "surfacesAndGeology",
  id: "54747e19-fc5d-47f1-ab28-9583559684ea",
  name: {
    en: "Surfaces and Geology",
  },
  skills: {
    extraterrestrialVolcanism: extraterrestrialVolcanism_Skill_Data,
    impactCratering: impactCratering_Skill_Data,
    planetaryTectonics: planetaryTectonics_Skill_Data,
    surfaceAgeEstimation: surfaceAgeEstimation_Skill_Data,
  },
  description: {
    methodological: "Observable terrain records impacts, deformation, volcanism and erosion, with interpretation conditioned by the limits of remote data.",
    frontend: {
      en: "Read the clues left on planetary surfaces by collisions and geological change.",
    },
  },
});
