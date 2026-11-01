import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { angularSeparation_Skill_Data, celestialSphere_Skill_Data, equatorialCoordinates_Skill_Data, horizonCoordinates_Skill_Data } from './skills';

export const skyGeometry_SkillGroup_Data = buildSkillGroupConfig({
  slug: "skyGeometry",
  id: "25ee1c2b-6a51-42f5-a148-643490c7db5c",
  name: {
    en: "Sky Geometry",
  },
  skills: {
    angularSeparation: angularSeparation_Skill_Data,
    celestialSphere: celestialSphere_Skill_Data,
    equatorialCoordinates: equatorialCoordinates_Skill_Data,
    horizonCoordinates: horizonCoordinates_Skill_Data,
  },
  description: {
    methodological: "Positions and separations in the visible sky can be communicated through directional frames and angular quantities rather than terrestrial distance alone.",
    frontend: {
      en: "Use angles and sky coordinates to describe the direction of objects seen from Earth.",
    },
  },
});
