import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { identifyMajorPlantOrgans_Skill_Data, relatePlantOrgansToTheirFunctions_Skill_Data } from './skills';

export const plantStructure_SkillGroup_Data = buildSkillGroupConfig({
  slug: "plantStructure",
  id: "3cc42c2d-d9ad-496b-87d3-6db367923025",
  name: {
    en: "Plant Structure",
  },
  skills: {
    identifyMajorPlantOrgans: identifyMajorPlantOrgans_Skill_Data,
    relatePlantOrgansToTheirFunctions: relatePlantOrgansToTheirFunctions_Skill_Data,
  },
  description: {
    methodological: "Plant organs perform different tasks: anchorage, absorption, transport, photosynthesis, and reproduction; their functions must be distinguished from their names.",
    frontend: {
      en: "Learn how roots, stems, leaves and reproductive parts serve different purposes.",
    },
  },
});
