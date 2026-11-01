import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { astronomicalTime_SkillGroup_Data } from './astronomicalTime/astronomicalTime.data';
import { observationPractice_SkillGroup_Data } from './observationPractice/observationPractice.data';
import { skyGeometry_SkillGroup_Data } from './skyGeometry/skyGeometry.data';
import { skyPatterns_SkillGroup_Data } from './skyPatterns/skyPatterns.data';

export const observingTheSky_SkillDomain_Data = buildSkillDomainConfig({
  slug: "observingTheSky",
  id: "85a8b6db-20e6-466b-9a0c-23ec5bb54203",
  name: {
    en: "Observing the Sky",
  },
  groups: {
    astronomicalTime: astronomicalTime_SkillGroup_Data,
    observationPractice: observationPractice_SkillGroup_Data,
    skyGeometry: skyGeometry_SkillGroup_Data,
    skyPatterns: skyPatterns_SkillGroup_Data,
  },
  description: {
    methodological: "This domain addresses how celestial positions, patterns, brightness and changes are represented from an observer's location on Earth. It treats the sky as an observable system while distinguishing apparent motion from the physical causes developed in celestial mechanics.",
    frontend: {
      en: "Learn to describe where objects appear in the sky and how their positions change with time and location.",
    },
  },
});
