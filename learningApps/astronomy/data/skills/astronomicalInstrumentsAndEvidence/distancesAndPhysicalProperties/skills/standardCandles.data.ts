import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const standardCandles_Skill_Data = buildSkillConfig({
  slug: 'standardCandles',
  id: 'a2c155f8-e6d3-4991-8ba2-ba5ddfc067e0',
  name: {
    en: 'Standard Candles',
    uk: 'Стандартні свічки',
    pl: 'Świece standardowe',
  },
  description: {
    methodological:
      'Explain how calibrated luminosity indicators support distance estimates beyond direct parallax measurements.',
    frontend: {
      en: 'Discover how objects of known brightness can help estimate distances.',
      uk: 'Дізнайся, як об’єкти з відомою світністю допомагають оцінювати відстані.',
      pl: 'Odkryj, jak obiekty o znanej jasności absolutnej pomagają szacować odległości.',
    },
  },
});
