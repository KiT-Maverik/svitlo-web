import { test, expect } from '@playwright/test';
import { lightQuestions } from '../../src/content/how-light-moves/lightLesson';

test('home opens the light lesson and preserves the three-step learning flow', async ({ page }, testInfo) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Інтерактивні запитання', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Відкрити урок «Як рухається світло»', exact: true }).click();
  await expect(page).toHaveURL(/\/topics\/light$/);
  await expect(page.getByRole('heading', { name: 'Як рухається світло', exact: true })).toBeVisible();
  const steps = page.getByRole('navigation', { name: 'Етапи уроку' });
  await expect(steps.getByRole('button', { name: '3. Тест', exact: true })).toBeDisabled();
  await expect(page.locator('iframe[title="Анімація поширення світла від джерела до екрана"]')).toHaveAttribute('sandbox', 'allow-scripts');
  const next = page.getByRole('navigation', { name: 'Нижня навігація навчання' }).getByRole('button', { name: 'Далі →', exact: true });
  await next.click();
  await expect(page.getByRole('heading', { name: 'Одне світло. Різні середовища.' })).toBeVisible();
  await page.getByRole('button', { name: 'Вода', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Вода', exact: true })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByRole('button', { name: 'Відтворити', exact: true })).toBeVisible();
  await next.click();
  await page.getByRole('checkbox', { name: 'Звук завершення' }).uncheck();
  for (const [index, question] of lightQuestions.entries()) {
    await expect(page.getByRole('heading', { name: question.prompt, exact: true })).toBeVisible();
    await page.getByRole('group', { name: 'Варіанти відповіді' }).getByRole('button', { name: question.options.find(option => option.id === question.correctId)?.label, exact: true }).click();
    await page.getByRole('button', { name: 'Перевірити', exact: true }).click();
    await page.getByRole('button', { name: index === lightQuestions.length - 1 ? 'Завершити урок' : 'Наступне питання →', exact: true }).click();
  }
  await expect(page.getByRole('heading', { name: 'Вітаємо, ви завершили роботу з цим уроком!' })).toBeVisible();
  await expect(page.getByText('6 із 6', { exact: true })).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath('light-lesson-complete.png'), fullPage: true });
  await page.getByRole('link', { name: 'До головної', exact: true }).click();
  await expect(page.getByRole('link', { name: 'Відкрити урок «Як рухається світло»', exact: true })).toBeVisible();
});
