import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { aestheticPerception_SkillGroup_Data } from './aestheticPerception/aestheticPerception.data';
import { artisticCollaborationAndEthics_SkillGroup_Data } from './artisticCollaborationAndEthics/artisticCollaborationAndEthics.data';
import { creativeDevelopment_SkillGroup_Data } from './creativeDevelopment/creativeDevelopment.data';
import { expressionAndMeaning_SkillGroup_Data } from './expressionAndMeaning/expressionAndMeaning.data';

export const aestheticsAndCreativePractice_SkillDomain_Data = buildSkillDomainConfig({
  slug: "aestheticsAndCreativePractice",
  id: "013a7a2a-8e50-4424-9c32-32915b51cd45",
  name: {
    en: "Aesthetics and Creative Practice",
  },
  groups: {
    aestheticPerception: aestheticPerception_SkillGroup_Data,
    artisticCollaborationAndEthics: artisticCollaborationAndEthics_SkillGroup_Data,
    creativeDevelopment: creativeDevelopment_SkillGroup_Data,
    expressionAndMeaning: expressionAndMeaning_SkillGroup_Data,
  },
  description: {
    methodological: "Artistic experience, imagination, revision and ethical decisions cross individual media. This domain avoids prescribing a universal theory of beauty or one compulsory creative workflow.",
    frontend: {
      en: "Explore how art affects us, communicates meaning and grows through creative choices.",
    },
  },
});
