import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { ecosystemsAndBiodiversity_SkillGroup_Data } from './ecosystemsAndBiodiversity/ecosystemsAndBiodiversity.data';
import { feedingRelationships_SkillGroup_Data } from './feedingRelationships/feedingRelationships.data';
import { habitats_SkillGroup_Data } from './habitats/habitats.data';
import { interactionsAmongOrganisms_SkillGroup_Data } from './interactionsAmongOrganisms/interactionsAmongOrganisms.data';

export const ecology_SkillDomain_Data = buildSkillDomainConfig({
  slug: "ecology",
  id: "e425631d-499d-428d-b68f-217a8867af95",
  name: {
    en: "Ecology",
  },
  groups: {
    ecosystemsAndBiodiversity: ecosystemsAndBiodiversity_SkillGroup_Data,
    feedingRelationships: feedingRelationships_SkillGroup_Data,
    habitats: habitats_SkillGroup_Data,
    interactionsAmongOrganisms: interactionsAmongOrganisms_SkillGroup_Data,
  },
  description: {
    methodological: "Dependencies among organisms, populations, nonliving factors, and flows of matter and energy, together with the consequences of disrupted relationships. The geographical distribution of natural zones and climate processes belongs to Geography.",
    frontend: {
      en: "Explore how organisms depend on one another and on their environments.",
    },
  },
});
