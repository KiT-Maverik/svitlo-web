import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { buildALimitedPalette_Skill_Data, constructAValueScale_Skill_Data, distinguishHueValueAndSaturation_Skill_Data, mixPigmentColors_Skill_Data, useComplementaryColors_Skill_Data } from './skills';

export const colorPractice_SkillGroup_Data = buildSkillGroupConfig({
  slug: "colorPractice",
  id: "70584fc7-6d01-478e-a5f3-0c01880567b0",
  name: {
    en: "Color Practice",
  },
  skills: {
    buildALimitedPalette: buildALimitedPalette_Skill_Data,
    constructAValueScale: constructAValueScale_Skill_Data,
    distinguishHueValueAndSaturation: distinguishHueValueAndSaturation_Skill_Data,
    mixPigmentColors: mixPigmentColors_Skill_Data,
    useComplementaryColors: useComplementaryColors_Skill_Data,
  },
  description: {
    methodological: "Choosing pigments and their relationships involves both material mixture and organized differences in perceived lightness and intensity.",
    frontend: {
      en: "Learn how lightness, intensity and mixed pigments change color relationships.",
    },
  },
});
