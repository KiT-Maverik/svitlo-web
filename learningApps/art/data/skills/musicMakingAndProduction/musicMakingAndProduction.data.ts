import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { compositionAndImprovisation_SkillGroup_Data } from './compositionAndImprovisation/compositionAndImprovisation.data';
import { instrumentAndEnsemblePerformance_SkillGroup_Data } from './instrumentAndEnsemblePerformance/instrumentAndEnsemblePerformance.data';
import { samplingAndElectronicMusic_SkillGroup_Data } from './samplingAndElectronicMusic/samplingAndElectronicMusic.data';
import { voiceAndBodyPercussion_SkillGroup_Data } from './voiceAndBodyPercussion/voiceAndBodyPercussion.data';

export const musicMakingAndProduction_SkillDomain_Data = buildSkillDomainConfig({
  slug: "musicMakingAndProduction",
  id: "5c2d14b3-68e5-4a53-9aab-f419c1cccaae",
  name: {
    en: "Music Making and Production",
  },
  groups: {
    compositionAndImprovisation: compositionAndImprovisation_SkillGroup_Data,
    instrumentAndEnsemblePerformance: instrumentAndEnsemblePerformance_SkillGroup_Data,
    samplingAndElectronicMusic: samplingAndElectronicMusic_SkillGroup_Data,
    voiceAndBodyPercussion: voiceAndBodyPercussion_SkillGroup_Data,
  },
  description: {
    methodological: "Expressive music-making includes voice, instruments, improvisation, arrangement, and manipulation of recorded sounds. The use of electronic tools does not convert a musical outcome into an Informatics Skill.",
    frontend: {
      en: "Make expressive music with your voice, instruments, improvisation and recorded sounds.",
    },
  },
});
