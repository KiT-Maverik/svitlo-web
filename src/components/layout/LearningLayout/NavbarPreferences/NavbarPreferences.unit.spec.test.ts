import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('@/i18n/LocaleProvider/LocaleProvider', () => ({ useLocale: vi.fn() }));
vi.mock('@mui/material/styles', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@mui/material/styles')>()),
  useColorScheme: vi.fn(),
}));
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { DEFAULT_SUPPORTED_LANGUAGES } from '@types';
import { NavbarPreferences_fx } from './NavbarPreferences.unit.fx.test';
import { NavbarPreferences_mx } from './NavbarPreferences.unit.mx.test';
import { aria } from './NavbarPreferences.constants';

describe('Layouts', () => {
  describe('LearningLayout', () => {
    describe('NavbarPreferences', () => {
      beforeEach(() => NavbarPreferences_mx.prepare());
      afterEach(() => NavbarPreferences_mx.reset());

      it('should expose the locale chooser and theme switch by their accessible names', () => {
        NavbarPreferences_fx.render();
        expect(NavbarPreferences_fx.selectors.locale()).toBeVisible();
        expect(NavbarPreferences_fx.selectors.theme()).toHaveAccessibleName(aria.theme);
      });

      it('should apply a selected locale through the localization context', async () => {
        const { setLocale } = NavbarPreferences_mx.prepare();
        NavbarPreferences_fx.render();
        await NavbarPreferences_fx.actions.openLocales();
        const english = DEFAULT_SUPPORTED_LANGUAGES.find(x => x.locale === 'en-US')!;
        await userEvent.click(await screen.findByRole('option', { name: new RegExp(english.nativeName) }));
        expect(setLocale).toHaveBeenCalledWith('en-US');
      });

      it('should switch from light to dark mode', async () => {
        const { setMode } = NavbarPreferences_mx.prepare({ mode: 'light' });
        NavbarPreferences_fx.render();
        expect(NavbarPreferences_fx.selectors.theme()).not.toBeChecked();
        await NavbarPreferences_fx.actions.toggleTheme();
        expect(setMode).toHaveBeenCalledWith('dark');
      });

      it('should switch back to light mode from dark mode', async () => {
        const { setMode } = NavbarPreferences_mx.prepare({ mode: 'dark' });
        NavbarPreferences_fx.render();
        expect(NavbarPreferences_fx.selectors.theme()).toBeChecked();
        await NavbarPreferences_fx.actions.toggleTheme();
        expect(setMode).toHaveBeenCalledWith('light');
      });

      it('should disable the theme switch while color scheme initialization is pending', () => {
        NavbarPreferences_mx.prepare({ mode: undefined });
        NavbarPreferences_fx.render();
        expect(NavbarPreferences_fx.selectors.theme()).toBeDisabled();
      });
    });
  });
});
