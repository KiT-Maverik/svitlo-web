import { expect, test } from '@playwright/test';

test('the standalone platform renders its Ukrainian textbook catalog', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Світло — інтерактивні підручники');
  await expect(page.getByRole('heading', { level: 1, name: 'Світло — інтерактивні підручники' })).toBeVisible();
  const catalog = page.getByRole('region', { name: 'Підручники' });
  await expect(catalog.getByRole('heading', { name: 'Математика' })).toBeVisible();
  await expect(catalog.getByText('Готується')).toBeVisible();
  await expect(catalog.getByRole('link', { name: 'Відкрити підручник' })).toHaveCount(0);
});
