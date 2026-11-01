import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { cellDivision_SkillGroup_Data } from './cellDivision/cellDivision.data';
import { cellularStructure_SkillGroup_Data } from './cellularStructure/cellularStructure.data';
import { levelsOfOrganization_SkillGroup_Data } from './levelsOfOrganization/levelsOfOrganization.data';
import { lifeProcesses_SkillGroup_Data } from './lifeProcesses/lifeProcesses.data';

export const generalAndCellBiology_SkillDomain_Data = buildSkillDomainConfig({
  slug: "generalAndCellBiology",
  id: "189cda52-8721-4261-8731-544cc613aadb",
  name: {
    en: "General and Cell Biology",
  },
  groups: {
    cellDivision: cellDivision_SkillGroup_Data,
    cellularStructure: cellularStructure_SkillGroup_Data,
    levelsOfOrganization: levelsOfOrganization_SkillGroup_Data,
    lifeProcesses: lifeProcesses_SkillGroup_Data,
  },
  description: {
    methodological: "Shared principles of cellular organism organization, from the cell to interactions among organs, as well as metabolism, growth, and responses. Specific human systems and particular taxa are addressed in their respective Domains.",
    frontend: {
      en: "Explore how cells and body structures work together to support the processes of life.",
    },
  },
});
