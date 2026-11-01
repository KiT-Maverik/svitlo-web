import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { astronomicalSpectra_SkillGroup_Data } from './astronomicalSpectra/astronomicalSpectra.data';
import { distancesAndPhysicalProperties_SkillGroup_Data } from './distancesAndPhysicalProperties/distancesAndPhysicalProperties.data';
import { evidenceAndInterpretation_SkillGroup_Data } from './evidenceAndInterpretation/evidenceAndInterpretation.data';
import { gravitationalAndParticleProbes_SkillGroup_Data } from './gravitationalAndParticleProbes/gravitationalAndParticleProbes.data';
import { spacecraftObservations_SkillGroup_Data } from './spacecraftObservations/spacecraftObservations.data';
import { telescopesAndDetectors_SkillGroup_Data } from './telescopesAndDetectors/telescopesAndDetectors.data';

export const astronomicalInstrumentsAndEvidence_SkillDomain_Data = buildSkillDomainConfig({
  slug: 'astronomicalInstrumentsAndEvidence',
  id: 'bf04eb18-9dd9-462c-8c83-7269bdc4d17d',
  name: {
    en: 'Astronomical Instruments and Evidence',
  },
  groups: {
    astronomicalSpectra: astronomicalSpectra_SkillGroup_Data,
    distancesAndPhysicalProperties: distancesAndPhysicalProperties_SkillGroup_Data,
    evidenceAndInterpretation: evidenceAndInterpretation_SkillGroup_Data,
    gravitationalAndParticleProbes: gravitationalAndParticleProbes_SkillGroup_Data,
    spacecraftObservations: spacecraftObservations_SkillGroup_Data,
    telescopesAndDetectors: telescopesAndDetectors_SkillGroup_Data,
  },
  description: {
    methodological:
      'Astronomy infers properties of remote objects from electromagnetic radiation, gravitational effects, particles and spacecraft observations. This domain covers what an observation can reveal, how instruments and methods constrain the evidence, and how competing interpretations are evaluated, not the engineering construction of observatories and spacecraft.',
    frontend: {
      en: 'Discover how astronomers gather evidence from light, gravity, particles and space missions to study distant worlds.',
    },
  },
});
