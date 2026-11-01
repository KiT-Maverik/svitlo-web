import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { activeGalacticNuclei_SkillGroup_Data } from './activeGalacticNuclei/activeGalacticNuclei.data';
import { galaxiesAndTheirEvolution_SkillGroup_Data } from './galaxiesAndTheirEvolution/galaxiesAndTheirEvolution.data';
import { interstellarMatter_SkillGroup_Data } from './interstellarMatter/interstellarMatter.data';
import { theMilkyWay_SkillGroup_Data } from './theMilkyWay/theMilkyWay.data';

export const interstellarAndGalacticAstronomy_SkillDomain_Data = buildSkillDomainConfig({
  slug: "interstellarAndGalacticAstronomy",
  id: "5d195196-4e99-4b09-85e4-b6119f97ec99",
  name: {
    en: "Interstellar and Galactic Astronomy",
  },
  groups: {
    activeGalacticNuclei: activeGalacticNuclei_SkillGroup_Data,
    galaxiesAndTheirEvolution: galaxiesAndTheirEvolution_SkillGroup_Data,
    interstellarMatter: interstellarMatter_SkillGroup_Data,
    theMilkyWay: theMilkyWay_SkillGroup_Data,
  },
  description: {
    methodological: "This domain investigates matter between stars and the structure, dynamics and transformations of galaxies. The Milky Way is one case, while distant galaxies reveal different environments and stages of evolution.",
    frontend: {
      en: "Explore the matter between stars and how galaxies form, behave and evolve.",
    },
  },
});
