import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { SkillsMindMap } from './SkillsMindMap';

const uuid = (n: number) => '00000000-0000-4000-8000-' + String(n).padStart(12, '0');
const domain = (language: 'en' | 'uk') => ({
  id: uuid(1),
  slug: 'testColors',
  collection: 'skillDomain',
  language,
  name: language === 'uk' ? 'Кольори' : 'Colors',
  groups: [{
    id: uuid(2), slug: 'testWarmColors', collection: 'skillGroup',
    name: language === 'uk' ? 'Теплі кольори' : 'Warm colors',
    skills: [
      {
        id: uuid(3), slug: 'testRed', collection: 'skill',
        name: language === 'uk' ? 'Червоний' : 'Red',
        description: language === 'uk' ? 'Розпізнавати червоний.' : 'Recognize red.',
      },
    ],
  }],
});

describe('SkillsMindMap', () => {
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    document.documentElement.lang = 'uk';
    window.history.replaceState({}, '', '/skills');
    vi.stubGlobal('fetch', vi.fn(async (url: string) => {
      const data: unknown = url === '/Data/Skills/index.json'
        ? { version: 1, languages: ['uk', 'en'], domains: ['testColors'] }
        : url === '/Data/Skills/testColors/uk.json'
          ? domain('uk')
          : url === '/Data/Skills/testColors/en.json'
            ? domain('en')
            : null;
      return { ok: data !== null, status: data ? 200 : 404, json: async () => data };
    }));
  });

  afterEach(() => {
    vi.stubGlobal('fetch', originalFetch);
    window.history.replaceState({}, '', '/');
  });

  it('loads only the selected language and toggles an individual Group', async () => {
    render(<SkillsMindMap />);
    const node = await screen.findByTestId('skill-node-testWarmColors');
    expect(node).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByTestId('skill-node-testRed')).toBeVisible();

    fireEvent.click(node);
    expect(screen.queryByTestId('skill-node-testRed')).not.toBeInTheDocument();
    expect(screen.getByTestId('skill-node-testWarmColors')).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(screen.getByTestId('skill-node-testWarmColors'));
    expect(screen.getByTestId('skill-node-testRed')).toBeInTheDocument();
    expect(globalThis.fetch).toHaveBeenCalledWith(
      '/Data/Skills/testColors/uk.json', expect.objectContaining({ signal: expect.any(AbortSignal) }));
  });

  it('collapses all branches, expands them, and supports a keyboard-friendly list view', async () => {
    render(<SkillsMindMap />);
    await screen.findByTestId('skill-node-testRed');
    fireEvent.click(screen.getByRole('button', { name: 'Згорнути все' }));
    expect(screen.queryByTestId('skill-node-testRed')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Розгорнути все' }));
    expect(screen.getByTestId('skill-node-testRed')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Список' }));
    expect(screen.getByRole('region', { name: 'Навички за доменами' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Група: Теплі кольори/ })).toBeInTheDocument();
  });

  it('switches to the requested language without loading all locale files', async () => {
    render(<SkillsMindMap />);
    await screen.findByTestId('skill-node-testRed');
    fireEvent.change(screen.getByRole('combobox', { name: 'Мова даних Skills' }), { target: { value: 'en' } });
    await waitFor(() => expect(screen.getByTestId('skill-node-testRed')).toHaveTextContent('Red'));
    expect(window.location.search).toBe('?lang=en');
    expect(globalThis.fetch).toHaveBeenCalledWith(
      '/Data/Skills/testColors/en.json', expect.objectContaining({ signal: expect.any(AbortSignal) }));
  });

  it('displays a hard error for an unsupported requested language', async () => {
    window.history.replaceState({}, '', '/skills?lang=ru');
    render(<SkillsMindMap />);
    expect(await screen.findByRole('alert')).toHaveTextContent('відсутня');
    expect(globalThis.fetch).not.toHaveBeenCalledWith(
      '/Data/Skills/testColors/ru.json', expect.anything());
  });
});
