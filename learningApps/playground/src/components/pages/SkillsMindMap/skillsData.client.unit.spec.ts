import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fixtureJsonForSkillUrl, TEST_SKILLS_DOMAIN_SLUGS } from './skillsData.fixture';
import { loadPublishedSkills, resolveSkillLanguage } from './skillsData.client';

const uuid = (n: number) => '00000000-0000-4000-8000-' + String(n).padStart(12, '0');

describe('Skills published data transport', () => {
  const originalFetch = globalThis.fetch;
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn(async (url: string) => {
      const json = fixtureJsonForSkillUrl(url);
      return { ok: json !== null, status: json === null ? 404 : 200,
        json: async () => json };
    }));
  });
  afterEach(() => vi.stubGlobal('fetch', originalFetch));

  it('resolves real supported language codes from locale identifiers, including Belarusian', () => {
    expect(resolveSkillLanguage('uk-UA')).toBe('uk');
    expect(resolveSkillLanguage('be-tarask')).toBe('be');
    expect(resolveSkillLanguage('en')).toBe('en');
    expect(() => resolveSkillLanguage('ru')).toThrow(/Непідтримувана/);
  });

  it('loads one locale and one immutable meta per entity without an index.json', async () => {
    const data = await loadPublishedSkills(TEST_SKILLS_DOMAIN_SLUGS, 'uk', new AbortController().signal);
    expect(data).toHaveLength(1);
    expect(data[0].id).toBe(uuid(1));
    expect(data[0].children[0].children[0]).toMatchObject({
      id: uuid(3), slug: 'testRed', name: 'Червоний', description: 'Розпізнавати червоний.',
    });
    const urls = vi.mocked(globalThis.fetch).mock.calls.map(([url]) => String(url));
    expect(urls).toHaveLength(6);
    expect(urls).toContain('/data/skills/testColors/meta.json');
    expect(urls).toContain('/data/skills/testColors/testWarmColors/testRed/uk.json');
    expect(urls.every(url => url.endsWith('/meta.json') || url.endsWith('/uk.json'))).toBe(true);
    expect(urls.some(url => url.includes('index.json'))).toBe(false);
  });

  it('loads another locale without downloading unrelated language files', async () => {
    const domains = await loadPublishedSkills(TEST_SKILLS_DOMAIN_SLUGS, 'en', new AbortController().signal);
    expect(domains[0].children[0].children[0].name).toBe('Red');
    const urls = vi.mocked(globalThis.fetch).mock.calls.map(([url]) => String(url));
    expect(urls.filter(url => url.endsWith('/uk.json'))).toHaveLength(0);
  });

  it('rejects broken metadata links, duplicate domains and unavailable locale data', async () => {
    await expect(loadPublishedSkills(['testColors', 'testColors'], 'uk', new AbortController().signal))
      .rejects.toThrow(/доменів/);
    await expect(loadPublishedSkills(TEST_SKILLS_DOMAIN_SLUGS, 'ru', new AbortController().signal))
      .rejects.toThrow(/Непідтримувана/);
    vi.stubGlobal('fetch', vi.fn(async (url: string) => {
      const json = url.endsWith('/testRed/meta.json')
        ? { id: uuid(3), collection: 'skillGroup', skills: ['broken'] }
        : fixtureJsonForSkillUrl(url);
      return { ok: json !== null, status: json === null ? 404 : 200, json: async () => json };
    }));
    await expect(loadPublishedSkills(TEST_SKILLS_DOMAIN_SLUGS, 'uk', new AbortController().signal))
      .rejects.toThrow(/Collection/);
  });
});
