import { test, expect, type Page } from '@playwright/test';
import { demoQuizConfig } from '@/fixtures/demoLesson';
import { toQuestionWidgets } from './adapters/toQuestionWidgets';
import { buildQuiz } from '@svitlo/engine/builders';

const question = toQuestionWidgets(buildQuiz(demoQuizConfig, 'uk-UA'))[0];
const next = (page: Page) => page.getByRole('navigation', { name: 'Нижня навігація навчання' })
  .getByRole('button', { name: 'Далі →', exact: true });

async function openQuiz(page: Page) {
  await page.goto('/topics/demo');
  await next(page).click();
  await next(page).click();
  await expect(page.getByRole('heading', { name: question.prompt, exact: true })).toBeVisible();
}

test('generic lesson navigates through content, checks a question and persists completion', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Інтерактивні запитання', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Демонстраційний урок', exact: true }).click();
  await expect(page).toHaveURL(/\/topics\/demo$/);
  await expect(page.getByText('Це нейтральний приклад секції для перевірки відображення уроку.')).toBeVisible();
  const steps = page.getByRole('navigation', { name: 'Етапи уроку' });
  await expect(steps.getByRole('button', { name: '3. Тест', exact: true })).toBeDisabled();
  await next(page).click();
  await expect(page.getByText('Скористайтеся навігацією, щоб перейти до демонстраційного тесту.')).toBeVisible();
  await next(page).click();
  await page.getByRole('checkbox', { name: 'Звук завершення' }).uncheck();
  await page.getByRole('region', { name: question.prompt })
    .getByRole('button', { name: question.options.find(item => item.id === question.correctId)?.label, exact: true })
    .click();
  await page.getByRole('button', { name: 'Перевірити', exact: true }).click();
  await page.getByRole('button', { name: 'Завершити урок', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Вітаємо, ви завершили роботу з цим уроком!' })).toBeVisible();
  await expect(page.getByText('1 із 1', { exact: true })).toBeVisible();
  await page.reload();
  await expect(page.getByText('1 із 1', { exact: true })).toBeVisible();
});

test('generic lesson uses localized fallback without any textbook scene', async ({ page }) => {
  await page.goto('/topics/demo?lang=en-US');
  await expect(page.getByText('This is a generic content section for exercising the lesson renderer.')).toBeVisible();
  await next(page).click();
  await expect(page.getByText('Use the navigation controls to reach the sample quiz.')).toBeVisible();
});

test('checked answer and quiz step survive reload', async ({ page }) => {
  await openQuiz(page);
  const label = question.options.find(item => item.id === question.correctId)?.label;
  await page.getByRole('region', { name: question.prompt }).getByRole('button', { name: label, exact: true }).click();
  await page.getByRole('button', { name: 'Перевірити', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Завершити урок' })).toBeVisible();
  await page.reload();
  await expect(page.getByRole('navigation', { name: 'Етапи уроку' })
    .getByRole('button', { name: '3. Тест' })).toHaveAttribute('aria-current', 'step');
  await expect(page.getByRole('button', { name: 'Завершити урок' })).toBeVisible();
});

test('draft answer survives reload', async ({ page }) => {
  await openQuiz(page);
  const label = question.options.find(item => item.id === question.correctId)?.label;
  await page.getByRole('region', { name: question.prompt }).getByRole('button', { name: label, exact: true }).click();
  await page.reload();
  await expect(page.getByRole('region', { name: question.prompt })
    .getByRole('button', { name: label, exact: true })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByRole('button', { name: 'Перевірити', exact: true })).toBeEnabled();
});

test('skipped quiz can be resumed after reload', async ({ page }) => {
  await openQuiz(page);
  await page.getByRole('navigation', { name: 'Нижня навігація навчання' })
    .getByRole('button', { name: 'Skip', exact: true }).click();
  await expect(page.getByText('Тест пропущено. Урок можна завершити після проходження тесту.')).toBeVisible();
  await page.reload();
  await page.getByRole('button', { name: 'Повернутися до тесту' }).click();
  await expect(page.getByRole('heading', { name: question.prompt })).toBeVisible();
});
