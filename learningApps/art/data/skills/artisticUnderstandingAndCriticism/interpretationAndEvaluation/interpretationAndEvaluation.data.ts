import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { compareArtisticInterpretations_Skill_Data, describeArtworksPrecisely_Skill_Data, distinguishObservationFromInterpretation_Skill_Data, evaluateArtUsingCriteria_Skill_Data, supportAnArtisticInterpretation_Skill_Data } from './skills';

export const interpretationAndEvaluation_SkillGroup_Data = buildSkillGroupConfig({
  slug: "interpretationAndEvaluation",
  id: "4dd3052d-eefd-4b00-b051-abc1c585973f",
  name: {
    en: "Interpretation and Evaluation",
  },
  skills: {
    compareArtisticInterpretations: compareArtisticInterpretations_Skill_Data,
    describeArtworksPrecisely: describeArtworksPrecisely_Skill_Data,
    distinguishObservationFromInterpretation: distinguishObservationFromInterpretation_Skill_Data,
    evaluateArtUsingCriteria: evaluateArtUsingCriteria_Skill_Data,
    supportAnArtisticInterpretation: supportAnArtisticInterpretation_Skill_Data,
  },
  description: {
    methodological: "Judgments about art become more useful when observable evidence, contextual claims and chosen evaluative criteria are stated separately.",
    frontend: {
      en: "Learn to discuss what an artwork might mean using evidence and clear criteria.",
    },
  },
});
