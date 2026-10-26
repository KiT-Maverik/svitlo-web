import { afterEach, describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AdminLessons_fx } from './AdminLessons.unit.fx.test';
import { AdminLessons_mx } from './AdminLessons.unit.mx.test';
import { lessons } from './catalog';
import { locale } from './locales/uk-UA';

describe('Components', () => {
  describe('AdminLessons', () => {
    afterEach(() => AdminLessons_mx.reset());

    it('should show the localized table and existing lesson row', () => {
      AdminLessons_fx.render();
      expect(AdminLessons_fx.selectors.table()).toBeVisible();
      expect(AdminLessons_fx.selectors.row()).toBeVisible();
    });

    it('should display an empty state when search has no matches', async () => {
      AdminLessons_fx.render();
      await userEvent.type(AdminLessons_fx.selectors.search(), 'not-present');
      expect(screen.getByText(locale.admin.empty)).toBeVisible();
    });

    it('should show the empty state when no lessons are supplied', () => {
      AdminLessons_fx.render({ lessons: [] });
      expect(screen.getByText(locale.admin.empty)).toBeVisible();
    });

    it('should show the selected lesson values in the edit dialog', async () => {
      AdminLessons_fx.render();
      await AdminLessons_fx.actions.edit();
      expect(AdminLessons_fx.selectors.dialog('edit')).toBeVisible();
      expect(AdminLessons_fx.selectors.titleField()).toHaveValue(lessons[0].title);
      expect(AdminLessons_fx.selectors.descriptionField()).toHaveValue(lessons[0].description);
    });

    it('should send trimmed edit content with the current revision to the repository', async () => {
      const save = AdminLessons_mx.edit();
      AdminLessons_fx.render();
      await AdminLessons_fx.actions.edit();
      await userEvent.clear(AdminLessons_fx.selectors.titleField());
      await userEvent.type(AdminLessons_fx.selectors.titleField(), 'Updated lesson');
      await AdminLessons_fx.actions.save();
      expect(save).toHaveBeenCalledWith(lessons[0].id, { title: 'Updated lesson', description: lessons[0].description }, lessons[0].revision);
      expect(await screen.findByRole('status')).toHaveTextContent('Edit request prepared');
    });

    it('should display a validation message without attempting an empty edit', async () => {
      const save = AdminLessons_mx.edit();
      AdminLessons_fx.render();
      await AdminLessons_fx.actions.edit();
      await userEvent.clear(AdminLessons_fx.selectors.titleField());
      await AdminLessons_fx.actions.save();
      expect(save).not.toHaveBeenCalled();
      expect(await screen.findByRole('status')).toHaveTextContent(locale.admin.validation);
    });

    it('should propose deletion without removing the lesson row from the catalog', async () => {
      const remove = AdminLessons_mx.remove();
      AdminLessons_fx.render();
      await AdminLessons_fx.actions.remove();
      expect(AdminLessons_fx.selectors.dialog('remove')).toBeVisible();
      await AdminLessons_fx.actions.delete();
      expect(remove).toHaveBeenCalledWith(lessons[0].id, lessons[0].revision);
      expect(await screen.findByRole('status')).toHaveTextContent('Deletion request prepared');
    });
  });
});
