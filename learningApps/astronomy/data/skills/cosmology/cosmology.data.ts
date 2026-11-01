import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { cosmicComponentsAndConstraints_SkillGroup_Data } from './cosmicComponentsAndConstraints/cosmicComponentsAndConstraints.data';
import { cosmicExpansion_SkillGroup_Data } from './cosmicExpansion/cosmicExpansion.data';
import { cosmicScales_SkillGroup_Data } from './cosmicScales/cosmicScales.data';
import { cosmicStructureAndEvolution_SkillGroup_Data } from './cosmicStructureAndEvolution/cosmicStructureAndEvolution.data';
import { earlyUniverseModelsAndEvidence_SkillGroup_Data } from './earlyUniverseModelsAndEvidence/earlyUniverseModelsAndEvidence.data';

export const cosmology_SkillDomain_Data = buildSkillDomainConfig({
  slug: 'cosmology',
  id: '7952ac93-5a92-4cc1-951b-e39b38b3708d',
  name: {
    en: 'Cosmology',
  },
  groups: {
    cosmicComponentsAndConstraints: cosmicComponentsAndConstraints_SkillGroup_Data,
    cosmicExpansion: cosmicExpansion_SkillGroup_Data,
    cosmicScales: cosmicScales_SkillGroup_Data,
    cosmicStructureAndEvolution: cosmicStructureAndEvolution_SkillGroup_Data,
    earlyUniverseModelsAndEvidence: earlyUniverseModelsAndEvidence_SkillGroup_Data,
  },
  description: {
    methodological:
      "Cosmology tests models for the Universe's large-scale composition, history and expansion using observations with known horizons and uncertainties. Unresolved questions must remain distinguishable from established evidence.",
    frontend: {
      en: "Investigate the Universe's expansion, history and large-scale structure using astronomical evidence.",
    },
  },
});
