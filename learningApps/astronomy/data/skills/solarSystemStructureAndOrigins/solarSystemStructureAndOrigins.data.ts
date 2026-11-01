import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { formationAndChronology_SkillGroup_Data } from './formationAndChronology/formationAndChronology.data';
import { minorBodies_SkillGroup_Data } from './minorBodies/minorBodies.data';
import { systemArchitecture_SkillGroup_Data } from './systemArchitecture/systemArchitecture.data';

export const solarSystemStructureAndOrigins_SkillDomain_Data = buildSkillDomainConfig({
  slug: "solarSystemStructureAndOrigins",
  id: "93dfe9fe-c278-4574-9de3-86f7abc26a15",
  name: {
    en: "Solar System Structure and Origins",
  },
  groups: {
    formationAndChronology: formationAndChronology_SkillGroup_Data,
    minorBodies: minorBodies_SkillGroup_Data,
    systemArchitecture: systemArchitecture_SkillGroup_Data,
  },
  description: {
    methodological: "The Solar System is classified by its orbital organization and by evidence of formation from a common disk. Individual worlds are examined in planetary science, while the Sun's internal structure and activity belong to solar astronomy.",
    frontend: {
      en: "Explore the arrangement of the Solar System and the evidence for how it formed.",
    },
  },
});
