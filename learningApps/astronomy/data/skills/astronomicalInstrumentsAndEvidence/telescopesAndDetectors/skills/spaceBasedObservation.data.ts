import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const spaceBasedObservation_Skill_Data = buildSkillConfig({
  slug: 'spaceBasedObservation',
  id: '349f7060-de38-4c5c-9119-5de44e41935c',
  name: {
    en: 'Space-Based Observation',
  },
  description: {
    methodological:
      "Compare observations above and below Earth's atmosphere in terms of accessible wavelengths and atmospheric interference.",
    frontend: {
      en: "Compare observations from space with those made through Earth's atmosphere.",
    },
  },
});
