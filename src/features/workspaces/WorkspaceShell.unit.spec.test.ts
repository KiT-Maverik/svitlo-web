import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { WorkspaceShell_fx } from './WorkspaceShell.unit.fx.test';
import { locale } from './locales/uk-UA';

describe('Layouts', () => {
  describe('WorkspaceShell', () => {
    it('should show the supplied heading subtitle and child content', () => {
      WorkspaceShell_fx.render();
      expect(screen.getByRole('heading', { name: 'Example workspace' })).toBeVisible();
      expect(screen.getByText('Workspace description')).toBeVisible();
      expect(WorkspaceShell_fx.selectors.main()).toHaveTextContent('Workspace body');
    });

    it('should expose the localized navigation and mark the current route', () => {
      WorkspaceShell_fx.render();
      const nav = WorkspaceShell_fx.selectors.navigation();
      expect(WorkspaceShell_fx.selectors.link(locale.shell.links.student, nav)).toHaveAttribute('aria-current', 'page');
      expect(WorkspaceShell_fx.selectors.link(locale.shell.links.teacher, nav)).not.toHaveAttribute('aria-current');
    });

    it('should show a localized prototype disclaimer', () => {
      WorkspaceShell_fx.render({ current: '/teacher' });
      expect(screen.getByText(locale.shell.notice)).toBeVisible();
      expect(screen.getByText(locale.shell.demo)).toBeVisible();
      expect(WorkspaceShell_fx.selectors.link(locale.shell.links.teacher)).toHaveAttribute('aria-current', 'page');
    });
  });
});
