import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const astronomicalLightCurves_Skill_Data = buildSkillConfig({
  slug: 'astronomicalLightCurves',
  id: '6a45ace0-a769-4235-85fd-948dcd7361aa',
  name: {
    en: 'Astronomical Light Curves',
  },
  description: {
    methodological:
      'Interpret changes in brightness over time as evidence for rotation, variability, eclipses or transiting objects.',
    frontend: {
      en: 'Read a brightness-over-time graph for clues to changes in a celestial object.',
    },
  },
});
