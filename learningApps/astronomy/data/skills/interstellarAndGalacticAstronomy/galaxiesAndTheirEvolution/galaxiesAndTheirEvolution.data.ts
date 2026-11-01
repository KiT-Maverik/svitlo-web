import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  galaxyGroupsAndClusters_Skill_Data,
  galaxyInteractionsAndMergers_Skill_Data,
  galaxyMorphology_Skill_Data,
  galaxyStellarPopulations_Skill_Data,
} from './skills';

export const galaxiesAndTheirEvolution_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'galaxiesAndTheirEvolution',
  id: 'aa40e4d5-7025-4cbd-9f06-2cd0ef767f75',
  name: {
    en: 'Galaxies and Their Evolution',
  },
  skills: {
    galaxyGroupsAndClusters: galaxyGroupsAndClusters_Skill_Data,
    galaxyInteractionsAndMergers: galaxyInteractionsAndMergers_Skill_Data,
    galaxyMorphology: galaxyMorphology_Skill_Data,
    galaxyStellarPopulations: galaxyStellarPopulations_Skill_Data,
  },
  description: {
    methodological:
      'Galaxies differ in morphology, stellar content, formation history and interaction, rather than representing fixed shapes throughout cosmic time.',
    frontend: {
      en: 'Explore different galaxy shapes and how galaxies change over time.',
    },
  },
});
