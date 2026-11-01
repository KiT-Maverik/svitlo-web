import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const stellarLuminosity_Skill_Data = buildSkillConfig({
  slug: "stellarLuminosity",
  id: "afe345ad-55d9-4190-a904-4e702d16176f",
  name: {
    en: "Stellar Luminosity",
  },
  description: {
    methodological: "Distinguish total emitted power from the light received by an observer and infer luminosity from suitable measurements.",
    frontend: {
      en: "Distinguish how much energy a star emits from how bright it looks from Earth.",
    },
  },
});
