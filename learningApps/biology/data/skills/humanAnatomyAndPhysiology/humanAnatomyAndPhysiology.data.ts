import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { bodyStructure_SkillGroup_Data } from './bodyStructure/bodyStructure.data';
import { developmentAndProtectionOfTheOrganism_SkillGroup_Data } from './developmentAndProtectionOfTheOrganism/developmentAndProtectionOfTheOrganism.data';
import { maintainingLifeProcesses_SkillGroup_Data } from './maintainingLifeProcesses/maintainingLifeProcesses.data';
import { regulationAndHomeostasis_SkillGroup_Data } from './regulationAndHomeostasis/regulationAndHomeostasis.data';
import { sensoryOrgansAndTheNervousSystem_SkillGroup_Data } from './sensoryOrgansAndTheNervousSystem/sensoryOrgansAndTheNervousSystem.data';
import { supportAndMovement_SkillGroup_Data } from './supportAndMovement/supportAndMovement.data';

export const humanAnatomyAndPhysiology_SkillDomain_Data = buildSkillDomainConfig({
  slug: "humanAnatomyAndPhysiology",
  id: "6f1de3d1-a9bf-4f2f-a441-99ac5633bccf",
  name: {
    en: "Human Anatomy and Physiology",
  },
  groups: {
    bodyStructure: bodyStructure_SkillGroup_Data,
    developmentAndProtectionOfTheOrganism: developmentAndProtectionOfTheOrganism_SkillGroup_Data,
    maintainingLifeProcesses: maintainingLifeProcesses_SkillGroup_Data,
    regulationAndHomeostasis: regulationAndHomeostasis_SkillGroup_Data,
    sensoryOrgansAndTheNervousSystem: sensoryOrgansAndTheNervousSystem_SkillGroup_Data,
    supportAndMovement: supportAndMovement_SkillGroup_Data,
  },
  description: {
    methodological: "The structure of the body, organ functions, and interactions among systems that allow humans to move, perceive, breathe, and sustain life. Rules of hygiene, first aid, and safe behavior belong to a separate textbook.",
    frontend: {
      en: "Explore how the structures and systems of the human body work together to sustain life.",
    },
  },
});
