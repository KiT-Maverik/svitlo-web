import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { curationAndPresentation_SkillGroup_Data } from './curationAndPresentation/curationAndPresentation.data';
import { formalLanguage_SkillGroup_Data } from './formalLanguage/formalLanguage.data';
import { formsAndPurposes_SkillGroup_Data } from './formsAndPurposes/formsAndPurposes.data';
import { interpretationAndEvaluation_SkillGroup_Data } from './interpretationAndEvaluation/interpretationAndEvaluation.data';

export const artisticUnderstandingAndCriticism_SkillDomain_Data = buildSkillDomainConfig({
  slug: "artisticUnderstandingAndCriticism",
  id: "60ca5a77-0ef4-4397-a1b0-619852fbea02",
  name: {
    en: "Artistic Understanding and Criticism",
  },
  groups: {
    curationAndPresentation: curationAndPresentation_SkillGroup_Data,
    formalLanguage: formalLanguage_SkillGroup_Data,
    formsAndPurposes: formsAndPurposes_SkillGroup_Data,
    interpretationAndEvaluation: interpretationAndEvaluation_SkillGroup_Data,
  },
  description: {
    methodological: "Interpretation of artistic work depends on the medium, formal relationships, intentions and cultural contexts. This field supports attentive analysis of existing artworks rather than instruction in a particular material technique.",
    frontend: {
      en: "Discover how artistic choices and cultural context help us understand and discuss artworks.",
    },
  },
});
