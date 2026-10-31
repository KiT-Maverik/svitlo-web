import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { createFoundObjectAssemblage_Skill_Data, decorateACeramicSurface_Skill_Data, handBuildACeramicForm_Skill_Data, joinClayComponents_Skill_Data } from './skills';

export const ceramicsAndAssemblage_SkillGroup_Data = buildSkillGroupConfig({
  slug: "ceramicsAndAssemblage",
  id: "c8f3c426-c0a1-49c3-b68c-e7253f6c7466",
  name: {
    en: "Ceramics and Assemblage",
  },
  skills: {
    createFoundObjectAssemblage: createFoundObjectAssemblage_Skill_Data,
    decorateACeramicSurface: decorateACeramicSurface_Skill_Data,
    handBuildACeramicForm: handBuildACeramicForm_Skill_Data,
    joinClayComponents: joinClayComponents_Skill_Data,
  },
  description: {
    methodological: "Clay manipulation and found-object combination produce expressive material choices not reducible to sculptural mass alone.",
    frontend: {
      en: "Explore how clay and everyday objects can become expressive artworks.",
    },
  },
});
