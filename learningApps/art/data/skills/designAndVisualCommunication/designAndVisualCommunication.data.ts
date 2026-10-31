import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { appliedGraphics_SkillGroup_Data } from './appliedGraphics/appliedGraphics.data';
import { fashionAndApparelDesign_SkillGroup_Data } from './fashionAndApparelDesign/fashionAndApparelDesign.data';
import { graphicIdentity_SkillGroup_Data } from './graphicIdentity/graphicIdentity.data';
import { informationDesign_SkillGroup_Data } from './informationDesign/informationDesign.data';
import { typographyAndLayout_SkillGroup_Data } from './typographyAndLayout/typographyAndLayout.data';

export const designAndVisualCommunication_SkillDomain_Data = buildSkillDomainConfig({
  slug: "designAndVisualCommunication",
  id: "4d75cc7a-a277-4464-b364-40a6f2b96e25",
  name: {
    en: "Design and Visual Communication",
  },
  groups: {
    appliedGraphics: appliedGraphics_SkillGroup_Data,
    fashionAndApparelDesign: fashionAndApparelDesign_SkillGroup_Data,
    graphicIdentity: graphicIdentity_SkillGroup_Data,
    informationDesign: informationDesign_SkillGroup_Data,
    typographyAndLayout: typographyAndLayout_SkillGroup_Data,
  },
  description: {
    methodological: "Design communicates through typography, symbols, layout, applied graphics and wearable forms. In clothing, artistic choices also concern silhouette, fabric behavior and the body; industrial manufacturing and commercial strategy remain outside this domain.",
    frontend: {
      en: "Use shapes, words, images and materials to communicate ideas through design.",
    },
  },
});
