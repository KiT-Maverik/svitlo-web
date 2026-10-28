import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useColorScheme } from '@mui/material/styles';
import { DEFAULT_SUPPORTED_LANGUAGES } from '@svitlo/engine/localization';
import NavbarPreferences from './NavbarPreferences';
import { aria } from './NavbarPreferences.constants';
import { getNavbarPreferencesMessages } from './locales';

vi.mock('@mui/material/styles', async importOriginal => ({
  ...(await importOriginal<typeof import('@mui/material/styles')>()),
  useColorScheme: vi.fn(),
}));

describe('NavbarPreferences in shared UI Kit', () => {
  const setLocale = vi.fn();
  const setMode = vi.fn();
  const renderPreferences = (locale: 'uk-UA' | 'lt-LT' = 'uk-UA') =>
    render(<NavbarPreferences locale={locale} onLocaleChange={setLocale} />);
  const theme = () => screen.getByRole('switch', { name: aria.theme });
  const locale = () => screen.getByRole('combobox', { name: aria.locale });

  beforeEach(() => {
    vi.mocked(useColorScheme).mockReturnValue({
      mode: 'light',
      systemMode: 'light',
      setMode,
    } as unknown as ReturnType<typeof useColorScheme>);
  });
  afterEach(() => vi.clearAllMocks());

  it('exposes accessible locale and theme controls', () => {
    renderPreferences();
    expect(locale()).toBeVisible();
    expect(theme()).toBeVisible();
  });

  it('uses an app-supplied callback when a language is selected', async () => {
    renderPreferences();
    await userEvent.click(locale());
    const english = DEFAULT_SUPPORTED_LANGUAGES.find(x => x.locale === 'en-US')!;
    await userEvent.click(await screen.findByRole('option', { name: new RegExp(english.nativeName) }));
    expect(setLocale).toHaveBeenCalledWith('en-US');
  });

  it('toggles between light and dark themes', async () => {
    renderPreferences();
    await userEvent.click(theme());
    expect(setMode).toHaveBeenCalledWith('dark');
  });

  it('switches back from dark mode', async () => {
    vi.mocked(useColorScheme).mockReturnValue({
      mode: 'dark', systemMode: 'dark', setMode,
    } as unknown as ReturnType<typeof useColorScheme>);
    renderPreferences();
    expect(theme()).toBeChecked();
    await userEvent.click(theme());
    expect(setMode).toHaveBeenCalledWith('light');
  });

  it('disables theme selection until MUI mode initializes', () => {
    vi.mocked(useColorScheme).mockReturnValue({
      mode: undefined, systemMode: undefined, setMode,
    } as unknown as ReturnType<typeof useColorScheme>);
    renderPreferences();
    expect(theme()).toBeDisabled();
  });

  it('uses localized theme tooltip text', async () => {
    renderPreferences('lt-LT');
    await userEvent.hover(theme());
    expect(await screen.findByText(getNavbarPreferencesMessages('lt-LT').theme.light)).toBeVisible();
  });

  it('keeps every legacy translation and Ukrainian fallback', () => {
    for(const code of ['uk-UA','lt-LT','lv-LV','et-EE','be-tarask','ka-GE','kk-Cyrl-KZ'] as const) {
      expect(getNavbarPreferencesMessages(code).language).toBeTruthy();
      expect(getNavbarPreferencesMessages(code).theme.dark).toBeTruthy();
      expect(getNavbarPreferencesMessages(code).theme.light).toBeTruthy();
    }
    expect(getNavbarPreferencesMessages('ar-SA')).toEqual(getNavbarPreferencesMessages('uk-UA'));
  });
});
