import { createElement } from 'react';
import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { StudentDashboard_fx } from './StudentDashboard.unit.fx.test';
import { WorkspaceShell_fx } from './WorkspaceShell.unit.fx.test';
import { locale } from './locales/uk-UA';

describe('Components', () => {
  describe('StudentDashboard', () => {
    it('should display calculated learning progress for the demo catalog', () => {
      StudentDashboard_fx.render();
      expect(StudentDashboard_fx.selectors.progress()).toHaveAttribute('aria-valuenow', '50');
      expect(screen.getByText(locale.student.progress(50, 2, 4))).toBeVisible();
    });

    it('should link to the next incomplete lesson section', () => {
      StudentDashboard_fx.render();
      expect(StudentDashboard_fx.selectors.continue()).toHaveAttribute('href', '/lessons/light#flashcards');
    });

    it('should display an empty state when no lessons are available', () => {
      StudentDashboard_fx.render({ lessons: [], progress: [], programs: [] });
      expect(screen.getByText(locale.student.noLessons)).toBeVisible();
    });

    it('should compose inside WorkspaceShell without rendering a duplicate dashboard', () => {
      WorkspaceShell_fx.render({ children: StudentDashboard_fx.element() });
      expect(WorkspaceShell_fx.selectors.main()).toContainElement(StudentDashboard_fx.selectors.progress());
      expect(screen.getAllByRole('progressbar')).toHaveLength(1);
    });
  });
});
