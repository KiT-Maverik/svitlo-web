import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { freeFloatingPlanets_Skill_Data, gravitationallyBoundSystems_Skill_Data, objectMembershipAndIsolation_Skill_Data } from './skills';

export const organizationAndMembership_SkillGroup_Data = buildSkillGroupConfig({
  slug: "organizationAndMembership",
  id: "e0ceb758-1b5a-4dd2-849e-aefca4bab31d",
  name: {
    en: "Organization and Membership",
  },
  skills: {
    freeFloatingPlanets: freeFloatingPlanets_Skill_Data,
    gravitationallyBoundSystems: gravitationallyBoundSystems_Skill_Data,
    objectMembershipAndIsolation: objectMembershipAndIsolation_Skill_Data,
  },
  description: {
    methodological: "A body's membership in a system is a different property from its type; the same class of object can be gravitationally bound, ejected or found in a sparse galactic environment.",
    frontend: {
      en: "Discover how objects belong to larger astronomical systems or travel independently.",
    },
  },
});
