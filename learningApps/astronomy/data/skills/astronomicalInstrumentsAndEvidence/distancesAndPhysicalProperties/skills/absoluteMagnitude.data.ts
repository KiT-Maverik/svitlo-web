import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const absoluteMagnitude_Skill_Data = buildSkillConfig({
  slug: 'absoluteMagnitude',
  id: 'b1c508d6-634c-48b1-87ba-2cdf164d95ed',
  name: {
    en: 'Absolute Magnitude',
    uk: 'Абсолютна зоряна величина',
    pl: 'Wielkość absolutna',
  },
  description: {
    methodological:
      "Interpret a source's magnitude at a defined reference distance and use it to compare intrinsic brightness.",
    frontend: {
      en: "Compare objects' intrinsic brightness using the same reference distance.",
      uk: 'Порівнюй власну світність об’єктів, використовуючи однакову еталонну відстань.',
      pl: 'Porównuj rzeczywistą jasność obiektów, przyjmując tę samą odległość odniesienia.',
    },
  },
});
