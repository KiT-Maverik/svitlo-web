import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const emissionSpectralLines_Skill_Data = buildSkillConfig({
  slug: 'emissionSpectralLines',
  id: 'b7e6fe95-cc11-4e73-902b-270d21adc38b',
  name: {
    en: 'Emission Spectral Lines',
    uk: 'Спектральні лінії випромінювання',
    pl: 'Linie emisyjne w widmie',
  },
  description: {
    methodological: 'Interpret discrete bright features produced by matter radiating at characteristic wavelengths.',
    frontend: {
      en: 'Recognize bright spectral lines as clues to the material producing light.',
      uk: 'Навчися розпізнавати яскраві спектральні лінії як ознаки речовини, що випромінює світло.',
      pl: 'Naucz się rozpoznawać jasne linie widmowe jako wskazówki dotyczące materii emitującej światło.',
    },
  },
});
