import { afterEach, describe, expect, it, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { ReportedQuestion_fx } from './ReportedQuestion.unit.fx.test';
import { ReportButton_mx } from './ReportButton.unit.mx.test';
import { locale } from './locales/uk-UA';
import { ReportButton_fx } from './ReportButton.unit.fx.test';

describe('Components', () => {
  describe('ReportedQuestion', () => {
    afterEach(() => ReportButton_mx.reset());

    it('should compose the question and its report action with the question accessible name', () => {
      ReportedQuestion_fx.render();
      expect(ReportedQuestion_fx.selectors.report()).toBeVisible();
    });

    it('should open a report dialog and expose the question title', async () => {
      ReportedQuestion_fx.render();
      await ReportedQuestion_fx.actions.openReport();
      expect(ReportedQuestion_fx.child.report.dialog()).toBeVisible();
      expect(screen.getByText(ReportedQuestion_fx.defaults.question.prompt, { selector: 'span' })).toBeVisible();
    });

    it('should submit reports with the prefixed question ID without changing question behavior', async () => {
      const fetchMock = vi.fn<typeof fetch>().mockResolvedValue({
        ok: true, json: async () => ({ status: 'created', issueNumber: 7, issueUrl: 'https://github.com/example/repo/issues/7' }),
      } as Response);
      vi.stubGlobal('fetch', fetchMock);
      ReportedQuestion_fx.render();
      await ReportedQuestion_fx.actions.openReport();
      await ReportButton_fx.actions.describe('An answer looks incorrect');
      await ReportButton_fx.actions.submit();
      expect(await screen.findByRole('link', { name: locale.success.openIssue(7) })).toBeVisible();
      const request = JSON.parse(fetchMock.mock.calls[0][1]?.body as string);
      expect(request.contentId).toBe(`question:${ReportedQuestion_fx.defaults.question.id}`);
    });
  });
});
