import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const observationalSelectionEffects_Skill_Data = buildSkillConfig({
  slug: 'observationalSelectionEffects',
  id: 'ece5cc9f-a000-4a4c-9a60-a37cef48807b',
  name: {
    en: 'Observational Selection Effects',
    uk: 'Ефекти відбору під час спостережень',
    pl: 'Efekty selekcji obserwacyjnej',
  },
  description: {
    methodological:
      'Identify how detection thresholds and survey methods bias the populations of celestial objects that appear in catalogs.',
    frontend: {
      en: 'Discover why telescopes and surveys detect some objects more easily than others.',
      uk: 'Дізнайся, чому телескопи й астрономічні огляди виявляють одні об’єкти легше, ніж інші.',
      pl: 'Dowiedz się, dlaczego teleskopy i przeglądy nieba wykrywają jedne obiekty łatwiej niż inne.',
    },
  },
});
