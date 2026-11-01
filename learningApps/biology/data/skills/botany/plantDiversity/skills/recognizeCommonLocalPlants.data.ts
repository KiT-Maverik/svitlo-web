import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const recognizeCommonLocalPlants_Skill_Data = buildSkillConfig({
  slug: "recognizeCommonLocalPlants",
  id: "c62f418f-749b-44d3-9afc-a20eba15217f",
  name: {
    en: "Recognize Common Local Plants",
  },
  description: {
    methodological: "Identify familiar local species by characteristic combinations of leaves, stems, flowers, or fruits, rather than color alone.",
    frontend: {
      en: "Identify familiar local plants using combinations of leaves, stems and other features.",
    },
  },
});
