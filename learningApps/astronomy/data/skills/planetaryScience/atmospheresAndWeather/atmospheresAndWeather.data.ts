import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { atmosphericCirculation_Skill_Data, atmosphericRetentionAndEscape_Skill_Data, planetaryGreenhouseEffects_Skill_Data, planetaryWeather_Skill_Data } from './skills';

export const atmospheresAndWeather_SkillGroup_Data = buildSkillGroupConfig({
  slug: "atmospheresAndWeather",
  id: "b0cfe307-925b-4547-8962-1ab550f937e4",
  name: {
    en: "Atmospheres and Weather",
  },
  skills: {
    atmosphericCirculation: atmosphericCirculation_Skill_Data,
    atmosphericRetentionAndEscape: atmosphericRetentionAndEscape_Skill_Data,
    planetaryGreenhouseEffects: planetaryGreenhouseEffects_Skill_Data,
    planetaryWeather: planetaryWeather_Skill_Data,
  },
  description: {
    methodological: "Atmospheric behavior depends on composition, gravity, radiation, pressure and circulation in ways that vary widely from Earth.",
    frontend: {
      en: "Discover why different planets have very different weather and atmospheres.",
    },
  },
});
