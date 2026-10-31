import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { establishACharacterObjective_Skill_Data, expressCharacterThroughGesture_Skill_Data, maintainStagePresence_Skill_Data, performDramaticInteraction_Skill_Data, useExpressiveStageVoice_Skill_Data } from './skills';

export const acting_SkillGroup_Data = buildSkillGroupConfig({
  slug: "acting",
  id: "deb011d1-5957-44ae-8009-02fd0369c66d",
  name: {
    en: "Acting",
  },
  skills: {
    establishACharacterObjective: establishACharacterObjective_Skill_Data,
    expressCharacterThroughGesture: expressCharacterThroughGesture_Skill_Data,
    maintainStagePresence: maintainStagePresence_Skill_Data,
    performDramaticInteraction: performDramaticInteraction_Skill_Data,
    useExpressiveStageVoice: useExpressiveStageVoice_Skill_Data,
  },
  description: {
    methodological: "A character's objectives and relationships are expressed through controlled physical, vocal and responsive choices.",
    frontend: {
      en: "Use your body, voice and responses to make a character believable.",
    },
  },
});
