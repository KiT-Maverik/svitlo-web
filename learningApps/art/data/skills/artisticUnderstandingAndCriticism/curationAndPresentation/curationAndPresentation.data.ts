import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { analyzeDisplayContext_Skill_Data, selectWorksForAnExhibition_Skill_Data, sequenceAnExhibition_Skill_Data, writeExhibitionInterpretationText_Skill_Data } from './skills';

export const curationAndPresentation_SkillGroup_Data = buildSkillGroupConfig({
  slug: "curationAndPresentation",
  id: "17fba333-c8a4-48c7-b81a-31d7f7c3b0de",
  name: {
    en: "Curation and Presentation",
  },
  skills: {
    analyzeDisplayContext: analyzeDisplayContext_Skill_Data,
    selectWorksForAnExhibition: selectWorksForAnExhibition_Skill_Data,
    sequenceAnExhibition: sequenceAnExhibition_Skill_Data,
    writeExhibitionInterpretationText: writeExhibitionInterpretationText_Skill_Data,
  },
  description: {
    methodological: "Exhibiting work creates new relationships between artworks, their physical arrangement and audience access, independent of authoring the artworks.",
    frontend: {
      en: "Explore how selecting and displaying artworks changes the way audiences experience them.",
    },
  },
});
