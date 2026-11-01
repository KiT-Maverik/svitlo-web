import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { exoplanetCharacterization_SkillGroup_Data } from './exoplanetCharacterization/exoplanetCharacterization.data';
import { exoplanetDetection_SkillGroup_Data } from './exoplanetDetection/exoplanetDetection.data';
import { systemDiversity_SkillGroup_Data } from './systemDiversity/systemDiversity.data';

export const exoplanetarySystems_SkillDomain_Data = buildSkillDomainConfig({
  slug: "exoplanetarySystems",
  id: "9336c2a0-2350-4649-88cf-127a02eb71cf",
  name: {
    en: "Exoplanetary Systems",
  },
  groups: {
    exoplanetCharacterization: exoplanetCharacterization_SkillGroup_Data,
    exoplanetDetection: exoplanetDetection_SkillGroup_Data,
    systemDiversity: systemDiversity_SkillGroup_Data,
  },
  description: {
    methodological: "Planetary systems beyond the Sun provide evidence about the diversity of worlds and formation outcomes. Detection, physical inference and habitability are separated to avoid treating an apparent signal as proof of a specific environment.",
    frontend: {
      en: "Explore planets beyond our Solar System and what their discoveries reveal about other planetary systems.",
    },
  },
});
