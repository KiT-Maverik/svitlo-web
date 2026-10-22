import type { ReportCategory, ReportInput, ReportTarget } from '../../features/reporting/types';
export interface ReportConfig { enabled: boolean; token?: string; repository?: string }
interface Dependencies { config: () => ReportConfig; resolveTarget: (id: string) => ReportTarget | undefined; fetch?: typeof fetch; now?: () => number }
const categories: ReportCategory[] = ['mistake', 'unclear', 'technical'];
const error = (message: string, status: number, headers?: HeadersInit) => Response.json({ status: 'error', message }, { status, headers: { 'Cache-Control': 'no-store', ...headers } });
function parse(value: unknown): ReportInput | null {
  if (!value || typeof value !== 'object') return null;
  const v = value as Record<string, unknown>;
  if (typeof v.requestId !== 'string' || !/^[a-zA-Z0-9-]{16,80}$/.test(v.requestId) || typeof v.contentId !== 'string' || v.contentId.length > 160 || typeof v.message !== 'string' || v.message.trim().length < 10 || v.message.trim().length > 2000 || typeof v.category !== 'string' || !categories.some(c => c === v.category)) return null;
  return { requestId: v.requestId, contentId: v.contentId, category: v.category as ReportCategory, message: v.message.trim() };
}
const plain = (value: string) => value.replace(/@/g, '@\u200b').replace(/[\\`*_{}\[\]()<>#!|]/g, '\\$&');
/** Process-local caps and idempotency for this first deployment; replace with a shared store when scaling. */
export function createReportHandler(deps: Dependencies) {
  const send = deps.fetch ?? fetch, now = deps.now ?? Date.now;
  const attempts = new Map<string, { expires: number; count: number }>();
  const requests = new Map<string, { fingerprint: string; expires: number; result: Promise<{ status: number; body: unknown }> }>();
  return async function POST(request: Request): Promise<Response> {
    const origin = request.headers.get('origin');
    if (!origin || origin !== new URL(request.url).origin) return error('Надсилати повідомлення можна лише зі сторінки Світла.', 403);
    if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) return error('Очікується JSON-повідомлення.', 415);
    if (Number(request.headers.get('content-length')) > 12000) return error('Повідомлення завелике.', 413);
    let input: ReportInput | null;
    try {
      // Limit the stream itself; content-length is not trusted.
      const reader = request.body?.getReader(); if (!reader) return error('Порожнє повідомлення.', 400);
      let bytes = 0; const chunks: Uint8Array[] = [];
      for (;;) { const { done, value } = await reader.read(); if (done) break; bytes += value.byteLength; if (bytes > 12000) { await reader.cancel(); return error('Повідомлення завелике.', 413); } chunks.push(value); }
      const buffer = new Uint8Array(bytes); let offset = 0; for (const chunk of chunks) { buffer.set(chunk, offset); offset += chunk.byteLength; }
      input = parse(JSON.parse(new TextDecoder().decode(buffer)));
    } catch { return error('Не вдалося прочитати повідомлення.', 400); }
    if (!input) return error('Оберіть категорію й опишіть проблему: від 10 до 2000 символів.', 400);
    const target = deps.resolveTarget(input.contentId); if (!target) return error('Матеріал не знайдено.', 400);
    const config = deps.config();
    if (!config.enabled || !config.token || !config.repository || !/^[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+$/.test(config.repository)) return error('Надсилання до GitHub ще не налаштоване. Ваш текст залишився у формі.', 503);
    const time = now();
    for (const [key, entry] of requests) if (entry.expires <= time) requests.delete(key);
    for (const [key, entry] of attempts) if (entry.expires <= time) attempts.delete(key);
    const fingerprint = JSON.stringify(input);
    const previous = requests.get(input.requestId);
    if (previous) {
      if (previous.fingerprint !== fingerprint) return error('Цей запит уже використано. Відкрийте нову форму.', 409);
      const result = await previous.result; return Response.json(result.body, { status: result.status, headers: { 'Cache-Control': 'no-store' } });
    }
    // Global cap cannot be bypassed by spoofing a client address. Address cap is secondary.
    const address = request.headers.get('x-forwarded-for')?.split(',')[0].trim().slice(0, 80) || 'anonymous';
    const clientKey = `client:${address}`, globalKey = 'global';
    if ((attempts.get(globalKey)?.count ?? 0) >= 30 || (attempts.get(clientKey)?.count ?? 0) >= 5 || requests.size >= 200 || attempts.size >= 500) return error('Забагато повідомлень. Спробуйте пізніше.', 429, { 'Retry-After': '600' });
    for (const key of [globalKey, clientKey]) { const old = attempts.get(key); attempts.set(key, { count: (old?.count ?? 0) + 1, expires: old?.expires ?? time + 600000 }); }
    const payload = input;
    const result = (async () => {
      try {
        const response = await send(`https://api.github.com/repos/${config.repository}/issues`, {
          method: 'POST', headers: { Accept: 'application/vnd.github+json', Authorization: `Bearer ${config.token}`, 'Content-Type': 'application/json', 'X-GitHub-Api-Version': '2026-03-10' },
          body: JSON.stringify({ title: `[Content report] ${target.title}`.slice(0, 200), body: `Категорія: ${payload.category}\nМатеріал: ${plain(target.title)}\nContent ID: ${plain(target.id)}\nСторінка: ${plain(target.path)}\nДжерело: ${plain(target.sourcePath)}\nРевізія: ${plain(target.revision)}\nRequest ID: ${payload.requestId}\n\nОпис користувача:\n${payload.message.split('\n').map(line => `> ${plain(line)}`).join('\n')}` }), signal: AbortSignal.timeout(10000),
        });
        if (response.status !== 201) return { status: 502, body: { status: 'error', message: 'GitHub не прийняв повідомлення. Текст залишився у формі.' } };
        const body: unknown = await response.json();
        if (!body || typeof body !== 'object' || !('number' in body) || typeof body.number !== 'number' || !Number.isInteger(body.number) || body.number <= 0) throw Error('Invalid GitHub response');
        return { status: 201, body: { status: 'created', issueNumber: body.number, issueUrl: `https://github.com/${config.repository}/issues/${body.number}` } };
      } catch { return { status: 502, body: { status: 'error', message: 'Не вдалося підтвердити створення issue. Не надсилайте повторно одразу: перевірте GitHub пізніше.' } }; }
    })();
    requests.set(input.requestId, { fingerprint, expires: time + 600000, result });
    const settled = await result; return Response.json(settled.body, { status: settled.status, headers: { 'Cache-Control': 'no-store' } });
  };
}
