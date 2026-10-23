import { test, expect, type Locator } from '@playwright/test';

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
  await expect(match.getByRole('button', { name: 'Перевірити', exact: true })).toBeDisabled();
  for (const name of ['Україна', 'Київ', 'Франція', 'Париж']) {
    await match.getByRole('button', { name, exact: true }).focus(); await page.keyboard.press('Enter');
  }
  await match.getByRole('button', { name: 'Перевірити', exact: true }).click();
  await expect(match.getByRole('status', { name: 'Результат перевірки' })).toContainText('Правильно!');
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
  const blocks = page.getByRole('region', { name: /Складіть рівність для/ });
  for (const name of ['Додати: 1 (1)', 'Додати: + (2)', 'Додати: 1 (3)', 'Додати: = (4)', 'Додати: 2 (5)']) {
    await blocks.getByRole('button', { name, exact: true }).focus(); await page.keyboard.press('Enter');
  }
  await expect(blocks.getByRole('button', { name: 'Додати: 3 (6)', exact: true })).toBeVisible();
  await blocks.getByRole('button', { name: 'Повернути: 2 (5)', exact: true }).focus(); await page.keyboard.press('Enter');
  await blocks.getByRole('button', { name: 'Додати: 2 (5)', exact: true }).focus(); await page.keyboard.press('Enter');
  await blocks.getByRole('button', { name: 'Перевірити', exact: true }).click();
  await expect(blocks.getByRole('status', { name: 'Результат перевірки' })).toContainText('Правильно!');
  await blocks.getByRole('button', { name: 'Спробувати ще раз' }).click();
  await blocks.getByRole('button', { name: 'Скинути', exact: true }).click();
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
    await expect(mercury.locator('.answer-selected')).toBeVisible();
    expect(await mercury.evaluate(node => getComputedStyle(node).transitionDuration)).not.toBe('0s');
    await expect(mercury.locator('.answer-remove')).toBeHidden();
    await page.mouse.move(0, 0);
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

test('matching previews curves, replaces endpoints and deletes links with keyboard or hover cross', async ({ page }, testInfo) => {
  const match = page.getByRole('region', { name: 'Поєднайте країни та столиці.' });
  await match.getByRole('button', { name: 'Україна', exact: true }).click();
  if (testInfo.project.name === 'desktop') {
    const right = await match.getByRole('button', { name: 'Париж', exact: true }).boundingBox();
    if (!right) throw new Error('No matching target');
    await page.mouse.move(right.x - 15, right.y + right.height / 2);
    await expect(match.locator('path[data-preview]')).toHaveCount(1);
  }
  await match.getByRole('button', { name: 'Париж', exact: true }).click();
  const link = match.getByRole('button', { name: 'Видалити зв’язок: Україна — Париж', exact: true });
  await expect(link).toBeAttached();
  await match.getByRole('button', { name: 'Франція', exact: true }).click();
  await match.getByRole('button', { name: 'Париж', exact: true }).click();
  await expect(link).toHaveCount(0);
  const replacement = match.getByRole('button', { name: 'Видалити зв’язок: Франція — Париж', exact: true });
  await replacement.focus();
  expect(await replacement.evaluate(node => getComputedStyle(node).outlineStyle)).toBe('none');
  await page.keyboard.press('Enter');
  await expect(replacement).toHaveCount(0);
  await match.getByRole('button', { name: 'Україна', exact: true }).click();
  await page.keyboard.press('Escape');
  await match.getByRole('button', { name: 'Київ', exact: true }).click();
  await expect(match.locator('path[data-connection]')).toHaveCount(0);
  await match.getByRole('button', { name: 'Україна', exact: true }).click();
  await match.getByRole('button', { name: 'Київ', exact: true }).click();
  const correct = match.getByRole('button', { name: 'Видалити зв’язок: Україна — Київ', exact: true });
  await match.screenshot({ path: testInfo.outputPath('matching.png') });
  if (testInfo.project.name === 'desktop') {
    await correct.locator('path[data-connection]').hover();
    await expect(correct.locator('circle')).toBeVisible();
    await correct.locator('circle').click();
  } else { await correct.focus(); await page.keyboard.press('Space'); }
  await expect(correct).toHaveCount(0);
});

