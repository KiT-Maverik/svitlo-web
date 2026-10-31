import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { composeAPhotograph_Skill_Data, controlPhotographicExposure_Skill_Data, useDepthOfField_Skill_Data, usePhotographicLighting_Skill_Data } from './skills';

export const photographicTechnique_SkillGroup_Data = buildSkillGroupConfig({
  slug: "photographicTechnique",
  id: "16b787b9-bcec-41a9-83ff-ff83c22b97c4",
  name: {
    en: "Photographic Technique",
  },
  skills: {
    composeAPhotograph: composeAPhotograph_Skill_Data,
    controlPhotographicExposure: controlPhotographicExposure_Skill_Data,
    useDepthOfField: useDepthOfField_Skill_Data,
    usePhotographicLighting: usePhotographicLighting_Skill_Data,
  },
  description: {
    methodological: "Camera controls and light are treated as artistic choices, not as an engineering account of optical devices.",
    frontend: {
      en: "Use camera and lighting choices to create a photograph with a clear visual effect.",
    },
  },
});
