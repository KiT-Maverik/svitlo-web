import { buildSkillGroupConfig } from '@svitlo/engine/taxonomy';

import { createDigitalCollage_Skill_Data, createRasterArt_Skill_Data, createVectorArt_Skill_Data, useDigitalMasks_Skill_Data } from './skills';

export const digitalImages_SkillGroup_Data = buildSkillGroupConfig({
  slug: "digitalImages",
  id: "a8166fd3-1aab-4794-a7cc-606ce922ce96",
  name: {
    en: "Digital Images",
  },
  skills: {
    createDigitalCollage: createDigitalCollage_Skill_Data,
    createRasterArt: createRasterArt_Skill_Data,
    createVectorArt: createVectorArt_Skill_Data,
    useDigitalMasks: useDigitalMasks_Skill_Data,
  },
  description: {
    methodological: "Pixel and path-based media allow complementary approaches to composition and selective revision.",
    frontend: {
      en: "Make digital pictures using pixels, shapes, layers and selective changes.",
    },
  },
});
