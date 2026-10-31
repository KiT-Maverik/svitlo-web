import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { composeWithColorMasses_Skill_Data, controlPaintedEdges_Skill_Data, developPainterlyExpression_Skill_Data, establishAFocalPoint_Skill_Data, organizeFigureAndGround_Skill_Data } from './skills';

export const pictorialComposition_SkillGroup_Data = buildSkillGroupConfig({
  slug: "pictorialComposition",
  id: "05ace255-9fc6-4cd9-9d64-000cb089cdb9",
  name: {
    en: "Pictorial Composition",
  },
  skills: {
    composeWithColorMasses: composeWithColorMasses_Skill_Data,
    controlPaintedEdges: controlPaintedEdges_Skill_Data,
    developPainterlyExpression: developPainterlyExpression_Skill_Data,
    establishAFocalPoint: establishAFocalPoint_Skill_Data,
    organizeFigureAndGround: organizeFigureAndGround_Skill_Data,
  },
  description: {
    methodological: "Color areas, focal structure and handling of edges determine a painting's organization separately from subject matter.",
    frontend: {
      en: "Organize large areas, contrasts and edges to make a painting work as a whole.",
    },
  },
});
