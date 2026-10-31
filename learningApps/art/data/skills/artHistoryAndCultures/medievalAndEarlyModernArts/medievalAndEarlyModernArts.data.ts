import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { analyzeBaroquePainting_Skill_Data, analyzeByzantineIconPainting_Skill_Data, analyzeEarlyItalianRenaissancePainting_Skill_Data, analyzeGothicCathedralSculpture_Skill_Data, analyzeNorthernRenaissancePrintmaking_Skill_Data } from './skills';

export const medievalAndEarlyModernArts_SkillGroup_Data = buildSkillGroupConfig({
  slug: "medievalAndEarlyModernArts",
  id: "ba6cbbcc-2bf5-43a7-b8f6-5103031c4799",
  name: {
    en: "Medieval and Early Modern Arts",
  },
  skills: {
    analyzeBaroquePainting: analyzeBaroquePainting_Skill_Data,
    analyzeByzantineIconPainting: analyzeByzantineIconPainting_Skill_Data,
    analyzeEarlyItalianRenaissancePainting: analyzeEarlyItalianRenaissancePainting_Skill_Data,
    analyzeGothicCathedralSculpture: analyzeGothicCathedralSculpture_Skill_Data,
    analyzeNorthernRenaissancePrintmaking: analyzeNorthernRenaissancePrintmaking_Skill_Data,
  },
  description: {
    methodological: "Comparative analysis here concerns distinct sacred, civic and courtly image practices shaped by differing patrons, techniques and concepts of representation.",
    frontend: {
      en: "Compare sacred and civic artworks in distinct medieval and early modern traditions.",
    },
  },
});
