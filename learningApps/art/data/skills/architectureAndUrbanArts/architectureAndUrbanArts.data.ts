import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { architecturalFormAndStyle_SkillGroup_Data } from './architecturalFormAndStyle/architecturalFormAndStyle.data';
import { architecturalSpace_SkillGroup_Data } from './architecturalSpace/architecturalSpace.data';
import { landscapeAndPublicArt_SkillGroup_Data } from './landscapeAndPublicArt/landscapeAndPublicArt.data';
import { urbanComposition_SkillGroup_Data } from './urbanComposition/urbanComposition.data';

export const architectureAndUrbanArts_SkillDomain_Data = buildSkillDomainConfig({
  slug: "architectureAndUrbanArts",
  id: "126f6ab5-e879-4982-abff-1729deeeb793",
  name: {
    en: "Architecture and Urban Arts",
  },
  groups: {
    architecturalFormAndStyle: architecturalFormAndStyle_SkillGroup_Data,
    architecturalSpace: architecturalSpace_SkillGroup_Data,
    landscapeAndPublicArt: landscapeAndPublicArt_SkillGroup_Data,
    urbanComposition: urbanComposition_SkillGroup_Data,
  },
  description: {
    methodological: "Buildings, streets and public spaces are experienced as artistic spatial compositions and cultural symbols. Structural mechanics, building safety and infrastructure engineering remain elsewhere.",
    frontend: {
      en: "Discover how buildings, streets and public spaces create visual and cultural experiences.",
    },
  },
});
