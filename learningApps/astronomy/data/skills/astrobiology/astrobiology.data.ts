import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { conditionsForLife_SkillGroup_Data } from './conditionsForLife/conditionsForLife.data';
import { evidenceOfLife_SkillGroup_Data } from './evidenceOfLife/evidenceOfLife.data';
import { searchEnvironments_SkillGroup_Data } from './searchEnvironments/searchEnvironments.data';

export const astrobiology_SkillDomain_Data = buildSkillDomainConfig({
  slug: 'astrobiology',
  id: '88aa5904-3d8d-4c51-9dc0-70a01ea3f67f',
  name: {
    en: 'Astrobiology',
  },
  groups: {
    conditionsForLife: conditionsForLife_SkillGroup_Data,
    evidenceOfLife: evidenceOfLife_SkillGroup_Data,
    searchEnvironments: searchEnvironments_SkillGroup_Data,
  },
  description: {
    methodological:
      'Scientific investigation of the possibility, conditions and evidence of life beyond Earth, including chemical origins, habitability and contamination risks. The methods of spacecraft observation are classified with astronomical instrumentation and evidence rather than presented as a separate astrobiological subject.',
    frontend: {
      en: 'Explore what life beyond Earth might require and how scientists could recognize credible evidence of it.',
    },
  },
});
