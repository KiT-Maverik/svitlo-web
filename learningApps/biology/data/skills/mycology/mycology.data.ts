import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { distinguishMyceliumFromAFruitingBody_Skill_Data, explainTheRoleOfFungiInDecomposingOrganicRemains_Skill_Data, identifyTheMainPartsOfAMushroomFruitingBody_Skill_Data, recognizeFungiAsADistinctGroupOfOrganisms_Skill_Data } from './skills';

export const mycology_SkillDomain_Data = buildSkillDomainConfig({
  slug: "mycology",
  id: "ca16f74f-02dc-4953-a47b-404504fd6f68",
  name: {
    en: "Mycology",
  },
  groups: {
  },
  skills: {
    distinguishMyceliumFromAFruitingBody: distinguishMyceliumFromAFruitingBody_Skill_Data,
    explainTheRoleOfFungiInDecomposingOrganicRemains: explainTheRoleOfFungiInDecomposingOrganicRemains_Skill_Data,
    identifyTheMainPartsOfAMushroomFruitingBody: identifyTheMainPartsOfAMushroomFruitingBody_Skill_Data,
    recognizeFungiAsADistinctGroupOfOrganisms: recognizeFungiAsADistinctGroupOfOrganisms_Skill_Data,
  },
  description: {
    methodological: "Fungi as a distinct branch of cellular life: nutrition, mycelium, fruiting bodies, and the role of fungi in matter cycling. Microscopic fungi overlap with Microbiology in scale, but their structure and biological characteristics are central here.",
    frontend: {
      en: "Explore how fungi are structured, obtain nutrients and help recycle matter.",
    },
  },
});
