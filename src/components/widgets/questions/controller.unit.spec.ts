import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { checkers } from './check';
import { answersEqual, createQuestionController } from './controller';
import { Questions_fx } from './questions.unit.fx';

describe('Widgets', () => {
  describe('Questions', () => {
    describe('QuestionController', () => {
      describe('Initialization', () => {
        it('should initialize a clean unanswered attempt with an isolated answer copy', () => {
          const q = Questions_fx.make('multiple-select');
          const initial: string[] = [];
          const controller = createQuestionController(q, initial, checkers['multiple-select']);
          initial.push('a');
          assert.deepEqual(controller.getSnapshot(), {
            answer: [], result: null, hasInteracted: false, isModified: false, hasChecked: false, attemptNumber: 1,
          });
        });
        it('should reflect a prefilled answer and a pregraded result without invoking callbacks', () => {
          const q = Questions_fx.make('single-select');
          const events: string[] = [];
          const controller = createQuestionController(q, null, checkers['single-select'], {
            initialAnswer: 'b', initialResult: { status: 'incorrect' },
            onCheck: () => events.push('check'), onAnswer: () => events.push('answer'),
          });
          assert.equal(controller.getSnapshot().answer, 'b');
          assert.equal(controller.getSnapshot().isModified, true);
          assert.equal(controller.getSnapshot().hasChecked, true);
          assert.equal(controller.getSnapshot().result?.status, 'incorrect');
          assert.deepEqual(events, []);
        });
      });
      describe('Selection', () => {
        it('should emit changes only for distinguishable answer values', () => {
          const q = Questions_fx.make('multiple-select');
          const events: string[][] = [];
          const controller = createQuestionController(q, [], checkers['multiple-select'], { onChange: e => events.push(e.answer) });
          controller.setAnswer(['a', 'b']);
          controller.setAnswer(['b', 'a']);
          assert.deepEqual(events, [['a', 'b']]);
          assert.deepEqual(controller.getSnapshot().answer, ['a', 'b']);
          assert.equal(answersEqual('ordering', ['a', 'b'], ['b', 'a']), false);
          assert.equal(answersEqual('matching', { b: 'y', a: 'x' }, { a: 'x', b: 'y' }), true);
        });
        it('should retain interaction history when the user returns to the initial answer', () => {
          const q = Questions_fx.make('single-select');
          const controller = createQuestionController(q, null, checkers['single-select']);
          controller.setAnswer('a');
          controller.setAnswer(null);
          assert.equal(controller.getSnapshot().hasInteracted, true);
          assert.equal(controller.getSnapshot().isModified, false);
        });
        it('should protect internal state from mutations in callbacks', () => {
          const q = Questions_fx.make('multiple-select');
          const controller = createQuestionController(q, [], checkers['multiple-select'], {
            onChange: event => { event.answer.push('foreign'); },
          });
          controller.setAnswer(['a']);
          assert.deepEqual(controller.getSnapshot().answer, ['a']);
        });
      });
      describe('Completeness', () => {
        it('should prohibit checking an incomplete or invalid matching answer', () => {
          const q = Questions_fx.make('matching');
          const events: string[] = [];
          const controller = createQuestionController(q, {}, checkers.matching, { onCheck: () => events.push('check') });
          const drafts: Record<string, string>[] = [{}, { a: 'x' }, { a: 'x', b: 'x' }, { a: 'unknown' }];
          for (const answer of drafts) {
            controller.setAnswer(answer);
            assert.equal(controller.isReadyToCheck(), false);
            controller.check();
            assert.equal(controller.getSnapshot().result, null);
          }
          assert.deepEqual(events, []);
          controller.setAnswer({ a: 'y', b: 'x' });
          assert.equal(controller.isReadyToCheck(), true);
          controller.check();
          assert.equal(controller.getSnapshot().result?.status, 'incorrect');
        });
        it('should not grade an extendable block-builder prefix until a complete length is reached', () => {
          const q = Questions_fx.make('block-builder');
          const controller = createQuestionController(q, [], checkers['block-builder'], { checkMode: 'on-change' });
          controller.setAnswer(['a']);
          assert.equal(controller.isReadyToCheck(), false);
          assert.equal(controller.getSnapshot().result, null);
          controller.setAnswer(['a', 'b']);
          assert.equal(controller.getSnapshot().result?.status, 'correct');
        });
        it('should preserve editability of invalid numbers even in automatic mode', () => {
          const q = Questions_fx.make('numeric');
          const controller = createQuestionController(q, '', checkers.numeric, { checkMode: 'on-change' });
          controller.setAnswer('1e2');
          assert.equal(controller.getSnapshot().result, null);
          controller.setAnswer('2.5');
          assert.equal(controller.getSnapshot().result?.status, 'correct');
        });
      });
      describe('Callbacks', () => {
        it('should emit check, answer and verdict once and in contractually observable order', () => {
          const q = Questions_fx.make('single-select');
          const events: string[] = [];
          const controller = createQuestionController(q, null, checkers['single-select'], {
            onChange: e => events.push(`change:${e.answer}`),
            onCheck: e => events.push(`check:${e.answer}:${e.result.status}`),
            onAnswer: e => events.push(`answer:${e.attemptNumber}:${e.result.status}`),
            onCorrect: () => events.push('correct'),
            onIncorrect: () => events.push('incorrect'),
          });
          controller.setAnswer('b');
          controller.check();
          controller.check();
          controller.setAnswer('a');
          assert.deepEqual(events, ['change:b', 'check:b:incorrect', 'answer:1:incorrect', 'incorrect']);
        });
        it('should guard against reentrant change callbacks that reset before auto-evaluation', () => {
          const q = Questions_fx.make('single-select');
          const events: string[] = [];
          const controller = createQuestionController(q, null, checkers['single-select']);
          controller.configure({
            checkMode: 'on-change',
            onChange: () => controller.reset(),
            onAnswer: () => events.push('answer'),
          });
          controller.setAnswer('a');
          assert.equal(controller.getSnapshot().result, null);
          assert.equal(controller.getSnapshot().answer, null);
          assert.deepEqual(events, []);
        });
        it('should send a stable graded event even when a check handler resets the controller', () => {
          const q = Questions_fx.make('single-select');
          const events: string[] = [];
          const controller = createQuestionController(q, null, checkers['single-select']);
          controller.configure({
            onCheck: () => controller.reset(),
            onAnswer: e => events.push(`${e.answer}:${e.hasChecked}:${e.result.status}`),
          });
          controller.setAnswer('a');
          controller.check();
          assert.deepEqual(events, ['a:true:correct']);
          assert.equal(controller.getSnapshot().result, null);
        });
      });
      describe('Lifecycle', () => {
        it('should unlock for retry without erasing the chosen answer and increment the attempt', () => {
          const q = Questions_fx.make('single-select');
          const events: string[] = [];
          const controller = createQuestionController(q, null, checkers['single-select'], {
            onRetry: e => events.push(`retry:${e.attemptNumber}`),
            onReset: e => events.push(`reset:${e.attemptNumber}`),
          });
          controller.retry();
          controller.setAnswer('b');
          controller.check();
          controller.retry();
          assert.equal(controller.getSnapshot().answer, 'b');
          assert.equal(controller.getSnapshot().result, null);
          assert.equal(controller.getSnapshot().hasChecked, false);
          assert.equal(controller.getSnapshot().attemptNumber, 2);
          controller.setAnswer('a');
          controller.check();
          assert.equal(controller.getSnapshot().result?.status, 'correct');
          controller.reset();
          assert.equal(controller.getSnapshot().answer, null);
          assert.equal(controller.getSnapshot().attemptNumber, 1);
          assert.deepEqual(events, ['retry:2', 'reset:1']);
        });
        it('should prevent all answer mutation and lifecycle actions while disabled or read-only', () => {
          const q = Questions_fx.make('single-select');
          const controller = createQuestionController(q, null, checkers['single-select'], { disabled: true });
          controller.setAnswer('a'); controller.check(); controller.reset(); controller.retry();
          assert.equal(controller.getSnapshot().answer, null);
          controller.configure({});
          controller.setAnswer('a'); controller.check();
          controller.configure({ readOnly: true });
          controller.retry(); controller.reset(); controller.setAnswer('b');
          assert.equal(controller.getSnapshot().answer, 'a');
          assert.equal(controller.getSnapshot().result?.status, 'correct');
        });
        it('should honor updated configuration for the next interaction without regrading on configure', () => {
          const q = Questions_fx.make('single-select');
          const controller = createQuestionController(q, null, checkers['single-select']);
          controller.setAnswer('b');
          controller.configure({ checkMode: 'on-change' });
          assert.equal(controller.getSnapshot().result, null);
          controller.setAnswer('a');
          assert.equal(controller.getSnapshot().result?.status, 'correct');
        });
      });
    });
  });
});
