import { afterEach, describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { TeacherDashboard_fx } from './TeacherDashboard.unit.fx';
import { TeacherDashboard_mx } from './TeacherDashboard.unit.mx';
import { lessons } from './catalog';
import { locale } from './locales/uk-UA';
import { validateProgram } from './selectors';

describe('Components', () => {
  describe('TeacherDashboard', () => {
    afterEach(() => TeacherDashboard_mx.reset());

    it('should expose the localized program builder with an empty initial selection', () => {
      TeacherDashboard_fx.render({ programs: [] });
      expect(TeacherDashboard_fx.selectors.builder()).toBeVisible();
      expect(TeacherDashboard_fx.selectors.title()).toHaveValue('');
      expect(screen.getByText(locale.teacher.selectLessons)).toBeVisible();
    });

    it('should filter available lessons as the search query changes', async () => {
      TeacherDashboard_fx.render();
      await import('@testing-library/user-event').then(({ default: userEvent }) => userEvent.type(TeacherDashboard_fx.selectors.search(), 'not-matching'));
      expect(screen.getByText(locale.teacher.noResults)).toBeVisible();
    });

    it('should display validation feedback when submitting an empty program', async () => {
      TeacherDashboard_fx.render();
      await TeacherDashboard_fx.actions.submit();
      expect(TeacherDashboard_fx.selectors.notice()).toHaveTextContent(validateProgram({ title: '', lessonIds: [] }, lessons) ?? '');
    });

    it('should pass the selected lesson IDs and trimmed title to the repository', async () => {
      const spy = TeacherDashboard_mx.save();
      TeacherDashboard_fx.render({ programs: [] });
      await TeacherDashboard_fx.actions.title('My course');
      await TeacherDashboard_fx.actions.select();
      await TeacherDashboard_fx.actions.submit();
      expect(spy).toHaveBeenCalledWith({ title: 'My course', lessonIds: [lessons[0].id] });
      expect(await screen.findByText('Draft prepared')).toBeVisible();
    });

    it('should report repository failures while keeping the draft editable', async () => {
      TeacherDashboard_mx.reject();
      TeacherDashboard_fx.render({ programs: [] });
      await TeacherDashboard_fx.actions.title('My course');
      await TeacherDashboard_fx.actions.select();
      await TeacherDashboard_fx.actions.submit();
      expect(await screen.findByText(locale.teacher.saveFailed)).toBeVisible();
      expect(TeacherDashboard_fx.selectors.title()).toHaveValue('My course');
    });

    it('should load the selected example program into the draft', async () => {
      TeacherDashboard_fx.render();
      await import('@testing-library/user-event').then(({ default: userEvent }) => userEvent.click(screen.getByRole('button', { name: locale.teacher.openDraft })));
      expect(TeacherDashboard_fx.selectors.title()).toHaveValue('Знайомство зі світлом');
      expect(TeacherDashboard_fx.selectors.lesson()).toBeChecked();
    });
  });
});
