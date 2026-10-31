import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { analyzeABuildingFacade_Skill_Data, compareArchitecturalStyles_Skill_Data, composeArchitecturalMassing_Skill_Data, interpretArchitecturalOrnament_Skill_Data } from './skills';

export const architecturalFormAndStyle_SkillGroup_Data = buildSkillGroupConfig({
  slug: "architecturalFormAndStyle",
  id: "030e3145-f301-4171-a563-fea55b0586ff",
  name: {
    en: "Architectural Form and Style",
  },
  skills: {
    analyzeABuildingFacade: analyzeABuildingFacade_Skill_Data,
    compareArchitecturalStyles: compareArchitecturalStyles_Skill_Data,
    composeArchitecturalMassing: composeArchitecturalMassing_Skill_Data,
    interpretArchitecturalOrnament: interpretArchitecturalOrnament_Skill_Data,
  },
  description: {
    methodological: "Building volumes, facade rhythms and ornament carry expressive meaning independently of engineering feasibility.",
    frontend: {
      en: "Explore how building shapes and decorative details express architectural ideas.",
    },
  },
});
