import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const stellarTemperature_Skill_Data = buildSkillConfig({
  slug: "stellarTemperature",
  id: "37f8113a-03ef-4ad7-ade7-dac0d05a1418",
  name: {
    en: "Stellar Temperature",
  },
  description: {
    methodological: "Explain how stellar spectra and emitted energy distributions constrain effective temperature.",
    frontend: {
      en: "Use the colors and patterns in starlight to investigate temperature.",
    },
  },
});
