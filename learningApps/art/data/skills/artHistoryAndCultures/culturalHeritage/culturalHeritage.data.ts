import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { assessCulturalRepatriation_Skill_Data, distinguishConservationAndRestoration_Skill_Data, evaluateMuseumRepresentation_Skill_Data, investigateArtworkProvenance_Skill_Data } from './skills';

export const culturalHeritage_SkillGroup_Data = buildSkillGroupConfig({
  slug: "culturalHeritage",
  id: "286a3455-8dc6-4593-937c-8ccfd09c7605",
  name: {
    en: "Cultural Heritage",
  },
  skills: {
    assessCulturalRepatriation: assessCulturalRepatriation_Skill_Data,
    distinguishConservationAndRestoration: distinguishConservationAndRestoration_Skill_Data,
    evaluateMuseumRepresentation: evaluateMuseumRepresentation_Skill_Data,
    investigateArtworkProvenance: investigateArtworkProvenance_Skill_Data,
  },
  description: {
    methodological: "Art-historical stewardship requires attention to provenance, preservation and representation of communities.",
    frontend: {
      en: "Explore how the origins, care and display of cultural objects affect communities.",
    },
  },
});
