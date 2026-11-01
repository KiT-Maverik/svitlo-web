import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const continuousSpectra_Skill_Data = buildSkillConfig({
  slug: 'continuousSpectra',
  id: 'e5572740-41a8-4414-b212-e92fc2323dd0',
  name: {
    en: 'Continuous Spectra',
    uk: 'Неперервні спектри',
    pl: 'Widma ciągłe',
  },
  description: {
    methodological:
      'Infer broad thermal properties from the distribution of emitted light across wavelengths while recognizing idealized blackbody assumptions.',
    frontend: {
      en: "Use a continuous spectrum to explore an object's temperature and emitted light.",
      uk: 'Досліджуй температуру об’єкта та світло, яке він випромінює, за допомогою неперервного спектра.',
      pl: 'Wykorzystaj widmo ciągłe, aby badać temperaturę obiektu i emitowane przez niego światło.',
    },
  },
});
