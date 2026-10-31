import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const interpretArtisticIntent_Skill_Data = buildSkillConfig({
  slug: "interpretArtisticIntent",
  id: "e03d0f70-f5f3-4137-97d1-a9b2fb6acf30",
  name: {
    en: "Interpret Artistic Intent",
  },
  description: {
    methodological: "Infer plausible aims from artistic choices, distinguishing supported observations from assumptions about the creator.",
    frontend: {
      en: "Use clues in an artwork to explore what its creator may have intended.",
    },
  },
});
