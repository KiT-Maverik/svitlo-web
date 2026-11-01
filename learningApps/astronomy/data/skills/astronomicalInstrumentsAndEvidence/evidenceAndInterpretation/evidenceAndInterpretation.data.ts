import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  astronomicalLightCurves_Skill_Data,
  astronomicalModelTesting_Skill_Data,
  measurementUncertainty_Skill_Data,
  observationalSelectionEffects_Skill_Data,
} from './skills';

export const evidenceAndInterpretation_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'evidenceAndInterpretation',
  id: '0d98be20-60fe-4a16-ac5f-6735e9ed1214',
  name: {
    en: 'Evidence and Interpretation',
    uk: 'Докази та їх інтерпретація',
    pl: 'Dowody i ich interpretacja',
  },
  skills: {
    astronomicalLightCurves: astronomicalLightCurves_Skill_Data,
    astronomicalModelTesting: astronomicalModelTesting_Skill_Data,
    measurementUncertainty: measurementUncertainty_Skill_Data,
    observationalSelectionEffects: observationalSelectionEffects_Skill_Data,
  },
  description: {
    methodological:
      'Astronomical conclusions require comparisons between predictions and measured signals, including attention to uncertainty and alternative explanations.',
    frontend: {
      en: 'Learn to judge astronomical conclusions using measurements, uncertainties and competing explanations.',
      uk: 'Навчися оцінювати астрономічні висновки за вимірюваннями, невизначеністю та альтернативними поясненнями.',
      pl: 'Naucz się oceniać wnioski astronomiczne na podstawie pomiarów, niepewności i konkurencyjnych wyjaśnień.',
    },
  },
});
