import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const absorptionSpectralLines_Skill_Data = buildSkillConfig({
  slug: 'absorptionSpectralLines',
  id: 'ef2d4c77-f2f2-4837-8c58-cab4b2bab70d',
  name: {
    en: 'Absorption Spectral Lines',
    uk: 'Спектральні лінії поглинання',
    pl: 'Linie absorpcyjne w widmie',
  },
  description: {
    methodological:
      'Interpret dark spectral features produced by matter absorbing characteristic wavelengths from background radiation.',
    frontend: {
      en: 'Recognize dark spectral lines as clues to material absorbing light.',
      uk: 'Навчися розпізнавати темні спектральні лінії як ознаки того, що речовина поглинає світло.',
      pl: 'Naucz się rozpoznawać ciemne linie widmowe jako ślady pochłaniania światła przez materię.',
    },
  },
});
