import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { createDramaticConflict_Skill_Data, developDramaticOffers_Skill_Data, deviseASceneCollaboratively_Skill_Data, improviseADramaticScene_Skill_Data } from './skills';

export const improvisationAndDevising_SkillGroup_Data = buildSkillGroupConfig({
  slug: "improvisationAndDevising",
  id: "aae1e673-0bad-42ac-86aa-018d7fa8f035",
  name: {
    en: "Improvisation and Devising",
  },
  skills: {
    createDramaticConflict: createDramaticConflict_Skill_Data,
    developDramaticOffers: developDramaticOffers_Skill_Data,
    deviseASceneCollaboratively: deviseASceneCollaboratively_Skill_Data,
    improviseADramaticScene: improviseADramaticScene_Skill_Data,
  },
  description: {
    methodological: "Co-created drama develops from shared offers, emergent situations and meaningful conflict rather than only a finished script.",
    frontend: {
      en: "Create theatre together by inventing situations, actions and conflicts.",
    },
  },
});
