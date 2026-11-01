import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { evolutionaryChanges_SkillGroup_Data } from './evolutionaryChanges/evolutionaryChanges.data';
import { genetics_SkillGroup_Data } from './genetics/genetics.data';
import { reproductionAndTraits_SkillGroup_Data } from './reproductionAndTraits/reproductionAndTraits.data';

export const geneticsAndEvolution_SkillDomain_Data = buildSkillDomainConfig({
  slug: "geneticsAndEvolution",
  id: "4ae7ddb9-d4cc-4a6c-a102-9422b5ac6d43",
  name: {
    en: "Genetics and Evolution",
  },
  groups: {
    evolutionaryChanges: evolutionaryChanges_SkillGroup_Data,
    genetics: genetics_SkillGroup_Data,
    reproductionAndTraits: reproductionAndTraits_SkillGroup_Data,
  },
  description: {
    methodological: "Transmission of hereditary information, reasons for similarities and differences among offspring, and changes in inherited traits within populations across generations. An individual's growth is not an evolutionary process.",
    frontend: {
      en: "Explore how inherited information passes between generations and how populations evolve.",
    },
  },
});
