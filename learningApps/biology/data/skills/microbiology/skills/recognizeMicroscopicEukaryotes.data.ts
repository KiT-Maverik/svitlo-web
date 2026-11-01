import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const recognizeMicroscopicEukaryotes_Skill_Data = buildSkillConfig({
  slug: "recognizeMicroscopicEukaryotes",
  id: "c3b920aa-3964-469d-8889-10111f03ec0d",
  name: {
    en: "Recognize Microscopic Eukaryotes",
  },
  description: {
    methodological: "Recognize nucleated unicellular eukaryotes, including diverse protists, algae, and yeasts; do not treat 'microorganisms' as a single biological taxon.",
    frontend: {
      en: "Recognize microscopic organisms whose cells contain nuclei.",
    },
  },
});
