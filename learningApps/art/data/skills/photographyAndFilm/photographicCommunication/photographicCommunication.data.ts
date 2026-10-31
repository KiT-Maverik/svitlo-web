import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { createAPhotographicPortrait_Skill_Data, createAPhotographicSeries_Skill_Data, distinguishDocumentaryAndStagedPhotography_Skill_Data, editPhotographyExpressively_Skill_Data } from './skills';

export const photographicCommunication_SkillGroup_Data = buildSkillGroupConfig({
  slug: "photographicCommunication",
  id: "749b7dc0-b725-40aa-93e2-c5b189d7957d",
  name: {
    en: "Photographic Communication",
  },
  skills: {
    createAPhotographicPortrait: createAPhotographicPortrait_Skill_Data,
    createAPhotographicSeries: createAPhotographicSeries_Skill_Data,
    distinguishDocumentaryAndStagedPhotography: distinguishDocumentaryAndStagedPhotography_Skill_Data,
    editPhotographyExpressively: editPhotographyExpressively_Skill_Data,
  },
  description: {
    methodological: "A photograph may document, stage or sequence an event, making truthfulness and narrative intention distinct considerations.",
    frontend: {
      en: "Discover how photographs can document, portray or tell stories in different ways.",
    },
  },
});
