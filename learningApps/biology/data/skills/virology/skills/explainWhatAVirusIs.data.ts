import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const explainWhatAVirusIs_Skill_Data = buildSkillConfig({
  slug: "explainWhatAVirusIs",
  id: "7ca389ef-0006-4ae3-b7c2-dbddcf7e9907",
  name: {
    en: "Explain What a Virus Is",
  },
  description: {
    methodological: "Explain that a virus is a noncellular infectious agent containing genetic material; it lacks its own protein-synthesis machinery and reproduces using a host cell.",
    frontend: {
      en: "Explain why viruses need living cells to make more viruses.",
    },
  },
});
