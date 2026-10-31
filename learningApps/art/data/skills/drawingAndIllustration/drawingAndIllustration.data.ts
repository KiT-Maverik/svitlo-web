import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { illustrativeStorytelling_SkillGroup_Data } from './illustrativeStorytelling/illustrativeStorytelling.data';
import { observationalDrawing_SkillGroup_Data } from './observationalDrawing/observationalDrawing.data';
import { spatialDrawing_SkillGroup_Data } from './spatialDrawing/spatialDrawing.data';

export const drawingAndIllustration_SkillDomain_Data = buildSkillDomainConfig({
  slug: "drawingAndIllustration",
  id: "c4de4e18-df2f-4eb9-9871-ef89e4318775",
  name: {
    en: "Drawing and Illustration",
  },
  groups: {
    illustrativeStorytelling: illustrativeStorytelling_SkillGroup_Data,
    observationalDrawing: observationalDrawing_SkillGroup_Data,
    spatialDrawing: spatialDrawing_SkillGroup_Data,
  },
  description: {
    methodological: "Drawing creates marks and constructed spatial relationships, whereas illustration connects a visual image to a communicative narrative or concept. Neither is limited to literal realism.",
    frontend: {
      en: "Learn how drawing can represent what we see and how illustration can tell stories or share ideas.",
    },
  },
});
