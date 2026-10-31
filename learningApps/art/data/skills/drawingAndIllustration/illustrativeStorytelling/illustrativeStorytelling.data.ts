import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { adaptIllustrationToAnAudience_Skill_Data, designACharacterSilhouette_Skill_Data, illustrateAnAction_Skill_Data, illustrateASequence_Skill_Data, translateTextIntoImagery_Skill_Data } from './skills';

export const illustrativeStorytelling_SkillGroup_Data = buildSkillGroupConfig({
  slug: "illustrativeStorytelling",
  id: "d29ab633-0b27-49b2-887d-8a30f9c0bf0e",
  name: {
    en: "Illustrative Storytelling",
  },
  skills: {
    adaptIllustrationToAnAudience: adaptIllustrationToAnAudience_Skill_Data,
    designACharacterSilhouette: designACharacterSilhouette_Skill_Data,
    illustrateAnAction: illustrateAnAction_Skill_Data,
    illustrateASequence: illustrateASequence_Skill_Data,
    translateTextIntoImagery: translateTextIntoImagery_Skill_Data,
  },
  description: {
    methodological: "Illustration selects and organizes imagery to clarify actions, ideas and character, including sequences that extend beyond one frame.",
    frontend: {
      en: "Use pictures to communicate characters, actions and stories.",
    },
  },
});
