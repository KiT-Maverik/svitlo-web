/** Tiny published-data fixture used by component tests; no authoring Data import. */
const uuid = (n: number) => '00000000-0000-4000-8000-' + String(n).padStart(12, '0');

export const TEST_SKILLS_DOMAIN_SLUGS = ['testColors'] as const;

export function fixtureJsonForSkillUrl(url: string): unknown | null {
  const prefix = '/data/skills/';
  if (!url.startsWith(prefix)) return null;
  const rest = url.slice(prefix.length);
  const meta = {
    testColors: { id: uuid(1), collection: 'skillDomain', groups: ['testWarmColors'] },
    'testColors/testWarmColors': { id: uuid(2), collection: 'skillGroup', skills: ['testRed'] },
    'testColors/testWarmColors/testRed': { id: uuid(3), collection: 'skill' },
  } as const;
  const entry = rest.replace(/\/(meta|uk|en)\.json$/, '');
  if (!Object.hasOwn(meta, entry)) return null;
  if (rest.endsWith('/meta.json')) return meta[entry as keyof typeof meta];
  const uk = rest.endsWith('/uk.json');
  const en = rest.endsWith('/en.json');
  if (!uk && !en) return null;
  if (entry === 'testColors') return { name: uk ? 'Кольори' : 'Colors' };
  if (entry === 'testColors/testWarmColors') return { name: uk ? 'Теплі кольори' : 'Warm colors' };
  return {
    name: uk ? 'Червоний' : 'Red',
    description: uk ? 'Розпізнавати червоний.' : 'Recognize red.',
  };
}
