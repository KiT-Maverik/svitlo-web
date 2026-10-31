import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { classifyArtisticGenres_Skill_Data, distinguishArtisticMedia_Skill_Data, distinguishRepresentationAndAbstraction_Skill_Data, interpretArtisticIntent_Skill_Data } from './skills';

export const formsAndPurposes_SkillGroup_Data = buildSkillGroupConfig({
  slug: "formsAndPurposes",
  id: "191a73e7-f79d-4b5f-96d5-9b2ce38f28e7",
  name: {
    en: "Forms and Purposes",
  },
  skills: {
    classifyArtisticGenres: classifyArtisticGenres_Skill_Data,
    distinguishArtisticMedia: distinguishArtisticMedia_Skill_Data,
    distinguishRepresentationAndAbstraction: distinguishRepresentationAndAbstraction_Skill_Data,
    interpretArtisticIntent: interpretArtisticIntent_Skill_Data,
  },
  description: {
    methodological: "Art can represent, express, question, commemorate or invite participation; genre labels and purposes are useful but not universal classifications.",
    frontend: {
      en: "Explore the many ways art can communicate ideas, feelings and experiences.",
    },
  },
});