test('one chip builder supports click, drag, insertion preview, cross-zone moves and sorting', async ({ page }, testInfo) => {
  const section = page.getByRole('region', { name: /Складіть рівність для суми/ });
  await section.scrollIntoViewIfNeeded();
  const built = section.getByRole('group', { name: 'Складена відповідь', exact: true });
  const addOne = section.getByRole('button', { name: 'Додати: 1 (1)', exact: true });
  async function drag(source: Locator, target: Locator) {
    const a = await source.boundingBox(), b = await target.boundingBox();
    if (!a || !b) throw new Error('Missing block drag bounds');
    const x = a.x + a.width / 2, y = a.y + a.height / 2;
    const tx = b.x + b.width / 2, ty = b.y + b.height / 2;
    if (testInfo.project.name === 'mobile') {
      const session = await page.context().newCDPSession(page);
      await session.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] });
      await page.waitForTimeout(250);
      for (let step = 1; step <= 10; step++) await session.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: x + (tx - x) * step / 10, y: y + (ty - y) * step / 10 }] });
      await session.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
      await session.detach();
    } else {
      await page.mouse.move(x, y); await page.mouse.down();
      await page.mouse.move(tx, ty, { steps: 12 });
      await expect(section.locator('[data-insertion-preview]')).toBeVisible();
      await section.screenshot({ path: testInfo.outputPath('block-insertion.png') });
      await page.mouse.up();
    }
  }
  await drag(addOne, built);
  await expect(section.getByRole('button', { name: 'Повернути: 1 (1)', exact: true })).toBeVisible();
  for (const name of ['Додати: 1 (3)', 'Додати: + (2)', 'Додати: = (4)', 'Додати: 2 (5)']) await section.getByRole('button', { name, exact: true }).click();
  if (testInfo.project.name === 'desktop') {
    await drag(section.getByRole('button', { name: 'Повернути: + (2)', exact: true }), section.getByRole('button', { name: 'Повернути: 1 (3)', exact: true }));
  } else {
    const plus = section.getByRole('button', { name: 'Повернути: + (2)', exact: true });
    await plus.focus(); await page.keyboard.press('Space');
    await expect(plus).toHaveAttribute('aria-pressed', 'true');
    await expect(section.getByRole('status').filter({ hasText: 'Позиція: 3' })).toBeAttached();
    await page.keyboard.press('ArrowLeft');
    await expect(section.getByRole('status').filter({ hasText: 'Позиція: 2' })).toBeAttached();
    await page.keyboard.press('Space');
  }
  await expect(built.getByRole('button')).toHaveText(['1', '+', '1', '=', '2']);
  await section.screenshot({ path: testInfo.outputPath('drag-blocks.png') });
  await section.getByRole('button', { name: 'Перевірити', exact: true }).click();
  await expect(section.getByRole('status', { name: 'Результат перевірки' })).toContainText('Правильно!');
  await expect(built.getByRole('button').first()).toBeDisabled();
  await section.getByRole('button', { name: 'Спробувати ще раз' }).click();
  await section.getByRole('button', { name: 'Скинути', exact: true }).click();
  await expect(built.getByRole('button')).toHaveCount(0);
  await expect(section.getByText('Очистити відповідь', { exact: true })).toHaveCount(0);
  await expect(section.getByRole('button', { name: 'Скинути', exact: true })).toHaveText('');
  await expect(section.getByRole('button', { name: /^Flag:/ })).toHaveText('');
  await expect(page.getByRole('region', { name: /Складіть рівність для суми/ }).getByRole('button', { name: /^Додати:/ })).toHaveCount(6);
});


