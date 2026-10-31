import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { assessCulturalAppropriation_Skill_Data, collaborateArtistically_Skill_Data, creditArtisticSources_Skill_Data, giveArtisticFeedback_Skill_Data, presentAnArtwork_Skill_Data, respectCreativeRights_Skill_Data } from './skills';

export const artisticCollaborationAndEthics_SkillGroup_Data = buildSkillGroupConfig({
  slug: "artisticCollaborationAndEthics",
  id: "d36c709b-bc41-442b-9841-b21ee379ff6d",
  name: {
    en: "Artistic Collaboration and Ethics",
  },
  skills: {
    assessCulturalAppropriation: assessCulturalAppropriation_Skill_Data,
    collaborateArtistically: collaborateArtistically_Skill_Data,
    creditArtisticSources: creditArtisticSources_Skill_Data,
    giveArtisticFeedback: giveArtisticFeedback_Skill_Data,
    presentAnArtwork: presentAnArtwork_Skill_Data,
    respectCreativeRights: respectCreativeRights_Skill_Data,
  },
  description: {
    methodological: "Making and sharing art also demands communication, credit and respect for the rights and meanings of others' creative work.",
    frontend: {
      en: "Make and share art thoughtfully while respecting collaborators, creators and communities.",
    },
  },
});
