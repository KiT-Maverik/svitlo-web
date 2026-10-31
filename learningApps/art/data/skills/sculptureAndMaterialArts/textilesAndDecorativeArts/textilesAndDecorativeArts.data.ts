import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { createAWovenStructure_Skill_Data, createRepeatingOrnament_Skill_Data, createTextileEmbellishment_Skill_Data, designATextilePattern_Skill_Data } from './skills';

export const textilesAndDecorativeArts_SkillGroup_Data = buildSkillGroupConfig({
  slug: "textilesAndDecorativeArts",
  id: "1ebf4d14-8b7d-4282-b54b-3bb933401a63",
  name: {
    en: "Textiles and Decorative Arts",
      qm: "Tekstil ve bezek sanatları",
  },
  skills: {
    createAWovenStructure: createAWovenStructure_Skill_Data,
    createRepeatingOrnament: createRepeatingOrnament_Skill_Data,
    createTextileEmbellishment: createTextileEmbellishment_Skill_Data,
    designATextilePattern: designATextilePattern_Skill_Data,
  },
  description: {
    methodological: "Fabric structures, embellishments and motif repetition embody distinctive artistic design choices and cultural traditions.",
    frontend: {
      en: "Explore pattern, weaving and decoration through textile materials.",
          qm: "Tekstil materialları vasıtası ile naqış, toquma ve bezemeni keşf etiñiz.",
    },
  },
});
