import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const astronomicalModelTesting_Skill_Data = buildSkillConfig({
  slug: 'astronomicalModelTesting',
  id: 'b8fc21c2-b6ee-4027-95aa-62d160f3edff',
  name: {
    en: 'Astronomical Model Testing',
    uk: 'Перевірка астрономічних моделей',
    pl: 'Testowanie modeli astronomicznych',
  },
  description: {
    methodological:
      'Compare competing explanations with observations and revised predictions, including historically important planetary models.',
    frontend: {
      en: 'Compare astronomical models against evidence and decide which predictions hold up.',
      uk: 'Порівнюй передбачення астрономічних моделей зі спостереженнями й визначай, які з них підтверджуються.',
      pl: 'Porównuj przewidywania modeli astronomicznych z obserwacjami i sprawdzaj, które z nich znajdują potwierdzenie.',
    },
  },
});
