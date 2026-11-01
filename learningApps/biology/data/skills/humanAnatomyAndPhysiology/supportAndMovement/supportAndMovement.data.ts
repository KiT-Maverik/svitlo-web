import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { describeInteractionsBetweenBonesAndMuscles_Skill_Data, explainTheRoleOfMusclesInMovement_Skill_Data, explainTheRoleOfTheSkeleton_Skill_Data } from './skills';

export const supportAndMovement_SkillGroup_Data = buildSkillGroupConfig({
  slug: "supportAndMovement",
  id: "42a106c2-cb21-46e3-b394-bbc199821b28",
  name: {
    en: "Support and Movement",
  },
  skills: {
    describeInteractionsBetweenBonesAndMuscles: describeInteractionsBetweenBonesAndMuscles_Skill_Data,
    explainTheRoleOfMusclesInMovement: explainTheRoleOfMusclesInMovement_Skill_Data,
    explainTheRoleOfTheSkeleton: explainTheRoleOfTheSkeleton_Skill_Data,
  },
  description: {
    methodological: "Bones provide support and levers, muscles exert force, and joints determine the possible directions of movement.",
    frontend: {
      en: "Explore how bones, muscles and joints work together in movement.",
    },
  },
});
