import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { analyzePerceptualAmbiguity_Skill_Data, compareAestheticCriteria_Skill_Data, describeAnAestheticExperience_Skill_Data, distinguishBeautyAndArtisticValue_Skill_Data, relateContrastToAttention_Skill_Data } from './skills';

export const aestheticPerception_SkillGroup_Data = buildSkillGroupConfig({
  slug: "aestheticPerception",
  id: "7b4b3464-c383-4a38-b5a3-80942fa21937",
  name: {
    en: "Aesthetic Perception",
  },
  skills: {
    analyzePerceptualAmbiguity: analyzePerceptualAmbiguity_Skill_Data,
    compareAestheticCriteria: compareAestheticCriteria_Skill_Data,
    describeAnAestheticExperience: describeAnAestheticExperience_Skill_Data,
    distinguishBeautyAndArtisticValue: distinguishBeautyAndArtisticValue_Skill_Data,
    relateContrastToAttention: relateContrastToAttention_Skill_Data,
  },
  description: {
    methodological: "Responses to art involve attentive perception, prior expectations and variable values without establishing universal audience reactions.",
    frontend: {
      en: "Notice how different experiences and expectations shape our responses to art.",
    },
  },
});
