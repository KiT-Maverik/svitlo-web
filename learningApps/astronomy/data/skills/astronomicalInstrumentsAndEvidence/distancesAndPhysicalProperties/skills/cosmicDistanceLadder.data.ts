import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const cosmicDistanceLadder_Skill_Data = buildSkillConfig({
  slug: 'cosmicDistanceLadder',
  id: '7eb2719c-130e-4a4d-8266-7940ef7a2a9c',
  name: {
    en: 'Cosmic Distance Ladder',
    uk: 'Космічна драбина відстаней',
    pl: 'Kosmiczna drabina odległości',
  },
  description: {
    methodological:
      'Explain why different distance indicators apply across different ranges and how calibration errors can propagate.',
    frontend: {
      en: 'See why astronomers use different methods to measure distances across the universe.',
      uk: 'Дізнайся, чому для вимірювання відстаней у Всесвіті астрономи використовують різні методи.',
      pl: 'Dowiedz się, dlaczego astronomowie stosują różne metody mierzenia odległości we Wszechświecie.',
    },
  },
});
