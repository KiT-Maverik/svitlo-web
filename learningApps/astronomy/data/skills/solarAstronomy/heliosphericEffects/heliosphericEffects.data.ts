import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  auroralProcesses_Skill_Data,
  heliosphere_Skill_Data,
  solarWind_Skill_Data,
  spaceWeather_Skill_Data,
} from './skills';

export const heliosphericEffects_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'heliosphericEffects',
  id: 'f02ffa81-886b-4ba4-acd1-cfffe28487a9',
  name: {
    en: 'Heliospheric Effects',
  },
  skills: {
    auroralProcesses: auroralProcesses_Skill_Data,
    heliosphere: heliosphere_Skill_Data,
    solarWind: solarWind_Skill_Data,
    spaceWeather: spaceWeather_Skill_Data,
  },
  description: {
    methodological:
      'Solar material and magnetic fields extend outward and can influence planetary space environments even far from the solar surface.',
    frontend: {
      en: "Investigate how the Sun's particles and magnetic fields affect surrounding space.",
    },
  },
});
