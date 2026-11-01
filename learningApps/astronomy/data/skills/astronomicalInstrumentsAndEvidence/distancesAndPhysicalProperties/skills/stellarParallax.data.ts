import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const stellarParallax_Skill_Data = buildSkillConfig({
  slug: 'stellarParallax',
  id: '7192ef38-85e2-4ca1-9b4c-0b33d46dca00',
  name: {
    en: 'Stellar Parallax',
    uk: 'Зоряний паралакс',
    pl: 'Paralaksa gwiazdowa',
  },
  description: {
    methodological:
      'Infer distances to nearby stars from the apparent displacement caused by changing observing positions.',
    frontend: {
      en: "Use a nearby star's changing apparent position to estimate its distance.",
      uk: 'Використовуй видиму зміну положення близької зорі, щоб оцінити відстань до неї.',
      pl: 'Wykorzystaj pozorną zmianę położenia pobliskiej gwiazdy, aby oszacować jej odległość.',
    },
  },
});
