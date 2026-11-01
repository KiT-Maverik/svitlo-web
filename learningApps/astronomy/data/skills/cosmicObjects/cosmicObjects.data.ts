import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { objectFamilies_SkillGroup_Data } from './objectFamilies/objectFamilies.data';
import { organizationAndMembership_SkillGroup_Data } from './organizationAndMembership/organizationAndMembership.data';

export const cosmicObjects_SkillDomain_Data = buildSkillDomainConfig({
  slug: "cosmicObjects",
  id: "0bec5a68-7348-47dd-a603-0f6172e7e058",
  name: {
    en: "Cosmic Objects",
  },
  groups: {
    objectFamilies: objectFamilies_SkillGroup_Data,
    organizationAndMembership: organizationAndMembership_SkillGroup_Data,
  },
  description: {
    methodological: "An overview of what kinds of physical objects and extended structures exist beyond Earth and how they are identified and organized. It teaches classification across cosmic scales and distinguishes an object's physical nature from its environment or apparent visual form; detailed physics belongs to the specialized planetary, stellar, galactic and cosmological domains.",
    frontend: {
      en: "Explore the different kinds of objects and structures found in the universe and how astronomers classify them.",
    },
  },
});
