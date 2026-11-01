import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  angularResolution_Skill_Data,
  astronomicalDetectors_Skill_Data,
  astronomicalInterferometry_Skill_Data,
  lightGatheringAperture_Skill_Data,
  opticalTelescopeSystems_Skill_Data,
  radioAstronomy_Skill_Data,
  spaceBasedObservation_Skill_Data,
} from './skills';

export const telescopesAndDetectors_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'telescopesAndDetectors',
  id: '922c69ea-ab21-43f5-b975-21066259b7d2',
  name: {
    en: 'Telescopes and Detectors',
  },
  skills: {
    angularResolution: angularResolution_Skill_Data,
    astronomicalDetectors: astronomicalDetectors_Skill_Data,
    astronomicalInterferometry: astronomicalInterferometry_Skill_Data,
    lightGatheringAperture: lightGatheringAperture_Skill_Data,
    opticalTelescopeSystems: opticalTelescopeSystems_Skill_Data,
    radioAstronomy: radioAstronomy_Skill_Data,
    spaceBasedObservation: spaceBasedObservation_Skill_Data,
  },
  description: {
    methodological:
      'Instrumentation alters the detail, wavelengths and measurable signals available to observers; its scientific limitations are as important as its capabilities.',
    frontend: {
      en: 'Explore what telescopes and detectors can reveal and why their measurements have limits.',
    },
  },
});
