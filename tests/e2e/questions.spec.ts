import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => { await page.goto('/questions'); });
test('single choice keyboard cycle locks, retries retain, reset clears; examples are independent', async ({ page }) => {
  const section = page.getByRole('region', { name: 'Яка планета найближча до Сонця?' });
  await expect(page.getByRole('region')).toHaveCount(7);
  await expect(section.getByText('Пояснення:', { exact: false })).toHaveCount(0);
  const earth = section.getByRole('button', { name: 'Земля', exact: true });
  await earth.focus(); await page.keyboard.press('Space');
  await expect(earth).toHaveAttribute('aria-pressed', 'true');
  await page.keyboard.press('Space');
  await expect(earth).toHaveAttribute('aria-pressed', 'false');
  await page.keyboard.press('Tab');
  await expect(section.getByRole('button', { name: 'Меркурій', exact: true })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(section.getByRole('button', { name: 'Меркурій' })).toHaveAttribute('aria-pressed', 'true');
  await section.getByRole('button', { name: 'Перевірити', exact: true }).focus(); await page.keyboard.press('Enter');
  await expect(section.getByRole('status')).toContainText('Правильно!');
  await expect(earth).toBeDisabled();
  await section.getByRole('button', { name: 'Спробувати ще раз' }).click();
  await expect(section.getByRole('button', { name: 'Меркурій' })).toHaveAttribute('aria-pressed', 'true');
  await expect(section.getByRole('status')).toBeEmpty();
  await section.getByRole('button', { name: 'Скинути', exact: true }).click();
  await expect(section.getByRole('button', { name: 'Меркурій' })).toHaveAttribute('aria-pressed', 'false');
  await expect(page.getByRole('region', { name: 'Оберіть усі прості числа.' }).getByRole('status')).toBeEmpty();
});
test('multiple, matching, short text and numeric validate through shared controller', async ({ page }) => {
  const multi = page.getByRole('region', { name: 'Оберіть усі прості числа.' });
  await multi.getByRole('button', { name: '2', exact: true }).click();
  await multi.getByRole('button', { name: '2', exact: true }).click();
  await expect(multi.getByRole('button', { name: '2', exact: true })).toHaveAttribute('aria-pressed', 'false');
  for (const name of ['2', '5']) { await multi.getByRole('button', { name, exact: true }).focus(); await page.keyboard.press('Space'); }
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
  await order.scrollIntoViewIfNeeded();
  const rain = order.getByRole('button', { name: 'Опади (1)', exact: true });
  await rain.focus();
  await page.keyboard.press('Space');
  await expect(rain).toHaveAttribute('aria-pressed', 'true');
  await expect(order.getByRole('status').filter({ hasText: 'Позиція: 1' })).toBeAttached();
  await page.keyboard.press('ArrowDown');
  await expect(order.getByRole('status').filter({ hasText: 'Позиція: 2' })).toBeAttached();
  await page.keyboard.press('ArrowDown');
  await expect(order.getByRole('status').filter({ hasText: 'Позиція: 3' })).toBeAttached();
  await page.keyboard.press('Space');
  await expect(order.getByRole('button', { name: 'Опади (3)', exact: true })).toBeFocused();
  await order.getByRole('button', { name: 'Перевірити', exact: true }).click();
  await expect(order.getByRole('status').filter({ hasText: 'Правильно!' })).toContainText('Правильно!');
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

test('answer surfaces share the widest width, center the column, and show selected hover affordance', async ({ page }, testInfo) => {
  const section = page.getByRole('region', { name: 'Яка планета найближча до Сонця?' });
  const options = section.locator('button[aria-pressed="false"]');
  const bounds = await options.evaluateAll(nodes => nodes.map(node => {
    const rect = node.getBoundingClientRect();
    return { x: rect.x, width: rect.width, align: getComputedStyle(node).textAlign };
  }));
  expect(bounds).toHaveLength(3);
  for (const bound of bounds) {
    expect(Math.abs(bound.width - bounds[0].width)).toBeLessThan(1);
    expect(bound.align).toBe('left');
  }
  const region = await section.boundingBox();
  expect(region).not.toBeNull();
  expect(Math.abs(bounds[0].x + bounds[0].width / 2 - (region!.x + region!.width / 2))).toBeLessThan(2);
  const mercury = section.getByRole('button', { name: 'Меркурій', exact: true });
  await mercury.click();
  if (testInfo.project.name === 'desktop') {
    await mercury.hover();
    await expect(mercury.locator('.answer-remove')).toBeVisible();
    await expect(mercury.locator('.answer-selected')).toBeHidden();
  }
  await mercury.click();
  await expect(mercury).toHaveAttribute('aria-pressed', 'false');
  await page.screenshot({ path: testInfo.outputPath('centered-questions.png'), fullPage: true });
});

test('ordering can be dragged by mouse or touch, cancelled with Escape, and locks after checking', async ({ page }, testInfo) => {
  const order = page.getByRole('region', { name: /Упорядкуйте етапи/ });
  await order.scrollIntoViewIfNeeded();
  const rain = order.getByRole('button', { name: 'Опади (1)', exact: true });
  const cloud = order.getByRole('button', { name: 'Конденсація (3)', exact: true });
  const from = await rain.boundingBox(); const to = await cloud.boundingBox();
  if (!from || !to) throw new Error('Missing draggable bounds');
  const x = from.x + from.width / 2, y = from.y + from.height / 2;
  const endY = to.y + to.height / 2;
  if (testInfo.project.name === 'mobile') {
    const session = await page.context().newCDPSession(page);
    await session.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] });
    // The touch sensor intentionally requires a hold to preserve page scrolling.
    await page.waitForTimeout(250);
    for (let step = 1; step <= 10; step++) {
      await session.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x, y: y + (endY - y) * step / 10 }] });
    }
    await session.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    await session.detach();
  } else {
    await page.mouse.move(x, y); await page.mouse.down();
    await page.mouse.move(x, endY, { steps: 10 }); await page.mouse.up();
  }
  const moved = order.getByRole('button', { name: 'Опади (3)', exact: true });
  await expect(moved).toBeVisible();
  await moved.focus(); await page.keyboard.press('Space');
  await page.keyboard.press('ArrowUp'); await page.keyboard.press('Escape');
  await expect(moved).toBeVisible();
  await order.getByRole('button', { name: 'Перевірити', exact: true }).click();
  await expect(order.getByRole('status').filter({ hasText: 'Правильно!' })).toContainText('Правильно!');
  await expect(moved).toBeDisabled();
  await order.getByRole('button', { name: 'Спробувати ще раз' }).click();
  await expect(moved).toBeEnabled();
});
