import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const investigateArtworkProvenance_Skill_Data = buildSkillConfig({
  slug: "investigateArtworkProvenance",
  id: "d0519d10-3091-415b-b00e-b1e5d91ae99a",
  name: {
    en: "Investigate Artwork Provenance",
  },
  description: {
    methodological: "Examine documented ownership or custodial history and identify meaningful gaps.",
    frontend: {
      en: "Follow an artwork's recorded ownership history and notice what is missing.",
    },
  },
});
