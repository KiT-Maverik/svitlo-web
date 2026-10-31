import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { animateFrameByFrame_Skill_Data, controlAnimationTiming_Skill_Data, createStopMotionAnimation_Skill_Data, designAnimatedTransitions_Skill_Data } from './skills';

export const animation_SkillGroup_Data = buildSkillGroupConfig({
  slug: "animation",
  id: "4d3c4cb1-4525-470d-9fd1-19a8a0c25ecd",
  name: {
    en: "Animation",
  },
  skills: {
    animateFrameByFrame: animateFrameByFrame_Skill_Data,
    controlAnimationTiming: controlAnimationTiming_Skill_Data,
    createStopMotionAnimation: createStopMotionAnimation_Skill_Data,
    designAnimatedTransitions: designAnimatedTransitions_Skill_Data,
  },
  description: {
    methodological: "Animating involves designing change across successive states and controlling the temporal character of motion.",
    frontend: {
      en: "Bring drawings or objects to life by planning changes over time.",
    },
  },
});
