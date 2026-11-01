import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { starFormation_SkillGroup_Data } from './starFormation/starFormation.data';
import { stellarAndSubstellarClassification_SkillGroup_Data } from './stellarAndSubstellarClassification/stellarAndSubstellarClassification.data';
import { stellarEvolution_SkillGroup_Data } from './stellarEvolution/stellarEvolution.data';
import { stellarProperties_SkillGroup_Data } from './stellarProperties/stellarProperties.data';
import { stellarRemnants_SkillGroup_Data } from './stellarRemnants/stellarRemnants.data';

export const stellarPropertiesAndEvolution_SkillDomain_Data = buildSkillDomainConfig({
  slug: 'stellarPropertiesAndEvolution',
  id: 'b5b29d0f-019c-4a66-a881-86c988eac956',
  name: {
    en: 'Stellar Properties and Evolution',
  },
  groups: {
    starFormation: starFormation_SkillGroup_Data,
    stellarAndSubstellarClassification: stellarAndSubstellarClassification_SkillGroup_Data,
    stellarEvolution: stellarEvolution_SkillGroup_Data,
    stellarProperties: stellarProperties_SkillGroup_Data,
    stellarRemnants: stellarRemnants_SkillGroup_Data,
  },
  description: {
    methodological:
      'Stars are understood through measurements of their physical properties and models of formation, fusion, change and eventual remnants. The same competencies apply to the Sun where its properties form a useful comparison.',
    frontend: {
      en: 'Explore what stars are like, how they form and how their lives eventually change.',
    },
  },
});