test('icon controls keep accessible names and reduced motion disables choice and chip animation', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  const choice = page.getByRole('region', { name: 'Яка планета найближча до Сонця?' });
  const mercury = choice.getByRole('button', { name: 'Меркурій', exact: true });
  await mercury.click();
  expect(await mercury.evaluate(node => getComputedStyle(node).transitionDuration)).toBe('0s');
  expect(await mercury.locator('.answer-selected').evaluate(node => getComputedStyle(node).transitionDuration)).toBe('0s');
  const reset = choice.getByRole('button', { name: 'Скинути', exact: true });
  await expect(reset).toHaveText('');
  expect(await reset.evaluate(node => getComputedStyle(node).borderWidth)).toBe('0px');
  const resetBounds = await reset.boundingBox(), checkBounds = await choice.getByRole('button', { name: 'Перевірити', exact: true }).boundingBox();
  expect(resetBounds!.x).toBeLessThan(checkBounds!.x);
  await expect(page.getByRole('region', { name: /Упорядкуйте етапи/ }).locator('ol button svg')).toHaveCount(3);
  await reset.focus(); await page.keyboard.press('Enter');
  await expect(mercury).toHaveAttribute('aria-pressed', 'false');
  const flag = choice.getByRole('button', { name: /^Flag:/ });
  await expect(flag).toHaveText('');
  await expect(flag).toBeEnabled();
  const idleFlagColor = await flag.evaluate(node => getComputedStyle(node).color);
  const resetSize = await reset.boundingBox(), flagSize = await flag.boundingBox();
  expect(flagSize!.width).toBe(resetSize!.width);
  expect(flagSize!.height).toBe(resetSize!.height);
  await flag.focus();
  await expect(flag.locator('.report-filled')).toBeVisible();
  await expect(flag.locator('.report-outline')).toBeHidden();
  expect(await flag.evaluate(node => getComputedStyle(node).color)).not.toBe(idleFlagColor);
  const card = await choice.boundingBox(), icon = await flag.boundingBox();
  expect(card && icon && card.x + card.width - icon.x - icon.width).toBeLessThan(36);
  const panel = choice.locator('[data-question-actions]');
  await expect(panel.locator('[data-action-zone="left"]').getByRole('button', { name: 'Скинути', exact: true })).toBeVisible();
  await expect(panel.locator('[data-action-zone="right"]').getByRole('button', { name: /^Flag:/ })).toBeVisible();
  const check = await panel.locator('[data-action-zone="center"]').getByRole('button').boundingBox();
  expect(Math.abs(check!.x + check!.width / 2 - (card!.x + card!.width / 2))).toBeLessThan(2);
  expect(Math.abs(resetBounds!.y + resetBounds!.height / 2 - (icon!.y + icon!.height / 2))).toBeLessThan(2);
  const ordering = page.getByRole('region', { name: /Упорядкуйте етапи/ }).locator('ol button').first();
  expect(await ordering.evaluate(node => node.querySelector('svg')!.getBoundingClientRect().right <= node.querySelector('span')!.getBoundingClientRect().left)).toBe(true);
  const blocks = page.getByRole('region', { name: /Складіть рівність для суми/ });
  await blocks.getByRole('button', { name: 'Додати: 1 (1)', exact: true }).click();
  const chip = blocks.getByRole('button', { name: 'Повернути: 1 (1)', exact: true });
  await expect(chip).toHaveClass(/MuiChip-root/);
  expect(await chip.evaluate(node => getComputedStyle(node).backgroundColor)).toBe('rgba(0, 0, 0, 0)');
  expect((await chip.boundingBox())!.height).toBeLessThan(44);
  await expect(blocks.getByRole('group', { name: 'Складена відповідь', exact: true }).locator('button svg')).toHaveCount(0);
  expect(await chip.evaluate(node => getComputedStyle(node.parentElement!).animationName)).toBe('none');
  await blocks.getByRole('button', { name: 'Скинути', exact: true }).click();
  await expect(blocks.getByRole('button', { name: /^Додати:/ })).toHaveCount(6);
});


test('matching connects from either side with preview, cancellation and one-to-one reassignment', async ({ page }, testInfo) => {
  const match = page.getByRole('region', { name: 'Поєднайте країни та столиці.' });
  const paris = match.getByRole('button', { name: 'Париж', exact: true });
  await paris.focus(); await page.keyboard.press('Enter');
  await expect(paris).toHaveAttribute('aria-pressed', 'true');
  await page.keyboard.press('Escape');
  await expect(paris).toHaveAttribute('aria-pressed', 'false');
  await paris.click();
  await match.getByRole('button', { name: 'Київ', exact: true }).click();
  await expect(paris).toHaveAttribute('aria-pressed', 'false');
  if (testInfo.project.name === 'desktop') {
    await match.getByRole('button', { name: 'Україна', exact: true }).hover();
    await expect(match.locator('path[data-preview]')).toHaveCount(1);
  }
  await match.getByRole('button', { name: 'Україна', exact: true }).click();
  await expect(match.getByRole('button', { name: 'Видалити зв’язок: Україна — Київ', exact: true })).toHaveCount(1);
  await paris.focus(); await page.keyboard.press('Enter');
  await match.getByRole('button', { name: 'Франція', exact: true }).focus(); await page.keyboard.press('Enter');
  await expect(match.locator('path[data-connection]')).toHaveCount(2);
  // Starting from an already paired right endpoint moves that endpoint to the new left item.
  await match.getByRole('button', { name: 'Київ', exact: true }).click();
  await match.getByRole('button', { name: 'Франція', exact: true }).click();
  await expect(match.locator('path[data-connection]')).toHaveCount(1);
  await expect(match.getByRole('button', { name: 'Видалити зв’язок: Франція — Київ', exact: true })).toHaveCount(1);
  await match.getByRole('button', { name: 'Скинути', exact: true }).click();
  for (const name of ['Париж', 'Франція', 'Київ', 'Україна']) await match.getByRole('button', { name, exact: true }).click();
  await match.getByRole('button', { name: 'Перевірити', exact: true }).click();
  await expect(match.getByRole('status', { name: 'Результат перевірки' })).toContainText('Правильно!');
  await expect(paris).toBeDisabled();
});
