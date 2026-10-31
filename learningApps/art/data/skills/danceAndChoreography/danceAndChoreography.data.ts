import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { choreography_SkillGroup_Data } from './choreography/choreography.data';
import { movementLanguage_SkillGroup_Data } from './movementLanguage/movementLanguage.data';
import { traditionsAndInterpretation_SkillGroup_Data } from './traditionsAndInterpretation/traditionsAndInterpretation.data';

export const danceAndChoreography_SkillDomain_Data = buildSkillDomainConfig({
  slug: "danceAndChoreography",
  id: "75ed10ea-1788-4f9c-8d96-b2db3ad59e67",
  name: {
    en: "Dance and Choreography",
  },
  groups: {
    choreography: choreography_SkillGroup_Data,
    movementLanguage: movementLanguage_SkillGroup_Data,
    traditionsAndInterpretation: traditionsAndInterpretation_SkillGroup_Data,
  },
  description: {
    methodological: "Dance organizes bodily movement as expressive and culturally situated form. Its aim is choreographic communication rather than athletic conditioning.",
    frontend: {
      en: "Explore how expressive movement, movement patterns and cultural traditions create dance.",
    },
  },
});
