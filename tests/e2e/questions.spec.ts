import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => { await page.goto('/questions'); });
test('single choice keyboard cycle locks, retries retain, reset clears; examples are independent', async ({ page }) => {
  const section = page.getByRole('region', { name: 'Яка планета найближча до Сонця?' });
  await expect(page.getByRole('region')).toHaveCount(7);
  await expect(section.getByText('Пояснення:', { exact: false })).toHaveCount(0);
  const earth = section.getByRole('radio', { name: 'Земля', exact: true });
  await earth.focus(); await page.keyboard.press('Space'); await page.keyboard.press('ArrowDown');
  await expect(section.getByRole('radio', { name: 'Меркурій' })).toBeChecked();
  await section.getByRole('button', { name: 'Перевірити', exact: true }).focus(); await page.keyboard.press('Enter');
  await expect(section.getByRole('status')).toContainText('Правильно!');
  await expect(earth).toBeDisabled();
  await section.getByRole('button', { name: 'Спробувати ще раз' }).click();
  await expect(section.getByRole('radio', { name: 'Меркурій' })).toBeChecked();
  await expect(section.getByRole('status')).toBeEmpty();
  await section.getByRole('button', { name: 'Скинути', exact: true }).click();
  await expect(section.getByRole('radio', { name: 'Меркурій' })).not.toBeChecked();
  await expect(page.getByRole('region', { name: 'Оберіть усі прості числа.' }).getByRole('status')).toBeEmpty();
});
test('multiple, matching, short text and numeric validate through shared controller', async ({ page }) => {
  const multi = page.getByRole('region', { name: 'Оберіть усі прості числа.' });
  for (const name of ['2', '5']) { await multi.getByRole('checkbox', { name, exact: true }).focus(); await page.keyboard.press('Space'); }
  await multi.getByRole('button', { name: 'Перевірити', exact: true }).click();
  await expect(multi.getByRole('status')).toContainText('Правильно!');
  const match = page.getByRole('region', { name: 'Поєднайте країни та столиці.' });
  await match.getByRole('button', { name: 'Перевірити', exact: true }).click();
  await expect(match.getByRole('status')).toContainText('неповна');
  await match.getByRole('button', { name: 'Спробувати ще раз' }).click();
  const ua = match.getByRole('combobox', { name: 'Україна' });
  await ua.focus(); await page.keyboard.press('k'); // Selection also verified via native select API below.
  await ua.selectOption('kyiv');
  await expect(match.getByRole('combobox', { name: 'Франція' }).locator('option[value="kyiv"]')).toBeDisabled();
  await match.getByRole('combobox', { name: 'Франція' }).selectOption('paris');
  await match.getByRole('button', { name: 'Перевірити', exact: true }).click();
  await expect(match.getByRole('status')).toContainText('Правильно!');
  const text = page.getByRole('region', { name: /Як називається/ });
  await text.getByRole('textbox').fill('  ФОТОСИНТЕЗ  ');
  await text.getByRole('button', { name: 'Перевірити', exact: true }).click();
  await expect(text.getByRole('status')).toContainText('Правильно!');
  const number = page.getByRole('region', { name: /Обчисліть довжину/ });
  await number.getByRole('textbox').fill('12abc');
  await number.getByRole('button', { name: 'Перевірити', exact: true }).click();
  await expect(number.getByRole('status')).toContainText('скінченне число');
  await expect(number.getByText('Пояснення:', { exact: false })).toHaveCount(0);
  await expect(number.getByRole('textbox')).toHaveAttribute('readonly', '');
  await number.getByRole('button', { name: 'Спробувати ще раз' }).click();
  await number.getByRole('textbox').fill('6,28');
  await number.getByRole('button', { name: 'Перевірити', exact: true }).click();
  await expect(number.getByRole('status')).toContainText('Правильно!');
});
test('ordering and block builder work using keyboard with duplicate labels and spare blocks', async ({ page }) => {
  const order = page.getByRole('region', { name: /Упорядкуйте етапи/ });
  await order.getByRole('button', { name: 'Вниз: Опади (1)', exact: true }).focus();
  await page.keyboard.press('Enter');
  await expect(order.getByRole('button', { name: 'Вниз: Опади (2)', exact: true })).toBeFocused();
  await page.keyboard.press('Enter');
  await order.getByRole('button', { name: 'Перевірити', exact: true }).click();
  await expect(order.getByRole('status')).toContainText('Правильно!');
  const blocks = page.getByRole('region', { name: /Складіть рівність/ });
  for (const name of ['Додати: 1 (1)', 'Додати: + (2)', 'Додати: 1 (3)', 'Додати: = (4)', 'Додати: 2 (5)']) {
    await blocks.getByRole('button', { name, exact: true }).focus(); await page.keyboard.press('Enter');
  }
  await expect(blocks.getByRole('button', { name: 'Додати: 3 (6)', exact: true })).toBeVisible();
  await blocks.getByRole('button', { name: 'Повернути: 2 (5)', exact: true }).focus(); await page.keyboard.press('Enter');
  await blocks.getByRole('button', { name: 'Додати: 2 (5)', exact: true }).focus(); await page.keyboard.press('Enter');
  await blocks.getByRole('button', { name: 'Перевірити', exact: true }).click();
  await expect(blocks.getByRole('status')).toContainText('Правильно!');
  await blocks.getByRole('button', { name: 'Спробувати ще раз' }).click();
  await blocks.getByRole('button', { name: 'Очистити відповідь', exact: true }).click();
  await expect(blocks.getByRole('button', { name: /^Додати:/ })).toHaveCount(6);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});
