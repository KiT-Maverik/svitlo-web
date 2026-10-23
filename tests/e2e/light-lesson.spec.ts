import { test, expect } from '@playwright/test';
import { lightLesson } from '../../src/content/lightLesson';

test('home opens the light lesson and preserves the four-step learning flow', async ({ page }, testInfo) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Інтерактивні запитання', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Відкрити урок «Як рухається світло»', exact: true }).click();
  await expect(page).toHaveURL(/\/topics\/light$/);
  await expect(page.getByRole('heading', { name: 'Як рухається світло', exact: true })).toBeVisible();
  const steps = page.getByRole('navigation', { name: 'Етапи уроку' });
  await expect(steps.getByRole('button', { name: '4. Тест', exact: true })).toBeDisabled();
  await expect(page.locator('iframe[title="Анімація поширення світла від джерела до екрана"]')).toHaveAttribute('sandbox', 'allow-scripts');
  const next = page.getByRole('navigation', { name: 'Нижня навігація навчання' }).getByRole('button', { name: 'Далі →', exact: true });
  await next.click();
  await expect(page.getByRole('heading', { name: 'Одне світло. Різні середовища.' })).toBeVisible();
  await page.getByRole('button', { name: 'Вода', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Вода', exact: true })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByRole('button', { name: 'Відтворити', exact: true })).toBeVisible();
  await next.click(); await expect(next).toBeDisabled();
  for (const concept of lightLesson.concepts) {
    await page.getByRole('button', { name: `${concept.question} Показати відповідь`, exact: true }).click();
    await page.getByRole('button', { name: 'Пам’ятаю', exact: true }).click();
  }
  await expect(page.getByRole('heading', { name: 'Вітаємо, ви повторили матеріал!' })).toBeVisible();
  await next.click();
  await page.getByRole('checkbox', { name: 'Звук завершення' }).uncheck();
  for (const [index, concept] of lightLesson.concepts.entries()) {
    await expect(page.getByRole('heading', { name: concept.question, exact: true })).toBeVisible();
    await page.getByRole('group', { name: 'Варіанти відповіді' }).getByRole('button', { name: concept.choices[concept.correct], exact: true }).click();
    await page.getByRole('button', { name: index === lightLesson.concepts.length - 1 ? 'Завершити урок' : 'Наступне питання →', exact: true }).click();
  }
  await expect(page.getByRole('heading', { name: 'Вітаємо, ви завершили роботу з цим уроком!' })).toBeVisible();
  await expect(page.getByText('6 із 6', { exact: true })).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath('light-lesson-complete.png'), fullPage: true });
  await page.getByRole('link', { name: 'До головної', exact: true }).click();
  await expect(page.getByRole('link', { name: 'Відкрити урок «Як рухається світло»', exact: true })).toBeVisible();
});
