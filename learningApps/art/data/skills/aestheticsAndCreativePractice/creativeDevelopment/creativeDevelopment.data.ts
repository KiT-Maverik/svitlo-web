import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { developAnArtisticSeries_Skill_Data, explainArtisticDecisions_Skill_Data, generateArtisticIdeas_Skill_Data, produceArtisticStudies_Skill_Data, reviseAnArtwork_Skill_Data } from './skills';

export const creativeDevelopment_SkillGroup_Data = buildSkillGroupConfig({
  slug: "creativeDevelopment",
  id: "ede2b917-513d-42a9-adb8-a22bc76dcb81",
  name: {
    en: "Creative Development",
  },
  skills: {
    developAnArtisticSeries: developAnArtisticSeries_Skill_Data,
    explainArtisticDecisions: explainArtisticDecisions_Skill_Data,
    generateArtisticIdeas: generateArtisticIdeas_Skill_Data,
    produceArtisticStudies: produceArtisticStudies_Skill_Data,
    reviseAnArtwork: reviseAnArtwork_Skill_Data,
  },
  description: {
    methodological: "Original work grows through choices, experiments and refinement, but this catalog does not impose a fixed teaching sequence.",
    frontend: {
      en: "Turn creative possibilities into artworks through experimentation and thoughtful revision.",
    },
  },
});
