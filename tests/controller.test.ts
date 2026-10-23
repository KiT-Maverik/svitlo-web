import { test } from 'node:test';
import assert from 'node:assert/strict';
import type { SingleSelectQuestion, MultipleSelectQuestion, NumericQuestion } from '../src/types/questions';
import { checkers } from '../src/features/questions/check';
import { answersEqual, createQuestionController } from '../src/features/questions/controller';
const question: SingleSelectQuestion = { id: 'q', type: 'single-select', prompt: 'Choose', explanation: 'Reason', options: [{ id: 'a', label: 'A' }, { id: 'b', label: 'B' }], correctId: 'a' };
test('manual lifecycle fires once, locks after grading, retry retains, reset clears', () => {
  const calls: string[] = [];
  const c = createQuestionController(question, null, checkers['single-select'], {
    onChange: () => calls.push('change'), onCheck: () => calls.push('check'), onAnswer: e => calls.push(`answer:${e.result.status}:${e.attemptNumber}`),
    onCorrect: () => calls.push('correct'), onIncorrect: () => calls.push('incorrect'), onRetry: () => calls.push('retry'), onReset: () => calls.push('reset'),
  });
  c.setAnswer('b'); assert.equal(c.getSnapshot().result, null);
  c.check(); c.check(); c.setAnswer('a');
  assert.deepEqual(calls, ['change', 'check', 'answer:incorrect:1', 'incorrect']);
  assert.equal(c.getSnapshot().answer, 'b');
  c.retry(); assert.equal(c.getSnapshot().answer, 'b'); assert.equal(c.getSnapshot().hasChecked, false);
  c.setAnswer('a'); c.check();
  assert.deepEqual(calls.slice(-5), ['retry', 'change', 'check', 'answer:correct:2', 'correct']);
  c.reset(); assert.equal(c.getSnapshot().answer, null); assert.equal(c.getSnapshot().hasInteracted, false); assert.equal(c.getSnapshot().attemptNumber, 1);
});
test('interaction history differs from modification, with no-op edits ignored', () => {
  const c = createQuestionController(question, null, checkers['single-select']);
  c.setAnswer(null); assert.equal(c.getSnapshot().hasInteracted, false);
  c.setAnswer('a'); c.setAnswer(null);
  assert.equal(c.getSnapshot().hasInteracted, true); assert.equal(c.getSnapshot().isModified, false);
  assert.equal(answersEqual('matching', { b: '2', a: '1' }, { a: '1', b: '2' }), true);
  assert.equal(answersEqual('ordering', ['a', 'b'], ['b', 'a']), false);
});
test('automatic mode emits grade only for a complete valid answer and locks immediately', () => {
  const calls: string[] = [];
  const c = createQuestionController(question, null, checkers['single-select'], { checkMode: 'on-change', onAnswer: e => calls.push(e.result.status) });
  c.setAnswer('unknown'); assert.equal(c.getSnapshot().result, null);
  c.setAnswer(null); assert.equal(c.getSnapshot().hasChecked, false);
  c.setAnswer('a'); assert.equal(c.getSnapshot().result?.status, 'correct');
  c.setAnswer('b'); c.check(); assert.deepEqual(calls, ['correct']);
});
test('incomplete and invalid checks stay editable without emitting callbacks', () => {
  const n: NumericQuestion = { id: 'n', type: 'numeric', prompt: '?', explanation: '.', expected: 12, tolerance: 0 };
  const calls: string[] = [];
  const c = createQuestionController(n, '', checkers.numeric, { onCheck: e => calls.push(e.result.status), onAnswer: () => calls.push('answer') });
  c.check(); c.retry(); c.setAnswer('12abc'); c.check();
  assert.deepEqual(calls, []); assert.equal(c.getSnapshot().hasChecked, false); assert.equal(c.getSnapshot().result, null);
  assert.equal(c.getSnapshot().hasInteracted, true);
});
test('disabled and readOnly guard all actions, including actions invoked through custom slots', () => {
  const c = createQuestionController(question, null, checkers['single-select'], { disabled: true });
  c.setAnswer('a'); c.check(); c.reset(); assert.equal(c.getSnapshot().answer, null);
  c.configure({}); c.setAnswer('a'); c.check();
  c.configure({ readOnly: true }); c.retry(); c.reset();
  assert.equal(c.getSnapshot().result?.status, 'correct');
});
test('snapshots sent to callbacks cannot mutate internal answers and set equality ignores order', () => {
  const q: MultipleSelectQuestion = { ...question, type: 'multiple-select', correctIds: ['a', 'b'] };
  const c = createQuestionController(q, [], checkers['multiple-select'], { onChange: e => e.answer.push('foreign') });
  c.setAnswer(['a', 'b']); assert.deepEqual(c.getSnapshot().answer, ['a', 'b']);
  c.configure({ onChange: () => { throw Error('An equivalent set is not a change'); } });
  c.setAnswer(['b', 'a']); c.check(); assert.equal(c.getSnapshot().result?.status, 'correct');
});
test('callback reentry preserves checked event snapshots and never auto-checks a reset edit', () => {
  const events: string[] = [];
  const c = createQuestionController(question, null, checkers['single-select']);
  c.configure({ onCheck: () => c.reset(), onAnswer: e => events.push(`${e.answer}:${e.hasChecked}:${e.result.status}`) });
  c.setAnswer('a'); c.check(); assert.deepEqual(events, ['a:true:correct']);
  c.configure({ checkMode: 'on-change', onChange: () => c.reset() });
  c.setAnswer('a'); assert.equal(c.getSnapshot().result, null); assert.equal(c.getSnapshot().answer, null);
});


