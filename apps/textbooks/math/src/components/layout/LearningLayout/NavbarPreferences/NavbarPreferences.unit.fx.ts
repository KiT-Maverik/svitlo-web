import { createElement } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavbarPreferences from './NavbarPreferences';
import { aria } from './NavbarPreferences.constants';

export const NavbarPreferences_fx = {
  render: () => render(createElement(NavbarPreferences)),
  selectors: {
    locale: () => screen.getByRole('combobox', { name: aria.locale }),
    theme: () => screen.getByRole('switch', { name: aria.theme }),
  },
  actions: {
    openLocales: async () => userEvent.click(NavbarPreferences_fx.selectors.locale()),
    toggleTheme: async () => userEvent.click(NavbarPreferences_fx.selectors.theme()),
  },
} as const;
