import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { aria } from '@svitlo/ui-kit/learning-layout/constants';
import { SkillsPageShell } from './SkillsPageShell';

const theme = createTheme({ cssVariables: true, colorSchemes: { light: true, dark: true } });
const uuid = (n: number) => '00000000-0000-4000-8000-' + String(n).padStart(12, '0');
const domain = {
  id: uuid(1), slug: 'testColors', collection: 'skillDomain',
  language: 'uk', name: 'Кольори',
  groups: [{
    id: uuid(2), slug: 'testWarmColors', collection: 'skillGroup', name: 'Теплі кольори',
    skills: [{ id: uuid(3), slug: 'testRed', collection: 'skill',
      name: 'Червоний', description: 'Розпізнавати червоний.' }],
  }],
};

describe('Skills page in shared LearningLayout', () => {
  const originalFetch = globalThis.fetch;
  beforeEach(() => {
    document.documentElement.lang = 'uk';
    window.history.replaceState({}, '', '/skills');
    vi.stubGlobal('fetch', vi.fn(async (url: string) => {
      const data = url === '/Data/Skills/index.json'
        ? { version: 1, languages: ['uk'], domains: ['testColors'] }
        : url === '/Data/Skills/testColors/uk.json' ? domain : null;
      return { ok: data !== null, status: data === null ? 404 : 200, json: async () => data };
    }));
  });
  afterEach(() => {
    vi.stubGlobal('fetch', originalFetch);
    window.history.replaceState({}, '', '/');
  });

  it('opens the existing navbar settings drawer and changes page-owned Skill cards', async () => {
    render(<ThemeProvider theme={theme}><SkillsPageShell /></ThemeProvider>);
    const card = await screen.findByTestId('skill-node-testRed');
    expect(within(card).getByRole('progressbar')).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: aria.navigation.top })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Попередня|Назад/ })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: aria.actions.openSettings }));
    const sidebar = await screen.findByRole('complementary', { name: aria.navigation.settings });
    expect(within(sidebar).getByRole('region', { name: 'Налаштування сторінки Skills' })).toBeInTheDocument();
    const mapControls = within(sidebar).getByRole('region', { name: 'Керування мапою Skills' });
    expect(within(mapControls).getByRole('button', { name: 'Згорнути все' })).toBeEnabled();
    expect(within(mapControls).getByRole('button', { name: 'Розгорнути все' })).toBeEnabled();
    expect(within(mapControls).getByRole('button', { name: 'Вмістити в екран' })).toBeEnabled();
    fireEvent.click(within(sidebar).getByRole('checkbox', { name: 'Показувати володіння навичкою' }));
    expect(within(card).queryByRole('progressbar')).not.toBeInTheDocument();
    fireEvent.click(within(sidebar).getByRole('checkbox', { name: 'Показувати володіння навичкою' }));
    expect(within(card).getByRole('progressbar')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: aria.actions.closeSettingsPanel }));
    expect(screen.getByRole('button', { name: aria.actions.openSettings })).toHaveAttribute('aria-expanded', 'false');
  });
});
