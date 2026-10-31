import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { maintainAnEnsemblePart_Skill_Data, performAnInstrumentalPhrase_Skill_Data, produceInstrumentalTone_Skill_Data, respondToMusicalCues_Skill_Data, shapePerformanceDynamics_Skill_Data } from './skills';

export const instrumentAndEnsemblePerformance_SkillGroup_Data = buildSkillGroupConfig({
  slug: "instrumentAndEnsemblePerformance",
  id: "90e96078-a5ad-4bc1-8fce-407be51f9032",
  name: {
    en: "Instrument and Ensemble Performance",
  },
  skills: {
    maintainAnEnsemblePart: maintainAnEnsemblePart_Skill_Data,
    performAnInstrumentalPhrase: performAnInstrumentalPhrase_Skill_Data,
    produceInstrumentalTone: produceInstrumentalTone_Skill_Data,
    respondToMusicalCues: respondToMusicalCues_Skill_Data,
    shapePerformanceDynamics: shapePerformanceDynamics_Skill_Data,
  },
  description: {
    methodological: "Sound production and responsiveness to fellow performers support coherent realization of musical ideas.",
    frontend: {
      en: "Develop musical expression through instrument technique and playing together.",
    },
  },
});
