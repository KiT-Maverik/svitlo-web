import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { explainMeiosis_Skill_Data, explainMitosis_Skill_Data } from './skills';

export const cellDivision_SkillGroup_Data = buildSkillGroupConfig({
  slug: "cellDivision",
  id: "6ec69d3f-f17e-4696-9cc9-e3c68f5df94c",
  name: {
    en: "Cell Division",
  },
  skills: {
    explainMeiosis: explainMeiosis_Skill_Data,
    explainMitosis: explainMitosis_Skill_Data,
  },
  description: {
    methodological: "The cell cycle involves division of genetic material and cytoplasm; mitosis supports growth and tissue renewal, while meiosis is associated with sexual reproduction and inherited variation.",
    frontend: {
      en: "Discover how cells divide to support growth, renewal and reproduction.",
    },
  },
});
