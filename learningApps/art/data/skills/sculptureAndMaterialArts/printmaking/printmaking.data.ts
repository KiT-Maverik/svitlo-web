import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { designAPrintMatrix_Skill_Data, produceAReliefPrint_Skill_Data, produceAStencilPrint_Skill_Data, registerMultiplePrintLayers_Skill_Data } from './skills';

export const printmaking_SkillGroup_Data = buildSkillGroupConfig({
  slug: "printmaking",
  id: "1da9e005-d5bc-48bc-bda1-3313c80dcb0c",
  name: {
    en: "Printmaking",
  },
  skills: {
    designAPrintMatrix: designAPrintMatrix_Skill_Data,
    produceAReliefPrint: produceAReliefPrint_Skill_Data,
    produceAStencilPrint: produceAStencilPrint_Skill_Data,
    registerMultiplePrintLayers: registerMultiplePrintLayers_Skill_Data,
  },
  description: {
    methodological: "A designed matrix, stencil or transferable surface generates impressions that can be repeated with deliberate differences.",
    frontend: {
      en: "Make images by transferring designs from prepared surfaces.",
    },
  },
});
