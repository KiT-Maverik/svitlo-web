import { afterEach, describe, expect, it, vi } from 'vitest';
import { screen, within } from '@testing-library/react';
import { ReportButton_fx } from './ReportButton.unit.fx.test';
import { ReportButton_mx } from './ReportButton.unit.mx.test';
import { locale } from './locales/uk-UA';

describe('Components', () => {
  describe('ReportButton', () => {
    afterEach(() => ReportButton_mx.reset());

    it('should open an accessible report dialog for the supplied content', async () => {
      ReportButton_fx.render();
      await ReportButton_fx.actions.open();
      expect(ReportButton_fx.selectors.dialog()).toBeVisible();
      expect(within(ReportButton_fx.selectors.dialog()).getByText(ReportButton_fx.defaults.title)).toBeVisible();
    });

    it('should prevent submission when fewer than ten characters are entered', async () => {
      ReportButton_fx.render();
      await ReportButton_fx.actions.open();
      expect(ReportButton_fx.selectors.submit()).toBeDisabled();
      await ReportButton_fx.actions.describe('short');
      expect(ReportButton_fx.selectors.submit()).toBeDisabled();
    });

    it('should close the report dialog without submitting', async () => {
      ReportButton_fx.render();
      await ReportButton_fx.actions.open();
      await ReportButton_fx.actions.close();
      expect(await screen.findByRole('button', { name: /Flag: Sample lesson/ })).toBeVisible();
      expect(screen.queryByRole('dialog', { name: locale.title })).not.toBeInTheDocument();
    });

    it('should submit a trimmed message and display the created issue link', async () => {
      const fetchMock = vi.fn<typeof fetch>().mockResolvedValue({
        ok: true,
        json: async () => ({ status: 'created', issueUrl: 'https://github.com/example/lesson/issues/7', issueNumber: 7 }),
      } as Response);
      vi.stubGlobal('fetch', fetchMock);
      ReportButton_fx.render();
      await ReportButton_fx.actions.open();
      await ReportButton_fx.actions.describe('Describe the issue');
      await ReportButton_fx.actions.submit();
      expect(await screen.findByRole('link', { name: locale.success.openIssue(7) })).toHaveAttribute('href', 'https://github.com/example/lesson/issues/7');
      const request = JSON.parse(fetchMock.mock.calls[0]?.[1]?.body as string);
      expect(request).toMatchObject({ contentId: ReportButton_fx.defaults.contentId, category: 'mistake', message: 'Describe the issue' });
    });

    it('should preserve the entered message when the request fails', async () => {
      ReportButton_mx.failure();
      ReportButton_fx.render();
      await ReportButton_fx.actions.open();
      await ReportButton_fx.actions.describe('Broken image in section');
      await ReportButton_fx.actions.submit();
      expect(await screen.findByRole('status')).toHaveTextContent(locale.errors.network);
      expect(ReportButton_fx.selectors.message()).toHaveValue('Broken image in section');
    });

    it('should display an explicit server rejection without clearing input', async () => {
      ReportButton_mx.serverError();
      ReportButton_fx.render();
      await ReportButton_fx.actions.open();
      await ReportButton_fx.actions.describe('Lesson text is unclear');
      await ReportButton_fx.actions.submit();
      expect(await screen.findByRole('status')).toHaveTextContent('Server unavailable');
      expect(ReportButton_fx.selectors.message()).toHaveValue('Lesson text is unclear');
    });
  });
});
