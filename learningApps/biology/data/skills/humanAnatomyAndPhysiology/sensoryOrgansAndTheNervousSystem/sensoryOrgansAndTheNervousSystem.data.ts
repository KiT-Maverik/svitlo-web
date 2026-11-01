import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { explainResponsesToStimuli_Skill_Data, identifyTheSkinsProtectiveFunction_Skill_Data, recognizeTheBrainsRoleInPerception_Skill_Data, relateASenseOrganToTheInformationItDetects_Skill_Data } from './skills';

export const sensoryOrgansAndTheNervousSystem_SkillGroup_Data = buildSkillGroupConfig({
  slug: "sensoryOrgansAndTheNervousSystem",
  id: "d3683f34-48a8-4b91-8453-a5be1e59d88a",
  name: {
    en: "Sensory Organs and the Nervous System",
  },
  skills: {
    explainResponsesToStimuli: explainResponsesToStimuli_Skill_Data,
    identifyTheSkinsProtectiveFunction: identifyTheSkinsProtectiveFunction_Skill_Data,
    recognizeTheBrainsRoleInPerception: recognizeTheBrainsRoleInPerception_Skill_Data,
    relateASenseOrganToTheInformationItDetects: relateASenseOrganToTheInformationItDetects_Skill_Data,
  },
  description: {
    methodological: "Receptors detect different stimuli, the nervous system processes signals, and the skin also protects the body as a physical barrier.",
    frontend: {
      en: "Discover how senses and nerves detect and respond to information.",
    },
  },
});
