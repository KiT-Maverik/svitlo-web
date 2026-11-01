import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { lunarOrbitAndMonth_Skill_Data, lunarTidalEvolution_Skill_Data, oceanTides_Skill_Data } from './skills';

export const earthMoonInteractions_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'earthMoonInteractions',
  id: 'b9f1d7ef-6fe1-4117-9cad-ca18730737af',
  name: {
    en: 'Earth–Moon Interactions',
  },
  skills: {
    lunarOrbitAndMonth: lunarOrbitAndMonth_Skill_Data,
    lunarTidalEvolution: lunarTidalEvolution_Skill_Data,
    oceanTides: oceanTides_Skill_Data,
  },
  description: {
    methodological:
      'The Earth–Moon system is a long-term dynamical pair whose interactions create measurable effects on Earth and its satellite.',
    frontend: {
      en: 'Explore how the Moon and Earth influence each other through gravity.',
    },
  },
});
