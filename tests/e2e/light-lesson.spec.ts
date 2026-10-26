import { test, expect } from '@playwright/test';
import { createLightQuestions } from '../../src/content/how-light-moves/sections/quiz/createLightQuestions';
import { quizSectionConfig } from '../../src/content/how-light-moves/sections/quiz/sectionConfig';
import { buildQuiz } from '../../src/utils';

const lightQuestions = createLightQuestions(buildQuiz(quizSectionConfig, 'uk-UA'));

test('home opens the light lesson and preserves the three-step learning flow', async ({ page }, testInfo) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Інтерактивні запитання', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Відкрити урок «Як рухається світло»', exact: true }).click();
  await expect(page).toHaveURL(/\/topics\/light$/);
  await expect(page.getByRole('heading', { name: 'Як рухається світло', exact: true })).toBeVisible();
  const steps = page.getByRole('navigation', { name: 'Етапи уроку' });
  await expect(steps.getByRole('button', { name: '3. Тест', exact: true })).toBeDisabled();
  await expect(page.getByRole('region', { name: 'Анімація поширення світла від джерела до екрана' })).toBeVisible();
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
    await page.getByRole('region', { name: question.prompt }).getByRole('button', { name: question.options.find(option => option.id === question.correctId)?.label, exact: true }).click();
    await page.getByRole('button', { name: 'Перевірити', exact: true }).click();
    await page.getByRole('button', { name: index === lightQuestions.length - 1 ? 'Завершити урок' : 'Наступне питання →', exact: true }).click();
  }
  await expect(page.getByRole('heading', { name: 'Вітаємо, ви завершили роботу з цим уроком!' })).toBeVisible();
  await expect(page.getByText('6 із 6', { exact: true })).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath('light-lesson-complete.png'), fullPage: true });
  await page.getByRole('link', { name: 'До головної', exact: true }).click();
  await expect(page.getByRole('link', { name: 'Відкрити урок «Як рухається світло»', exact: true })).toBeVisible();
});

test('lesson and checked quiz answer survive a reload', async ({ page }) => {
  await page.goto('/topics/light');
  const next = page.getByRole('navigation', { name: 'Нижня навігація навчання' }).getByRole('button', { name: 'Далі →', exact: true });
  await next.click();
  await next.click();
  const first = lightQuestions[0];
  await page.getByRole('region', { name: first.prompt }).getByRole('button', { name: first.options.find(option => option.id === first.correctId)?.label, exact: true }).click();
  await page.getByRole('button', { name: 'Перевірити', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Наступне питання →' })).toBeVisible();
  await page.reload();
  await expect(page.getByRole('navigation', { name: 'Етапи уроку' }).getByRole('button', { name: '3. Тест' })).toHaveAttribute('aria-current', 'step');
  const progress = page.getByRole('list', { name: 'Статус запитань' });
  await expect(progress.getByRole('button', { name: '1. Правильна відповідь' })).toBeVisible();
  await progress.getByRole('button', { name: '1. Правильна відповідь' }).click();
  await expect(page.getByRole('heading', { name: first.prompt, exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Наступне питання →' })).toBeVisible();
});

test('an unchecked answer remains selected after reloading', async ({ page }) => {
  await page.goto('/topics/light');
  const next = page.getByRole('navigation', { name: 'Нижня навігація навчання' }).getByRole('button', { name: 'Далі →', exact: true });
  await next.click();
  await next.click();
  const first = lightQuestions[0];
  const option = first.options.find(item => item.id === first.correctId)!;
  await page.getByRole('region', { name: first.prompt }).getByRole('button', { name: option.label, exact: true }).click();
  await expect(page.getByRole('button', { name: 'Перевірити', exact: true })).toBeEnabled();
  await page.reload();
  await expect(page.getByRole('region', { name: first.prompt }).getByRole('button', { name: option.label, exact: true })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByRole('button', { name: 'Перевірити', exact: true })).toBeEnabled();
});