test('matching cannot be checked via controller or custom slot until every unique valid pair is present', () => {
  const q = { id: 'm', type: 'matching' as const, prompt: '?', explanation: '.', left: [{ id: 'a', label: 'A' }, { id: 'b', label: 'B' }], right: [{ id: 'x', label: 'X' }, { id: 'y', label: 'Y' }], pairs: [{ id: 'ax', leftId: 'a', rightId: 'x' }, { id: 'by', leftId: 'b', rightId: 'y' }] };
  const calls: string[] = [];
  const c = createQuestionController(q, {}, checkers.matching, { onCheck: e => calls.push(e.result.status) });
  const drafts: Record<string, string>[] = [{}, { a: 'x' }, { a: 'x', b: 'x' }, { a: 'x', b: 'foreign' }];
  for (const answer of drafts) {
    c.setAnswer(answer); assert.equal(c.isReadyToCheck(), false); c.check(); assert.equal(c.getSnapshot().result, null);
  }
  assert.deepEqual(calls, []);
  c.setAnswer({ a: 'y', b: 'x' }); assert.equal(c.isReadyToCheck(), true); c.check();
  assert.deepEqual(calls, ['incorrect']); c.retry(); assert.equal(c.getSnapshot().result, null);
  c.reset(); assert.equal(c.isReadyToCheck(), false);
});

test('all interaction types reject unfinished or invalid submissions and allow complete wrong answers', async () => {
  const { exampleQuestions } = await import('../src/features/questions/examples');
  const single = exampleQuestions.find(q => q.type === 'single-select');
  const multi = exampleQuestions.find(q => q.type === 'multiple-select');
  const text = exampleQuestions.find(q => q.type === 'short-text');
  const numeric = exampleQuestions.find(q => q.type === 'numeric');
  const ordering = exampleQuestions.find(q => q.type === 'ordering');
  const blocks = exampleQuestions.find(q => q.type === 'block-builder');
  assert.ok(single && multi && text && numeric && ordering && blocks);
  const s = createQuestionController(single, null, checkers['single-select']);
  assert.equal(s.isReadyToCheck(), false); s.check(); assert.equal(s.getSnapshot().result, null);
  s.setAnswer('earth'); assert.equal(s.isReadyToCheck(), true); s.setAnswer(null); assert.equal(s.isReadyToCheck(), false);
  const m = createQuestionController(multi, [], checkers['multiple-select']);
  m.check(); assert.equal(m.getSnapshot().hasChecked, false); m.setAnswer(['four']); assert.equal(m.isReadyToCheck(), true);
  m.setAnswer(['four', 'four']); assert.equal(m.isReadyToCheck(), false);
  const t = createQuestionController(text, '', checkers['short-text']);
  t.setAnswer('  \n '); t.check(); assert.equal(t.getSnapshot().result, null);
  t.setAnswer('неправильний текст'); assert.equal(t.isReadyToCheck(), true); t.check(); assert.equal(t.getSnapshot().result?.status, 'incorrect');
  const n = createQuestionController(numeric, '', checkers.numeric);
  for (const value of ['', ' ', '12abc', 'Infinity', '1,2.3']) { n.setAnswer(value); n.check(); assert.equal(n.isReadyToCheck(), false); assert.equal(n.getSnapshot().result, null); }
  n.setAnswer('0'); assert.equal(n.isReadyToCheck(), true); n.check(); assert.equal(n.getSnapshot().result?.status, 'incorrect');
  const o = createQuestionController(ordering, ordering.items.map(i => i.id), checkers.ordering);
  assert.equal(o.isReadyToCheck(), true); o.setAnswer(['rain']); assert.equal(o.isReadyToCheck(), false);
  const b = createQuestionController(blocks, [], checkers['block-builder'], { checkMode: 'on-change' });
  b.setAnswer(['three']); assert.equal(b.isReadyToCheck(), false); b.check(); assert.equal(b.getSnapshot().result, null);
  b.setAnswer(['three', 'one-a', 'plus', 'one-b', 'equals']); assert.equal(b.isReadyToCheck(), true); assert.equal(b.getSnapshot().result?.status, 'incorrect');
});
