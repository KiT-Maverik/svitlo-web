import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const classifyObjectsAsLivingDeadOrNeverAlive_Skill_Data = buildSkillConfig({
  slug: "classifyObjectsAsLivingDeadOrNeverAlive",
  id: "5b92ed2d-af5d-47ff-b7f1-71209407050c",
  name: {
    en: "Classify objects as living, dead, or never alive",
  },
  description: {
    methodological: "Use evidence of life processes and origin to classify an object and justify the decision through diagnostic features. A living tree carries out life processes, a dead leaf once belonged to a living organism, and a stone has no biological origin. Do not equate dead organisms with their remains or with products of biological origin.",
    frontend: {
      en: "Use evidence to decide whether something is living, dead or has never been alive.",
    },
  },
});
