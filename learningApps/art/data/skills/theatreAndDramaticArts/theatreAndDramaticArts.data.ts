import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { acting_SkillGroup_Data } from './acting/acting.data';
import { dramaturgyAndDirection_SkillGroup_Data } from './dramaturgyAndDirection/dramaturgyAndDirection.data';
import { improvisationAndDevising_SkillGroup_Data } from './improvisationAndDevising/improvisationAndDevising.data';
import { stageExpressionAndPuppetry_SkillGroup_Data } from './stageExpressionAndPuppetry/stageExpressionAndPuppetry.data';

export const theatreAndDramaticArts_SkillDomain_Data = buildSkillDomainConfig({
  slug: "theatreAndDramaticArts",
  id: "db9a6b16-6707-4a85-80bf-875fb766fc20",
  name: {
    en: "Theatre and Dramatic Arts",
  },
  groups: {
    acting: acting_SkillGroup_Data,
    dramaturgyAndDirection: dramaturgyAndDirection_SkillGroup_Data,
    improvisationAndDevising: improvisationAndDevising_SkillGroup_Data,
    stageExpressionAndPuppetry: stageExpressionAndPuppetry_SkillGroup_Data,
  },
  description: {
    methodological: "Theatre creates meaning through embodied roles, dramatic situations, live collaboration and staging. Its practical focus differs from general literary theory or building stage machinery.",
    frontend: {
      en: "Explore how actors, stories, staging and collaboration bring live drama to life.",
    },
  },
});
