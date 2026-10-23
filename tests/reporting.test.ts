import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createReportHandler } from '../src/server/reporting/handler';
import type { ReportTarget } from '../src/features/reporting/types';
const target: ReportTarget = { id: 'lesson:light:theory', title: 'Light theory', path: '/lessons/light#theory', sourcePath: 'content/light.md', revision: 'abc123' };
const config = () => ({ enabled: true, token: 'test-server-token', repository: 'example/content' });
const input = (id = 'request-1234567890') => ({ requestId: id, contentId: target.id, category: 'mistake', message: 'There is a mistake in this explanation.' });
function request(body: unknown = input(), headers: Record<string, string> = {}) { return new Request('https://svitlo.test/api/reports', { method: 'POST', headers: { origin: 'https://svitlo.test', 'content-type': 'application/json', ...headers }, body: JSON.stringify(body) }); }
const resolveTarget = (id: string) => id === target.id ? target : undefined;
test('disabled or missing configuration returns a truthful 503 without contacting GitHub', async () => {
  const handler = createReportHandler({ config: () => ({ enabled: false }), resolveTarget, fetch: async () => { throw Error('Must not send'); } });
  const response = await handler(request()); assert.equal(response.status, 503); assert.match((await response.json()).message, /ще не налаштоване/);
});
test('same-origin JSON validation and catalog allowlist reject invalid reports before sending', async () => {
  let calls = 0;
  const handler = createReportHandler({ config, resolveTarget, fetch: async () => { calls++; return Response.json({ number: 1 }, { status: 201 }); } });
  assert.equal((await handler(request(input(), { origin: 'https://attacker.test' }))).status, 403);
  assert.equal((await handler(request(input(), { origin: '' }))).status, 403);
  assert.equal((await handler(request(input(), { 'content-type': 'text/plain' }))).status, 415);
  for (const body of [{ ...input(), message: '' }, { ...input(), message: 'x'.repeat(2001) }, { ...input(), category: 'anything' }, { ...input(), contentId: 'foreign' }, { ...input(), requestId: 'short' }]) assert.equal((await handler(request(body))).status, 400);
  assert.equal((await handler(request({ ...input(), message: 'x'.repeat(13000) }))).status, 413);
  const malformed = new Request('https://svitlo.test/api/reports', { method: 'POST', headers: { origin: 'https://svitlo.test', 'content-type': 'application/json' }, body: '{' });
  assert.equal((await handler(malformed)).status, 400); assert.equal(calls, 0);
});
test('server fixes repository and trusted metadata, quotes user text, and does not leak token', async () => {
  let endpoint = '', options: RequestInit | undefined;
  const handler = createReportHandler({ config, resolveTarget, fetch: async (url, init) => { endpoint = String(url); options = init; return Response.json({ number: 42, html_url: 'https://attacker.test' }, { status: 201 }); } });
  const response = await handler(request({ ...input(), repository: 'attacker/repo', message: 'Please check @everyone <script>bad</script>' }));
  assert.equal(endpoint, 'https://api.github.com/repos/example/content/issues');
  assert.equal(new Headers(options?.headers).get('Authorization'), 'Bearer test-server-token');
  const sent = JSON.parse(String(options?.body)); assert.match(sent.body, /content\/light.md/); assert.ok(!sent.body.includes('@everyone')); assert.ok(!sent.body.includes('<script>'));
  const output = await response.json(); assert.equal(response.status, 201); assert.equal(output.issueUrl, 'https://github.com/example/content/issues/42'); assert.ok(!JSON.stringify(output).includes('test-server-token'));
});
test('concurrent retries with the same ID create exactly one issue within this process', async () => {
  let calls = 0;
  const handler = createReportHandler({ config, resolveTarget, fetch: async () => { calls++; return Response.json({ number: 7 }, { status: 201 }); } });
  const responses = await Promise.all([handler(request()), handler(request()), handler(request())]);
  assert.deepEqual(responses.map(r => r.status), [201, 201, 201]); assert.equal(calls, 1);
  assert.equal((await handler(request({ ...input(), message: 'Another problem with a reused ID' }))).status, 409);
});
test('upstream failures and ambiguous timeouts return safe errors and are not auto-retried', async () => {
  for (const provider of [async () => Response.json({ secret: 'provider-token-details' }, { status: 403 }), async (): Promise<Response> => { throw Error('network token details'); }, async () => Response.json({ number: -1 }, { status: 201 })]) {
    let calls = 0;
    const handler = createReportHandler({ config, resolveTarget, fetch: async () => { calls++; return provider(); } });
    const response = await handler(request()); assert.equal(response.status, 502); assert.ok(!(await response.text()).includes('token'));
    assert.equal((await handler(request())).status, 502); assert.equal(calls, 1);
  }
});
test('local rate limits cover unique submissions, preserve idempotent retries and expire', async () => {
  let now = 1000;
  const handler = createReportHandler({ config, resolveTarget, now: () => now, fetch: async () => Response.json({ number: 1 }, { status: 201 }) });
  for (let i = 0; i < 5; i++) assert.equal((await handler(request(input(`request-123456789${i}`)))).status, 201);
  assert.equal((await handler(request(input('request-1234567890')))).status, 201);
  const limited = await handler(request(input('request-1234567899'))); assert.equal(limited.status, 429); assert.equal(limited.headers.get('Retry-After'), '600');
  now += 600001; assert.equal((await handler(request(input('request-1234567899')))).status, 201);
});
test('a global cap prevents unlimited submissions with spoofed client addresses', async () => {
  const handler = createReportHandler({ config, resolveTarget, fetch: async () => Response.json({ number: 1 }, { status: 201 }) });
  for (let i = 0; i < 30; i++) assert.equal((await handler(request(input(`request-global-1234-${i}`), { 'x-forwarded-for': `address-${i}` }))).status, 201);
  assert.equal((await handler(request(input('request-global-1234-31'), { 'x-forwarded-for': 'new-address' }))).status, 429);
});

test('same-origin checks use HTTP Host when Next normalizes the internal request URL', async () => {
  const handler = createReportHandler({ config: () => ({ enabled: false }), resolveTarget });
  const make = (origin: string) => new Request('http://localhost:3000/api/reports', { method: 'POST', headers: { host: '127.0.0.1:3000', origin, 'content-type': 'application/json' }, body: JSON.stringify(input()) });
  assert.equal((await handler(make('http://127.0.0.1:3000'))).status, 503);
  assert.equal((await handler(make('http://attacker.test'))).status, 403);
  assert.equal((await handler(make('https://127.0.0.1:3000'))).status, 403);
});
