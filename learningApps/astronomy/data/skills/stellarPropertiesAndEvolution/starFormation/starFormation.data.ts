import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { molecularCloudCollapse_Skill_Data, protostars_Skill_Data, protostellarDisks_Skill_Data, protostellarJets_Skill_Data } from './skills';

export const starFormation_SkillGroup_Data = buildSkillGroupConfig({
  slug: "starFormation",
  id: "08051b26-3082-4414-a63f-d7efe37c70de",
  name: {
    en: "Star Formation",
  },
  skills: {
    molecularCloudCollapse: molecularCloudCollapse_Skill_Data,
    protostars: protostars_Skill_Data,
    protostellarDisks: protostellarDisks_Skill_Data,
    protostellarJets: protostellarJets_Skill_Data,
  },
  description: {
    methodological: "Star birth occurs inside interstellar gas and dust and progresses through distinct gravitational and thermal stages.",
    frontend: {
      en: "Investigate how stars begin inside large clouds of gas and dust.",
    },
  },
});
