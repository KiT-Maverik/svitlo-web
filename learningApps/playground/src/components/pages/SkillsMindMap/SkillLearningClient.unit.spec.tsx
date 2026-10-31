import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { SkillLearningClient } from './SkillLearningClient';

const uuid = (n: number) => '00000000-0000-4000-8000-' + String(n).padStart(12, '0');
const fixture = {
  id: uuid(1), slug: 'testColors', collection: 'skillDomain',
  name: 'Кольори', language: 'uk',
  groups: [{
    id: uuid(2), slug: 'testWarmColors', collection: 'skillGroup',
    name: 'Теплі кольори',
    skills: [{ id: uuid(3), slug: 'testRed', collection: 'skill', name: 'Червоний',
      description: 'Розпізнавати червоний.' }],
  }],
};

describe('Skill learning destination', () => {
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    document.documentElement.lang = 'uk';
    window.history.replaceState({}, '', '/skills/' + uuid(3) + '/learn?lang=uk');
    vi.stubGlobal('fetch', vi.fn(async (url: string) => {
      const data = url === '/Data/Skills/index.json'
        ? { version: 1, languages: ['uk'], domains: ['testColors'] }
        : url === '/Data/Skills/testColors/uk.json'
          ? fixture : null;
      return { ok: data !== null, status: data === null ? 404 : 200, json: async () => data };
    }));
  });

  afterEach(() => {
    vi.stubGlobal('fetch', originalFetch);
    window.history.replaceState({}, '', '/');
  });

  it('loads one locale, selects the UUID and does not invent linked content', async () => {
    render(<SkillLearningClient skillId={uuid(3)} />);
    expect(await screen.findByRole('heading', { name: 'Червоний' })).toBeInTheDocument();
    expect(screen.getByText('Розпізнавати червоний.')).toBeInTheDocument();
    expect(screen.getByRole('progressbar', { name: /Демонстраційний рівень/ })).toHaveAttribute('aria-valuenow');
    expect(screen.getByText(/немає пов'язаних матеріалів/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Повернутися до карти Skills/ }))
      .toHaveAttribute('href', '/skills?lang=uk');
    expect(globalThis.fetch).toHaveBeenCalledWith(
      '/Data/Skills/testColors/uk.json', expect.objectContaining({ signal: expect.any(AbortSignal) }));
  });

  it('reports an unknown skill rather than substituting a different lesson', async () => {
    render(<SkillLearningClient skillId={uuid(99)} />);
    const alert = await screen.findByRole('alert');
    expect(alert).toHaveTextContent('не знайдено');
    expect(within(alert).getByRole('link', { name: /Повернутися/ }))
      .toHaveAttribute('href', '/skills');
  });
});
