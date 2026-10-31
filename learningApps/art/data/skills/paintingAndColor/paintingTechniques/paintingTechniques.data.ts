import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { applyAGlaze_Skill_Data, applyWatercolorWashes_Skill_Data, blendWetPaint_Skill_Data, buildOpaqueLayers_Skill_Data, selectPaintingSupports_Skill_Data, useAcrylicPaintingTechniques_Skill_Data, useOilPaintingTechniques_Skill_Data } from './skills';

export const paintingTechniques_SkillGroup_Data = buildSkillGroupConfig({
  slug: "paintingTechniques",
  id: "5901f087-7742-4eaf-965f-42ae92137057",
  name: {
    en: "Painting Techniques",
  },
  skills: {
    applyAGlaze: applyAGlaze_Skill_Data,
    applyWatercolorWashes: applyWatercolorWashes_Skill_Data,
    blendWetPaint: blendWetPaint_Skill_Data,
    buildOpaqueLayers: buildOpaqueLayers_Skill_Data,
    selectPaintingSupports: selectPaintingSupports_Skill_Data,
    useAcrylicPaintingTechniques: useAcrylicPaintingTechniques_Skill_Data,
    useOilPaintingTechniques: useOilPaintingTechniques_Skill_Data,
  },
  description: {
    methodological: "Different physical application methods affect transparency, edges, layering and surface appearance.",
    frontend: {
      en: "Discover how paint application changes transparency, layers and edges.",
    },
  },
});
