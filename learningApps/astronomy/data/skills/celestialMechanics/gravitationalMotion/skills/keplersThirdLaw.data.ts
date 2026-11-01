import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const keplersThirdLaw_Skill_Data = buildSkillConfig({
  slug: "keplersThirdLaw",
  id: "1faa4a82-40fd-4a58-b7ed-1fd6c47152a3",
  name: {
    en: "Kepler's Third Law",
  },
  description: {
    methodological: "Relate the square of orbital period to the cube of semi-major axis with the appropriate gravitational mass dependence and limitations of the two-body model.",
    frontend: {
      en: "Relate an object's orbital period to the size of its orbit and the gravitating mass.",
    },
  },
});
