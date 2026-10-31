import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { arrangeMusicInASequencer_Skill_Data, balanceAMusicMix_Skill_Data, editAMusicalSample_Skill_Data, layerElectronicRhythms_Skill_Data, programDrumMachinePatterns_Skill_Data, recordAMusicalSample_Skill_Data } from './skills';

export const samplingAndElectronicMusic_SkillGroup_Data = buildSkillGroupConfig({
  slug: "samplingAndElectronicMusic",
  id: "da346697-938e-422f-915c-bf467ab83fda",
  name: {
    en: "Sampling and Electronic Music",
  },
  skills: {
    arrangeMusicInASequencer: arrangeMusicInASequencer_Skill_Data,
    balanceAMusicMix: balanceAMusicMix_Skill_Data,
    editAMusicalSample: editAMusicalSample_Skill_Data,
    layerElectronicRhythms: layerElectronicRhythms_Skill_Data,
    programDrumMachinePatterns: programDrumMachinePatterns_Skill_Data,
    recordAMusicalSample: recordAMusicalSample_Skill_Data,
  },
  description: {
    methodological: "Sequencers, drum machines and recorded excerpts are instruments for musical organization, not programming subjects in their own right.",
    frontend: {
      en: "Use recordings and electronic tools to create and organize musical sounds.",
    },
  },
});
