import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { accretionPoweredEmission_Skill_Data, quasars_Skill_Data, relativisticJets_Skill_Data, supermassiveBlackHoles_Skill_Data } from './skills';

export const activeGalacticNuclei_SkillGroup_Data = buildSkillGroupConfig({
  slug: "activeGalacticNuclei",
  id: "227a1e3c-3dd2-43ec-b4eb-70d4a9cd14db",
  name: {
    en: "Active Galactic Nuclei",
  },
  skills: {
    accretionPoweredEmission: accretionPoweredEmission_Skill_Data,
    quasars: quasars_Skill_Data,
    relativisticJets: relativisticJets_Skill_Data,
    supermassiveBlackHoles: supermassiveBlackHoles_Skill_Data,
  },
  description: {
    methodological: "In some galaxies, accretion onto a central supermassive black hole generates radiation and outflows that differ from normal starlight.",
    frontend: {
      en: "Investigate galaxy centres where material falling toward black holes generates immense energy.",
    },
  },
});
