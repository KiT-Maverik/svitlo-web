import { buildSkillDomainConfig } from '@svitlo/engine/taxonomy';

import { animation_SkillGroup_Data } from './animation/animation.data';
import { filmLanguage_SkillGroup_Data } from './filmLanguage/filmLanguage.data';
import { photographicCommunication_SkillGroup_Data } from './photographicCommunication/photographicCommunication.data';
import { photographicTechnique_SkillGroup_Data } from './photographicTechnique/photographicTechnique.data';

export const photographyAndFilm_SkillDomain_Data = buildSkillDomainConfig({
  slug: "photographyAndFilm",
  id: "13d7eab9-4206-48c8-900e-044a0f39b9ea",
  name: {
    en: "Photography and Film",
  },
  groups: {
    animation: animation_SkillGroup_Data,
    filmLanguage: filmLanguage_SkillGroup_Data,
    photographicCommunication: photographicCommunication_SkillGroup_Data,
    photographicTechnique: photographicTechnique_SkillGroup_Data,
  },
  description: {
    methodological: "Camera-based arts shape views of reality through frame, light and editing; moving-image forms add duration, sound and sequential meaning.",
    frontend: {
      en: "Explore how framing, light, image sequences and sound shape photographs and films.",
    },
  },
});
