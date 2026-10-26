import { createElement } from 'react';
import { render } from '@testing-library/react';
import TopNavbar from './TopNavbar';
import type { NavbarProps } from './Navbar';
import { Navbar_fx } from './Navbar.unit.fx.test';

export const TopNavbar_fx = {
  render: (props: Partial<NavbarProps> = {}) =>
    render(createElement(TopNavbar, { 'aria-label': 'Top navigation', ...props })),
  navbar: Navbar_fx.selectors,
} as const;
