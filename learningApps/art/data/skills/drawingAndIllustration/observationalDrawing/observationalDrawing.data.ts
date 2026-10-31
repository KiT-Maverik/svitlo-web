import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { constructContourDrawing_Skill_Data, controlDrawingMarks_Skill_Data, drawFromObservation_Skill_Data, renderDrawnTexture_Skill_Data, renderLightAndShadow_Skill_Data } from './skills';

export const observationalDrawing_SkillGroup_Data = buildSkillGroupConfig({
  slug: "observationalDrawing",
  id: "8c0aaf8a-035b-416c-bc06-7639233dde43",
  name: {
    en: "Observational Drawing",
  },
  skills: {
    constructContourDrawing: constructContourDrawing_Skill_Data,
    controlDrawingMarks: controlDrawingMarks_Skill_Data,
    drawFromObservation: drawFromObservation_Skill_Data,
    renderDrawnTexture: renderDrawnTexture_Skill_Data,
    renderLightAndShadow: renderLightAndShadow_Skill_Data,
  },
  description: {
    methodological: "Close observation of proportions, edges, tonal values and surfaces offers a foundation for describing visible subjects rather than relying on schematic symbols.",
    frontend: {
      en: "Build drawings by looking closely at shapes, edges, light and surfaces.",
    },
  },
});
