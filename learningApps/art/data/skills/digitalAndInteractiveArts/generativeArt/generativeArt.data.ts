import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { analyzeGenerativeAuthorship_Skill_Data, createGenerativeVisualRules_Skill_Data, curateGenerativeOutputs_Skill_Data, useArtisticRandomness_Skill_Data } from './skills';

export const generativeArt_SkillGroup_Data = buildSkillGroupConfig({
  slug: "generativeArt",
  id: "fcae2b7e-5d71-469b-9b05-9756f0edbb9f",
  name: {
    en: "Generative Art",
  },
  skills: {
    analyzeGenerativeAuthorship: analyzeGenerativeAuthorship_Skill_Data,
    createGenerativeVisualRules: createGenerativeVisualRules_Skill_Data,
    curateGenerativeOutputs: curateGenerativeOutputs_Skill_Data,
    useArtisticRandomness: useArtisticRandomness_Skill_Data,
  },
  description: {
    methodological: "Constraints, transformations and automated variation offer materials that still require deliberate artistic decisions.",
    frontend: {
      en: "Explore how simple rules and controlled variation can make visual art.",
    },
  },
});
