import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { animateGraphicElements_Skill_Data, designKineticTypography_Skill_Data, sequenceMotionGraphics_Skill_Data } from './skills';

export const motionGraphics_SkillGroup_Data = buildSkillGroupConfig({
  slug: "motionGraphics",
  id: "2cedb7dd-a87d-4708-a506-b14cfe278bac",
  name: {
    en: "Motion Graphics",
  },
  skills: {
    animateGraphicElements: animateGraphicElements_Skill_Data,
    designKineticTypography: designKineticTypography_Skill_Data,
    sequenceMotionGraphics: sequenceMotionGraphics_Skill_Data,
  },
  description: {
    methodological: "Moving designed graphics use visual change and pacing for expressive or communicative purposes; they differ from depicting characters in frame-by-frame or stop-motion cinema.",
    frontend: {
      en: "Use moving graphics to communicate ideas, rhythm and visual change.",
    },
  },
});
