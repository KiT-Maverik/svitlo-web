import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { distinguishDeciduousAndEvergreenPlants_Skill_Data, distinguishGymnospermsAndAngiosperms_Skill_Data, distinguishTreesShrubsAndHerbaceousPlants_Skill_Data, recognizeBryophyteCharacteristics_Skill_Data, recognizeCommonLocalPlants_Skill_Data, recognizeFernAndFernAllyCharacteristics_Skill_Data } from './skills';

export const plantDiversity_SkillGroup_Data = buildSkillGroupConfig({
  slug: "plantDiversity",
  id: "57abdae5-4627-4d50-9edd-56bad9b9c31e",
  name: {
    en: "Plant Diversity",
  },
  skills: {
    distinguishDeciduousAndEvergreenPlants: distinguishDeciduousAndEvergreenPlants_Skill_Data,
    distinguishGymnospermsAndAngiosperms: distinguishGymnospermsAndAngiosperms_Skill_Data,
    distinguishTreesShrubsAndHerbaceousPlants: distinguishTreesShrubsAndHerbaceousPlants_Skill_Data,
    recognizeBryophyteCharacteristics: recognizeBryophyteCharacteristics_Skill_Data,
    recognizeCommonLocalPlants: recognizeCommonLocalPlants_Skill_Data,
    recognizeFernAndFernAllyCharacteristics: recognizeFernAndFernAllyCharacteristics_Skill_Data,
  },
  description: {
    methodological: "External structure, branching patterns, and seasonality provide grounds for comparing familiar species without equating growth form with biological relatedness.",
    frontend: {
      en: "Recognize the variety of plants using their distinctive features.",
    },
  },
});
