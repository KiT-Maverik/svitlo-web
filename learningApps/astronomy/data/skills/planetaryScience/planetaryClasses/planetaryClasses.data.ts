import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  giantPlanets_Skill_Data,
  naturalSatellites_Skill_Data,
  planetaryDensityAndComposition_Skill_Data,
  planetaryRingSystems_Skill_Data,
  terrestrialPlanets_Skill_Data,
} from './skills';

export const planetaryClasses_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'planetaryClasses',
  id: 'ccef5030-d741-4f0d-904e-40f8aa8ce696',
  name: {
    en: 'Planetary Classes',
  },
  skills: {
    giantPlanets: giantPlanets_Skill_Data,
    naturalSatellites: naturalSatellites_Skill_Data,
    planetaryDensityAndComposition: planetaryDensityAndComposition_Skill_Data,
    planetaryRingSystems: planetaryRingSystems_Skill_Data,
    terrestrialPlanets: terrestrialPlanets_Skill_Data,
  },
  description: {
    methodological:
      'Composition, density and thermal history help explain why planets and moons display very different structures rather than simply different sizes.',
    frontend: {
      en: 'Compare rocky worlds, giant planets, moons and other planetary bodies.',
    },
  },
});
