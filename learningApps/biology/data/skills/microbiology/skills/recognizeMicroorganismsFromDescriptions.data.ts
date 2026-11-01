import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const recognizeMicroorganismsFromDescriptions_Skill_Data = buildSkillConfig({
  slug: "recognizeMicroorganismsFromDescriptions",
  id: "dd035a02-2a2b-476e-8279-ddf59114fa52",
  name: {
    en: "Recognize Microorganisms from Descriptions",
  },
  description: {
    methodological: "Distinguish microscopic scale from taxonomic membership: bacteria, unicellular eukaryotes, and other organisms may all be very small.",
    frontend: {
      en: "Recognize that many different kinds of living things can be microscopic.",
    },
  },
});
