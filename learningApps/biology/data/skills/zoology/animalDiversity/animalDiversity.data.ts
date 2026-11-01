import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { distinguishVertebratesAndInvertebrates_Skill_Data, recognizeAmphibianCharacteristics_Skill_Data, recognizeAnnelidCharacteristics_Skill_Data, recognizeArachnidCharacteristics_Skill_Data, recognizeBirdCharacteristics_Skill_Data, recognizeCnidarianCharacteristics_Skill_Data, recognizeCommonLocalAnimals_Skill_Data, recognizeCrustaceanCharacteristics_Skill_Data, recognizeEchinodermCharacteristics_Skill_Data, recognizeFishCharacteristics_Skill_Data, recognizeFlatwormCharacteristics_Skill_Data, recognizeInsectCharacteristics_Skill_Data, recognizeMammalCharacteristics_Skill_Data, recognizeMolluscCharacteristics_Skill_Data, recognizeNematodeCharacteristics_Skill_Data, recognizeReptileCharacteristics_Skill_Data, recognizeSpongeCharacteristics_Skill_Data } from './skills';

export const animalDiversity_SkillGroup_Data = buildSkillGroupConfig({
  slug: "animalDiversity",
  id: "591a0c82-1daa-4be9-9393-1ce81a51152e",
  name: {
    en: "Animal Diversity",
  },
  skills: {
    distinguishVertebratesAndInvertebrates: distinguishVertebratesAndInvertebrates_Skill_Data,
    recognizeAmphibianCharacteristics: recognizeAmphibianCharacteristics_Skill_Data,
    recognizeAnnelidCharacteristics: recognizeAnnelidCharacteristics_Skill_Data,
    recognizeArachnidCharacteristics: recognizeArachnidCharacteristics_Skill_Data,
    recognizeBirdCharacteristics: recognizeBirdCharacteristics_Skill_Data,
    recognizeCnidarianCharacteristics: recognizeCnidarianCharacteristics_Skill_Data,
    recognizeCommonLocalAnimals: recognizeCommonLocalAnimals_Skill_Data,
    recognizeCrustaceanCharacteristics: recognizeCrustaceanCharacteristics_Skill_Data,
    recognizeEchinodermCharacteristics: recognizeEchinodermCharacteristics_Skill_Data,
    recognizeFishCharacteristics: recognizeFishCharacteristics_Skill_Data,
    recognizeFlatwormCharacteristics: recognizeFlatwormCharacteristics_Skill_Data,
    recognizeInsectCharacteristics: recognizeInsectCharacteristics_Skill_Data,
    recognizeMammalCharacteristics: recognizeMammalCharacteristics_Skill_Data,
    recognizeMolluscCharacteristics: recognizeMolluscCharacteristics_Skill_Data,
    recognizeNematodeCharacteristics: recognizeNematodeCharacteristics_Skill_Data,
    recognizeReptileCharacteristics: recognizeReptileCharacteristics_Skill_Data,
    recognizeSpongeCharacteristics: recognizeSpongeCharacteristics_Skill_Data,
  },
  description: {
    methodological: "Identifying major animal groups requires diagnostic characteristics, including skeletal structure, body coverings, limbs, and developmental patterns, rather than incidental external resemblance.",
    frontend: {
      en: "Recognize major animal groups by reliable body features rather than superficial similarities.",
    },
  },
});
