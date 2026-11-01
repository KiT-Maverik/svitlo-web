import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  lunarLibration_Skill_Data,
  lunarMotion_Skill_Data,
  lunarPhases_Skill_Data,
  nearAndFarLunarHemispheres_Skill_Data,
} from './skills';

export const lunarAppearance_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'lunarAppearance',
  id: '48079b94-cef6-4aaa-9d94-80c5099520df',
  name: {
    en: 'Lunar Appearance',
  },
  skills: {
    lunarLibration: lunarLibration_Skill_Data,
    lunarMotion: lunarMotion_Skill_Data,
    lunarPhases: lunarPhases_Skill_Data,
    nearAndFarLunarHemispheres: nearAndFarLunarHemispheres_Skill_Data,
  },
  description: {
    methodological:
      "The Moon's changing appearance follows its illumination and orbital viewing geometry, not changes to its intrinsic light production.",
    frontend: {
      en: "Explore how the Moon's movement and sunlight change what we see from Earth.",
    },
  },
});
