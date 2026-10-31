import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { chooseAVisualEncoding_Skill_Data, designADataGraphic_Skill_Data, designAVisualDiagram_Skill_Data, detectMisleadingGraphics_Skill_Data } from './skills';

export const informationDesign_SkillGroup_Data = buildSkillGroupConfig({
  slug: "informationDesign",
  id: "ac9a5687-40de-42d5-b08e-5a192794e116",
  name: {
    en: "Information Design",
  },
  skills: {
    chooseAVisualEncoding: chooseAVisualEncoding_Skill_Data,
    designADataGraphic: designADataGraphic_Skill_Data,
    designAVisualDiagram: designAVisualDiagram_Skill_Data,
    detectMisleadingGraphics: detectMisleadingGraphics_Skill_Data,
  },
  description: {
    methodological: "Visualization makes relationships understandable through disciplined selection of visual encodings.",
    frontend: {
      en: "Turn complex information into understandable visual relationships.",
    },
  },
});
