import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const keplersFirstLaw_Skill_Data = buildSkillConfig({
  slug: 'keplersFirstLaw',
  id: 'cc6f72af-a96d-4e90-b569-cf1ca122e365',
  name: {
    en: "Kepler's First Law",
  },
  description: {
    methodological:
      'Apply the elliptical-orbit relation, with the central gravitating body at one focus in the idealized two-body model, to the geometry of bound orbits.',
    frontend: {
      en: 'Recognize how an ideal orbit can follow an ellipse with the central body at one focus.',
    },
  },
});
