import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const dopplerShift_Skill_Data = buildSkillConfig({
  slug: 'dopplerShift',
  id: '07adc502-1c59-4109-b03d-92828c606ca3',
  name: {
    en: 'Doppler Shift',
    uk: 'Доплерівське зміщення',
    pl: 'Przesunięcie dopplerowskie',
  },
  description: {
    methodological:
      'Interpret wavelength shifts due to relative radial motion, distinguishing this local effect from cosmological expansion.',
    frontend: {
      en: 'Use shifts in wavelength to investigate motion toward or away from an observer.',
      uk: 'Використовуй зміни довжини хвилі, щоб досліджувати рух об’єкта до спостерігача або від нього.',
      pl: 'Wykorzystaj zmiany długości fali, aby badać ruch obiektu w stronę obserwatora lub od niego.',
    },
  },
});
