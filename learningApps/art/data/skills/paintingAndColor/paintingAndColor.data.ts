import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { colorPractice_SkillGroup_Data } from './colorPractice/colorPractice.data';
import { paintingTechniques_SkillGroup_Data } from './paintingTechniques/paintingTechniques.data';
import { pictorialComposition_SkillGroup_Data } from './pictorialComposition/pictorialComposition.data';

export const paintingAndColor_SkillDomain_Data = buildSkillDomainConfig({
  slug: "paintingAndColor",
  id: "37202bbb-4bc0-485d-b742-4cf7d50e8463",
  name: {
    en: "Painting and Color",
  },
  groups: {
    colorPractice: colorPractice_SkillGroup_Data,
    paintingTechniques: paintingTechniques_SkillGroup_Data,
    pictorialComposition: pictorialComposition_SkillGroup_Data,
  },
  description: {
    methodological: "Painting uses pigment and surfaces to organize color, form and expression. The material behavior of paint and pictorial composition create distinct competencies.",
    frontend: {
      en: "Explore how paints, pigments and color choices shape expressive pictures.",
    },
  },
});
