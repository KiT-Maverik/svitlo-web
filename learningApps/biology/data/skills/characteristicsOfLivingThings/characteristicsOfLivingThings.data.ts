import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { classifyObjectsAsLivingDeadOrNeverAlive_Skill_Data } from './skills';

export const characteristicsOfLivingThings_SkillDomain_Data = buildSkillDomainConfig({
  slug: "characteristicsOfLivingThings",
  id: "73cc6edd-aa56-4999-966f-0c647868cabc",
  name: {
    en: "Characteristics of Living Things",
  },
  groups: {
  },
  skills: {
    classifyObjectsAsLivingDeadOrNeverAlive: classifyObjectsAsLivingDeadOrNeverAlive_Skill_Data,
  },
  description: {
    methodological: "Life processes, biological origin, and the distinction between living organisms, dead remains, and things that have never been alive. This distinction requires consideration of actual life processes rather than appearance or movement alone.",
    frontend: {
      en: "Discover what makes something alive, what was once alive, and what has never been living.",
    },
  },
});
