import { buildSkillConfig } from '@svitlo/engine/taxonomy';

export const naturalSatellites_Skill_Data = buildSkillConfig({
  slug: 'naturalSatellites',
  id: 'b5dae7fe-35f4-41ad-a931-7bef62bdf808',
  name: {
    en: 'Natural Satellites',
  },
  description: {
    methodological:
      'Compare moons by origin, orbit, composition and geological activity without treating all satellites as Moon-like.',
    frontend: {
      en: 'Discover how moons differ in size, origin, composition and activity.',
    },
  },
});
