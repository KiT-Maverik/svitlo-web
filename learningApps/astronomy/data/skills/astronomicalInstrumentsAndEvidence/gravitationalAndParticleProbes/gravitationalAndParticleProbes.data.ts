import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { gravitationalLensing_Skill_Data, gravitationalWaveAstronomy_Skill_Data, multimessengerEvidence_Skill_Data, neutrinoAstronomy_Skill_Data } from './skills';

export const gravitationalAndParticleProbes_SkillGroup_Data = buildSkillGroupConfig({
  slug: "gravitationalAndParticleProbes",
  id: "13ffe4cf-acb8-40f7-b43a-59b10d38eb18",
  name: {
    en: "Gravitational and Particle Probes",
  },
  skills: {
    gravitationalLensing: gravitationalLensing_Skill_Data,
    gravitationalWaveAstronomy: gravitationalWaveAstronomy_Skill_Data,
    multimessengerEvidence: multimessengerEvidence_Skill_Data,
    neutrinoAstronomy: neutrinoAstronomy_Skill_Data,
  },
  description: {
    methodological: "Gravitational lensing, gravitational waves and astrophysical particles supply information that differs from ordinary electromagnetic imaging and spectroscopy; a multimessenger inference combines distinct independent signals. Lensing is observed through light affected by gravity and is not itself a non-electromagnetic measurement.",
    frontend: {
      en: "Investigate how gravity and particles provide evidence beyond ordinary astronomical images.",
    },
  },
});
