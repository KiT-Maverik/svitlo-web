import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const multiwavelengthObservation_Skill_Data = buildSkillConfig({
  slug: 'multiwavelengthObservation',
  id: '5e2bd763-fd57-423f-b7c4-f8a82e94bcc8',
  name: {
    en: 'Multiwavelength Observation',
    uk: 'Багатохвильові спостереження',
    pl: 'Obserwacje wielofalowe',
  },
  description: {
    methodological:
      'Relate observations in different electromagnetic bands to distinct physical components and processes within one object.',
    frontend: {
      en: 'Combine images and measurements from different kinds of light to understand a celestial object.',
      uk: 'Поєднуй зображення та вимірювання в різних діапазонах електромагнітного випромінювання, щоб зрозуміти небесний об’єкт.',
      pl: 'Łącz obrazy i pomiary uzyskane w różnych zakresach promieniowania elektromagnetycznego, aby lepiej poznać obiekt niebieski.',
    },
  },
});
