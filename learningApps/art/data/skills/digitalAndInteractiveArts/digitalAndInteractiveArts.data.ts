import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { digitalImages_SkillGroup_Data } from './digitalImages/digitalImages.data';
import { digitalThreeDimensionalArt_SkillGroup_Data } from './digitalThreeDimensionalArt/digitalThreeDimensionalArt.data';
import { generativeArt_SkillGroup_Data } from './generativeArt/generativeArt.data';
import { motionGraphics_SkillGroup_Data } from './motionGraphics/motionGraphics.data';
import { participatoryArt_SkillGroup_Data } from './participatoryArt/participatoryArt.data';

export const digitalAndInteractiveArts_SkillDomain_Data = buildSkillDomainConfig({
  slug: "digitalAndInteractiveArts",
  id: "c0712651-b591-4b73-97ff-6019793ad8af",
  name: {
    en: "Digital and Interactive Arts",
  },
  groups: {
    digitalImages: digitalImages_SkillGroup_Data,
    digitalThreeDimensionalArt: digitalThreeDimensionalArt_SkillGroup_Data,
    generativeArt: generativeArt_SkillGroup_Data,
    motionGraphics: motionGraphics_SkillGroup_Data,
    participatoryArt: participatoryArt_SkillGroup_Data,
  },
  description: {
    methodological: "Digital creative techniques provide editable imagery, audience-responsive experiences and rule-generated variation. The artistic design of outcomes is distinct from computer science implementation.",
    frontend: {
      en: "Create expressive digital images, interactive experiences and art shaped by rules and variation.",
    },
  },
});
