import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { analyzeBebopJazz_Skill_Data, analyzeBharatanatyam_Skill_Data, analyzeClassicalBalletTraditions_Skill_Data, analyzeHipHopDJCulture_Skill_Data, analyzeNohTheatre_Skill_Data } from './skills';

export const performingArtTraditions_SkillGroup_Data = buildSkillGroupConfig({
  slug: "performingArtTraditions",
  id: "2503890a-e64f-476c-aa0d-80f18d4e91b8",
  name: {
    en: "Performing Art Traditions",
  },
  skills: {
    analyzeBebopJazz: analyzeBebopJazz_Skill_Data,
    analyzeBharatanatyam: analyzeBharatanatyam_Skill_Data,
    analyzeClassicalBalletTraditions: analyzeClassicalBalletTraditions_Skill_Data,
    analyzeHipHopDJCulture: analyzeHipHopDJCulture_Skill_Data,
    analyzeNohTheatre: analyzeNohTheatre_Skill_Data,
  },
  description: {
    methodological: "Historical traditions in theatre, dance and music are interpreted through the characteristics and cultural roles of their performances, not by requiring a pupil to reproduce their techniques.",
    frontend: {
      en: "Explore how theatre, dance and music traditions develop within their cultural settings.",
    },
  },
});
