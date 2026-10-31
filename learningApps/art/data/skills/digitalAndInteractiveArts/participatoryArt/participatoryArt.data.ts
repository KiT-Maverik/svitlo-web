import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { analyzeAudienceParticipation_Skill_Data, createBranchingArtNarratives_Skill_Data, designArtisticInteraction_Skill_Data, designMultisensoryRelationships_Skill_Data } from './skills';

export const participatoryArt_SkillGroup_Data = buildSkillGroupConfig({
  slug: "participatoryArt",
  id: "7b0e75d4-1a68-4c9c-a986-1ff16320d811",
  name: {
    en: "Participatory Art",
  },
  skills: {
    analyzeAudienceParticipation: analyzeAudienceParticipation_Skill_Data,
    createBranchingArtNarratives: createBranchingArtNarratives_Skill_Data,
    designArtisticInteraction: designArtisticInteraction_Skill_Data,
    designMultisensoryRelationships: designMultisensoryRelationships_Skill_Data,
  },
  description: {
    methodological: "Interaction and visitor choices can form part of a work's artistic expression rather than merely controlling a viewer.",
    frontend: {
      en: "Explore artworks in which audience choices become part of the experience.",
    },
  },
});
