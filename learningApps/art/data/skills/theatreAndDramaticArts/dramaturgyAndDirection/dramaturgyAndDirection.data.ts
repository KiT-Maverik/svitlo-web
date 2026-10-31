import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { analyzeDramaticStructure_Skill_Data, blockAStageScene_Skill_Data, directAScene_Skill_Data, interpretStageDirections_Skill_Data } from './skills';

export const dramaturgyAndDirection_SkillGroup_Data = buildSkillGroupConfig({
  slug: "dramaturgyAndDirection",
  id: "0212aed3-fcc5-41e4-a42f-d5c3c4e8ec8d",
  name: {
    en: "Dramaturgy and Direction",
  },
  skills: {
    analyzeDramaticStructure: analyzeDramaticStructure_Skill_Data,
    blockAStageScene: blockAStageScene_Skill_Data,
    directAScene: directAScene_Skill_Data,
    interpretStageDirections: interpretStageDirections_Skill_Data,
  },
  description: {
    methodological: "Interpreting dramatic structure and organizing performers in space makes a chosen reading performable.",
    frontend: {
      en: "Explore how a dramatic story is structured and brought to the stage.",
    },
  },
});
