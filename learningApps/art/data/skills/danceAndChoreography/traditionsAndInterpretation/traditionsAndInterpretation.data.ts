import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { adaptTraditionalMovementResponsibly_Skill_Data, analyzeDanceInCulturalContext_Skill_Data, distinguishDanceGenres_Skill_Data, evaluateDancePerformance_Skill_Data, interpretExpressiveMovement_Skill_Data } from './skills';

export const traditionsAndInterpretation_SkillGroup_Data = buildSkillGroupConfig({
  slug: "traditionsAndInterpretation",
  id: "125a3506-b220-4e80-99af-c25ffb7118a2",
  name: {
    en: "Traditions and Interpretation",
  },
  skills: {
    adaptTraditionalMovementResponsibly: adaptTraditionalMovementResponsibly_Skill_Data,
    analyzeDanceInCulturalContext: analyzeDanceInCulturalContext_Skill_Data,
    distinguishDanceGenres: distinguishDanceGenres_Skill_Data,
    evaluateDancePerformance: evaluateDancePerformance_Skill_Data,
    interpretExpressiveMovement: interpretExpressiveMovement_Skill_Data,
  },
  description: {
    methodological: "Dance forms have social and historical purposes that must be understood on their own cultural terms.",
    frontend: {
      en: "Explore the meaning and cultural context of different dance traditions.",
    },
  },
});
