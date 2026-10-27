import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkers } from './check';
import { createQuestionController } from './controller';
import { exampleQuestions } from './examples';

test('example question types keep incomplete drafts editable and accept complete wrong answers', () => {
  const single = exampleQuestions.find(q => q.type === 'single-select');
  const multi = exampleQuestions.find(q => q.type === 'multiple-select');
  const text = exampleQuestions.find(q => q.type === 'short-text');
  const numeric = exampleQuestions.find(q => q.type === 'numeric');
  const ordering = exampleQuestions.find(q => q.type === 'ordering');
  const blocks = exampleQuestions.find(q => q.type === 'block-builder');
  assert.ok(single && multi && text && numeric && ordering && blocks);

  const s = createQuestionController(single, null, checkers['single-select']);
  s.check();
  assert.equal(s.getSnapshot().result, null);
  s.setAnswer('earth');
  assert.equal(s.isReadyToCheck(), true);
  s.setAnswer(null);
  assert.equal(s.isReadyToCheck(), false);

  const m = createQuestionController(multi, [], checkers['multiple-select']);
  m.setAnswer(['four', 'four']);
  assert.equal(m.isReadyToCheck(), false);

  const t = createQuestionController(text, '', checkers['short-text']);
  t.setAnswer('  \n ');
  assert.equal(t.isReadyToCheck(), false);
  t.setAnswer('неправильний текст');
  t.check();
  assert.equal(t.getSnapshot().result?.status, 'incorrect');

  const n = createQuestionController(numeric, '', checkers.numeric);
  for (const value of ['', '12abc', 'Infinity', '1,2.3']) {
    n.setAnswer(value);
    n.check();
    assert.equal(n.getSnapshot().result, null);
  }
  n.setAnswer('0');
  n.check();
  assert.equal(n.getSnapshot().result?.status, 'incorrect');

  const o = createQuestionController(
    ordering,
    ordering.items.map(item => item.id),
    checkers.ordering,
  );
  o.setAnswer(['rain']);
  assert.equal(o.isReadyToCheck(), false);

  const b = createQuestionController(blocks, [], checkers['block-builder'], { checkMode: 'on-change' });
  b.setAnswer(['three']);
  assert.equal(b.getSnapshot().result, null);
  b.setAnswer(['three', 'one-a', 'plus', 'one-b', 'equals']);
  assert.equal(b.getSnapshot().result?.status, 'incorrect');
});
