import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const apparentBrightness_Skill_Data = buildSkillConfig({
  slug: "apparentBrightness",
  id: "87009192-1fa7-4c8b-8740-685be43f9477",
  name: {
    en: "Apparent Brightness",
  },
  description: {
    methodological: "Compare how bright celestial objects look from Earth without equating observed brightness with intrinsic luminosity.",
    frontend: {
      en: "Compare how bright objects look from Earth, without confusing brightness with their actual light output.",
    },
  },
});
