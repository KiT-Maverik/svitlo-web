import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import {
  absorptionSpectralLines_Skill_Data,
  continuousSpectra_Skill_Data,
  dopplerShift_Skill_Data,
  emissionSpectralLines_Skill_Data,
  multiwavelengthObservation_Skill_Data,
} from './skills';

export const astronomicalSpectra_SkillGroup_Data = buildSkillGroupConfig({
  slug: 'astronomicalSpectra',
  id: 'bc69d108-85c7-4661-98a3-123a87e011eb',
  name: {
    en: 'Astronomical Spectra',
  },
  skills: {
    absorptionSpectralLines: absorptionSpectralLines_Skill_Data,
    continuousSpectra: continuousSpectra_Skill_Data,
    dopplerShift: dopplerShift_Skill_Data,
    emissionSpectralLines: emissionSpectralLines_Skill_Data,
    multiwavelengthObservation: multiwavelengthObservation_Skill_Data,
  },
  description: {
    methodological:
      'Light encodes information about temperature, composition and motion through its distribution across wavelength and the signatures imprinted by matter.',
    frontend: {
      en: 'Learn how splitting light into wavelengths reveals properties of distant objects.',
    },
  },
});
