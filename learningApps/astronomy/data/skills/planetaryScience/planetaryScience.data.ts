import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { atmospheresAndWeather_SkillGroup_Data } from './atmospheresAndWeather/atmospheresAndWeather.data';
import { interiorsAndVolatiles_SkillGroup_Data } from './interiorsAndVolatiles/interiorsAndVolatiles.data';
import { planetaryClasses_SkillGroup_Data } from './planetaryClasses/planetaryClasses.data';
import { surfacesAndGeology_SkillGroup_Data } from './surfacesAndGeology/surfacesAndGeology.data';

export const planetaryScience_SkillDomain_Data = buildSkillDomainConfig({
  slug: "planetaryScience",
  id: "adbaa859-119a-45d7-a929-9de4d468542b",
  name: {
    en: "Planetary Science",
  },
  groups: {
    atmospheresAndWeather: atmospheresAndWeather_SkillGroup_Data,
    interiorsAndVolatiles: interiorsAndVolatiles_SkillGroup_Data,
    planetaryClasses: planetaryClasses_SkillGroup_Data,
    surfacesAndGeology: surfacesAndGeology_SkillGroup_Data,
  },
  description: {
    methodological: "Planetary science compares worlds by their surfaces, interiors, atmospheres and volatile materials. It uses Earth as one comparative case, but its categories also apply to moons, dwarf planets and worlds beyond the Solar System.",
    frontend: {
      en: "Investigate what worlds are made of and how their surfaces, atmospheres and interiors work.",
    },
  },
});
