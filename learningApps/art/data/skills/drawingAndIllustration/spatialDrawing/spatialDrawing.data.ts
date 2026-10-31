import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { constructOnePointPerspective_Skill_Data, constructTwoPointPerspective_Skill_Data, depictDepthWithOverlap_Skill_Data, depictForeshortening_Skill_Data, useRelativeProportions_Skill_Data } from './skills';

export const spatialDrawing_SkillGroup_Data = buildSkillGroupConfig({
  slug: "spatialDrawing",
  id: "11a7337c-cf39-4519-8bcc-1b2a0b69ace3",
  name: {
    en: "Spatial Drawing",
  },
  skills: {
    constructOnePointPerspective: constructOnePointPerspective_Skill_Data,
    constructTwoPointPerspective: constructTwoPointPerspective_Skill_Data,
    depictDepthWithOverlap: depictDepthWithOverlap_Skill_Data,
    depictForeshortening: depictForeshortening_Skill_Data,
    useRelativeProportions: useRelativeProportions_Skill_Data,
  },
  description: {
    methodological: "These methods depict depth and coherent form on flat surfaces, while leaving room for deliberate stylistic distortion.",
    frontend: {
      en: "Create believable space and form on a flat page, or bend perspective deliberately.",
    },
  },
});
