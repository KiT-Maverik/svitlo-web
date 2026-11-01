import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const galaxyStellarPopulations_Skill_Data = buildSkillConfig({
  slug: "galaxyStellarPopulations",
  id: "a0c0bdf2-17b1-44e8-aaf0-07123264dc12",
  name: {
    en: "Galaxy Stellar Populations",
  },
  description: {
    methodological: "Infer differences in star formation and past evolution from stellar colors, spectra and age indicators.",
    frontend: {
      en: "Use a galaxy's light to infer differences in its stars and star-formation history.",
    },
  },
});
