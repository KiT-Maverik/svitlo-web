import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  binaryAndMultipleStars_Skill_Data,
  brownDwarfs_Skill_Data,
  hertzsprungRussellDiagram_Skill_Data,
  stellarPopulations_Skill_Data,
  stellarSpectralTypes_Skill_Data,
  variableStars_Skill_Data,
} from './skills';

export const stellarAndSubstellarClassification_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'stellarAndSubstellarClassification',
  id: 'ffcae6bb-e8d9-4402-b3f8-7c4b3033a521',
  name: {
    en: 'Stellar and Substellar Classification',
  },
  skills: {
    binaryAndMultipleStars: binaryAndMultipleStars_Skill_Data,
    brownDwarfs: brownDwarfs_Skill_Data,
    hertzsprungRussellDiagram: hertzsprungRussellDiagram_Skill_Data,
    stellarPopulations: stellarPopulations_Skill_Data,
    stellarSpectralTypes: stellarSpectralTypes_Skill_Data,
    variableStars: variableStars_Skill_Data,
  },
  description: {
    methodological:
      'Spectra, temperature, luminosity, mass, multiplicity and composition provide complementary ways to group luminous stars and related substellar bodies, while observational class need not imply a unique evolutionary history.',
    frontend: {
      en: 'Explore different kinds of stars and related objects through spectra, mass and brightness.',
    },
  },
});
