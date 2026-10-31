import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const analyzeGenerativeAuthorship_Skill_Data = buildSkillConfig({
  slug: "analyzeGenerativeAuthorship",
  id: "55e9f579-7a2b-40ca-9c68-aadff5f43b31",
  name: {
    en: "Analyze Generative Authorship",
  },
  description: {
    methodological: "Distinguish contributions from source material, tools, rule choices and human curation.",
    frontend: {
      en: "Explore how artists, tools, source material and rules contribute to generated art.",
    },
  },
});
