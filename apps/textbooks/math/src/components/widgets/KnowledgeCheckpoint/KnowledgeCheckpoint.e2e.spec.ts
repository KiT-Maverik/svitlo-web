import { test, expect } from '@playwright/test';

test('the explanation scene reveals one answer at a time', async ({ page }, testInfo) => {
  await page.goto('/topics/light?lang=en-US');
  await expect(page.getByRole('heading', { name: 'Try to explain' })).toBeVisible();

  const source = page.getByRole('button', { name: 'Where is the light source in the scene?' });
  const path = page.getByRole('button', { name: 'Does the path change when you change the animation speed?' });
  await expect(source).toHaveAttribute('aria-expanded', 'false');
  await source.click();
  await expect(source).toHaveAttribute('aria-expanded', 'true');
  await expect(page.getByRole('region', { name: 'Where is the light source in the scene?' })).toContainText(
    'The source is on the left.',
  );

  await path.click();
  await expect(source).toHaveAttribute('aria-expanded', 'false');
  await expect(path).toHaveAttribute('aria-expanded', 'true');
  await expect(page.getByRole('region', { name: 'Where is the light source in the scene?' })).toBeHidden();
  await expect(
    page.getByRole('region', { name: 'Does the path change when you change the animation speed?' }),
  ).toBeVisible();
  await expect(
    page.getByRole('region', { name: 'Does the path change when you change the animation speed?' }),
  ).toContainText('the path stays straight');
  await source.locator('xpath=../../..').screenshot({ path: testInfo.outputPath('explain-light.png') });
  await page.getByRole('switch', { name: 'Темна тема' }).check();
  await page.waitForTimeout(250);
  await source.locator('xpath=../../..').screenshot({ path: testInfo.outputPath('explain-light-dark.png') });
});

test('the explanation scene follows right-to-left layout', async ({ page }) => {
  await page.goto('/topics/light?lang=ar-SA');
  await expect(page.getByRole('heading', { name: 'حاول أن تشرح' })).toBeVisible();
  const question = page.getByRole('button', { name: 'أين يقع مصدر الضوء في المشهد؟' });
  await expect(question.locator('xpath=ancestor::*[@dir][1]')).toHaveAttribute('dir', 'rtl');
  await question.click();
  await expect(page.getByRole('region', { name: 'أين يقع مصدر الضوء في المشهد؟' })).toContainText('المصدر على اليمين.');
});
