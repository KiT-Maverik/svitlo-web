import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { analyzeFrenchNewWaveCinema_Skill_Data, analyzeGermanExpressionistCinema_Skill_Data, analyzeIndianParallelCinema_Skill_Data, analyzeUkrainianPoeticCinema_Skill_Data } from './skills';

export const historicalFilmMovements_SkillGroup_Data = buildSkillGroupConfig({
  slug: "historicalFilmMovements",
  id: "6b41f816-853c-4a09-85a8-694b724971cf",
  name: {
    en: "Historical Film Movements",
  },
  skills: {
    analyzeFrenchNewWaveCinema: analyzeFrenchNewWaveCinema_Skill_Data,
    analyzeGermanExpressionistCinema: analyzeGermanExpressionistCinema_Skill_Data,
    analyzeIndianParallelCinema: analyzeIndianParallelCinema_Skill_Data,
    analyzeUkrainianPoeticCinema: analyzeUkrainianPoeticCinema_Skill_Data,
  },
  description: {
    methodological: "Movements in film history can be distinguished through camera, staging, editing, narrative and culturally situated aesthetic choices.",
    frontend: {
      en: "Discover how different film movements developed distinctive visual and narrative choices.",
    },
  },
});
