import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { earthMoonInteractions_SkillGroup_Data } from './earthMoonInteractions/earthMoonInteractions.data';
import { eclipsesAndAlignments_SkillGroup_Data } from './eclipsesAndAlignments/eclipsesAndAlignments.data';
import { lunarAppearance_SkillGroup_Data } from './lunarAppearance/lunarAppearance.data';
import { terrestrialSkyCycles_SkillGroup_Data } from './terrestrialSkyCycles/terrestrialSkyCycles.data';

export const earthMoonAndSun_SkillDomain_Data = buildSkillDomainConfig({
  slug: 'earthMoonAndSun',
  id: '8e12cd2c-68ad-467a-a428-f2337f072915',
  name: {
    en: 'Earth, Moon and Sun',
  },
  groups: {
    earthMoonInteractions: earthMoonInteractions_SkillGroup_Data,
    eclipsesAndAlignments: eclipsesAndAlignments_SkillGroup_Data,
    lunarAppearance: lunarAppearance_SkillGroup_Data,
    terrestrialSkyCycles: terrestrialSkyCycles_SkillGroup_Data,
  },
  description: {
    methodological:
      "Here the distinctive geometry of Earth's viewpoint, rotation and revolution produces observable cycles. The scientific emphasis is on explaining familiar sky events from physical arrangements rather than on general geography or atmospheric meteorology.",
    frontend: {
      en: 'Understand how the movements and positions of Earth, the Moon and the Sun create familiar patterns in the sky.',
    },
  },
});
