import type { AnswerMap, CheckResult, Item, QuestionOf, QuestionType, Submission, TextNormalization } from './model';

const empty: CheckResult = { status: 'incomplete', reason: 'empty' };
const invalid = (reason: Extract<CheckResult, { status: 'invalid' }>['reason']): CheckResult => ({ status: 'invalid', reason });
const grade = (correct: boolean): CheckResult => ({ status: correct ? 'correct' : 'incorrect' });
const equal = (a: string[], b: string[]) => a.length === b.length && a.every((id, i) => id === b[i]);
const unique = (ids: string[]) => new Set(ids).size === ids.length;
const validItems = (items: Item[]) => items.length > 0 && items.every(i => i.id.length > 0) && unique(items.map(i => i.id));
const contains = (items: Item[], id: string) => items.some(i => i.id === id);
function validateIds(ids: string[], items: Item[]): CheckResult | undefined {
  if (!unique(ids)) return invalid('duplicate-id');
  if (ids.some(id => !contains(items, id))) return invalid('unknown-id');
}
export function normalizeText(value: string, rules: TextNormalization): string {
  let normalized = rules.trim ? value.trim() : value;
  if (rules.collapseWhitespace) normalized = normalized.replace(/\s+/gu, ' ');
  if (rules.ignoreCase) normalized = normalized.toLowerCase();
  return normalized;
}
// Decimal notation only: no grouping, exponents, hex, Infinity or partial parses.
export function parseNumeric(value: string): number | null {
  const text = value.trim();
  if (!/^[+-]?(?:\d+(?:[.,]\d+)?|[.,]\d+)$/u.test(text)) return null;
  const number = Number(text.replace(',', '.'));
  return Number.isFinite(number) ? number : null;
}
type Checker<K extends QuestionType> = (q: QuestionOf<K>, value: AnswerMap[K]) => CheckResult;
export const checkers: { [K in QuestionType]: Checker<K> } = {
  'single-select': (q, value) => {
    if (!validItems(q.options) || !contains(q.options, q.correctId)) return invalid('definition');
    if (value === null || value === '') return empty;
    if (!contains(q.options, value)) return invalid('unknown-id');
    return grade(value === q.correctId);
  },
  'multiple-select': (q, value) => {
    if (!validItems(q.options) || !q.correctIds.length || validateIds(q.correctIds, q.options)) return invalid('definition');
    const issue = validateIds(value, q.options);
    if (issue) return issue;
    if (!value.length) return empty;
    return grade(value.length === q.correctIds.length && value.every(id => q.correctIds.includes(id)));
  },
  matching: (q, value) => {
    if (!validItems(q.left) || !validItems(q.right) || q.left.length !== q.right.length ||
      q.pairs.length !== q.left.length || !unique(q.pairs.map(p => p.id)) ||
      q.pairs.some(p => !p.id || !contains(q.left, p.leftId) || !contains(q.right, p.rightId)) ||
      !unique(q.pairs.map(p => p.leftId)) || !unique(q.pairs.map(p => p.rightId))) return invalid('definition');
    if (Object.keys(value).some(id => !contains(q.left, id))) return invalid('unknown-id');
    const selected = Object.values(value).filter(Boolean);
    const issue = validateIds(selected, q.right);
    if (issue) return issue;
    if (!selected.length) return empty;
    if (selected.length !== q.left.length) return { status: 'incomplete', reason: 'missing-items' };
    return grade(q.pairs.every(p => value[p.leftId] === p.rightId));
  },
  'short-text': (q, value) => {
    if (!q.acceptedAnswers.length || q.acceptedAnswers.some(a => !a.trim())) return invalid('definition');
    if (!value.trim()) return empty;
    return grade(q.acceptedAnswers.some(a => normalizeText(a, q.normalization) === normalizeText(value, q.normalization)));
  },
  numeric: (q, value) => {
    if (!Number.isFinite(q.expected) || !Number.isFinite(q.tolerance) || q.tolerance < 0) return invalid('definition');
    if (!value.trim()) return empty;
    const number = parseNumeric(value);
    if (number === null) return invalid('number-format');
    // Compensate only for binary floating-point rounding at the inclusive boundary.
    const rounding = q.tolerance === 0 ? 0 : Number.EPSILON * Math.max(Math.abs(number), Math.abs(q.expected), q.tolerance) * 2;
    return grade(Math.abs(number - q.expected) <= q.tolerance + rounding);
  },
  ordering: (q, value) => {
    if (!validItems(q.items) || q.correctOrder.length !== q.items.length || validateIds(q.correctOrder, q.items)) return invalid('definition');
    const issue = validateIds(value, q.items);
    if (issue) return issue;
    if (!value.length) return empty;
    if (value.length !== q.items.length) return { status: 'incomplete', reason: 'missing-items' };
    return grade(equal(value, q.correctOrder));
  },
  'block-builder': (q, value) => {
    if (!validItems(q.blocks) || !q.acceptedSequences.length || q.acceptedSequences.some(s => !s.length || validateIds(s, q.blocks))) return invalid('definition');
    const issue = validateIds(value, q.blocks);
    if (issue) return issue;
    if (!value.length) return empty;
    // A proper prefix can still be completed. Other nonempty sequences are graded.
    if (q.acceptedSequences.some(s => equal(s, value))) return grade(true);
    if (q.acceptedSequences.some(s => value.length < s.length && value.every((id, i) => s[i] === id))) return { status: 'incomplete', reason: 'missing-items' };
    return grade(false);
  },
};
export function checkAnswer(s: Submission): CheckResult {
  // Narrow on the nested discriminant through explicit guards (no casts / any).
  if (s.question.type === 'single-select' && s.answer.type === 'single-select') return checkers['single-select'](s.question, s.answer.value);
  if (s.question.type === 'multiple-select' && s.answer.type === 'multiple-select') return checkers['multiple-select'](s.question, s.answer.value);
  if (s.question.type === 'matching' && s.answer.type === 'matching') return checkers.matching(s.question, s.answer.value);
  if (s.question.type === 'short-text' && s.answer.type === 'short-text') return checkers['short-text'](s.question, s.answer.value);
  if (s.question.type === 'numeric' && s.answer.type === 'numeric') return checkers.numeric(s.question, s.answer.value);
  if (s.question.type === 'ordering' && s.answer.type === 'ordering') return checkers.ordering(s.question, s.answer.value);
  if (s.question.type === 'block-builder' && s.answer.type === 'block-builder') return checkers['block-builder'](s.question, s.answer.value);
  return invalid('definition');
}
