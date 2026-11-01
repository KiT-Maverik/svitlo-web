import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { distinguishAPartOfAnOrganismFromAWholeOrganism_Skill_Data, explainAnOrgansFunctionInAnOrganism_Skill_Data, explainTheInterdependenceOfOrgans_Skill_Data, orderTheLevelsCellTissueOrganSystem_Skill_Data } from './skills';

export const levelsOfOrganization_SkillGroup_Data = buildSkillGroupConfig({
  slug: "levelsOfOrganization",
  id: "453e1185-8dd1-439f-b8cf-34bd3c7a5e1c",
  name: {
    en: "Levels of Organization",
  },
  skills: {
    distinguishAPartOfAnOrganismFromAWholeOrganism: distinguishAPartOfAnOrganismFromAWholeOrganism_Skill_Data,
    explainAnOrgansFunctionInAnOrganism: explainAnOrgansFunctionInAnOrganism_Skill_Data,
    explainTheInterdependenceOfOrgans: explainTheInterdependenceOfOrgans_Skill_Data,
    orderTheLevelsCellTissueOrganSystem: orderTheLevelsCellTissueOrganSystem_Skill_Data,
  },
  description: {
    methodological: "Parts of cellular organisms form nested levels; the functioning of a whole depends on the coordinated work of its structures.",
    frontend: {
      en: "Explore how cells, tissues, organs and systems fit together in living organisms.",
    },
  },
});
