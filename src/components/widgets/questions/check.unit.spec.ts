import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { checkers, normalizeText, parseAnswerWithNumber } from './check';
import { Questions_fx } from './questions.unit.fx';

describe('Widgets', () => {
  describe('Questions', () => {
    describe('SingleSelect', () => {
      it('should grade only the correct option identifier, not its label or position', () => {
        const q = Questions_fx.make('single-select');
        const rearranged = { ...q, options: [...q.options].reverse().map(item => ({ ...item, label: 'Identical' })) };
        assert.deepEqual(checkers['single-select'](rearranged, 'a'), { status: 'correct' });
        assert.deepEqual(checkers['single-select'](rearranged, 'b'), { status: 'incorrect' });
      });
      it('should distinguish empty selections from foreign identifiers', () => {
        const q = Questions_fx.make('single-select');
        assert.deepEqual(checkers['single-select'](q, null), { status: 'incomplete', reason: 'empty' });
        assert.deepEqual(checkers['single-select'](q, 'missing'), { status: 'invalid', reason: 'unknown-id' });
      });
      it('should reject a malformed correct identifier', () => {
        const q = Questions_fx.make('single-select');
        assert.deepEqual(checkers['single-select']({ ...q, correctId: 'missing' }, 'a'), {
          status: 'invalid',
          reason: 'definition',
        });
      });
    });
    describe('MultipleSelect', () => {
      it('should accept the exact answer set regardless of selection order', () => {
        const q = Questions_fx.make('multiple-select');
        assert.equal(checkers['multiple-select'](q, ['a', 'b']).status, 'correct');
        assert.equal(checkers['multiple-select'](q, ['b', 'a']).status, 'correct');
      });
      it('should reject a missing required item and an extra item even with correct overlap', () => {
        const q = Questions_fx.make('multiple-select');
        assert.equal(checkers['multiple-select'](q, ['a']).status, 'incorrect');
        assert.equal(checkers['multiple-select'](q, ['a', 'b', 'c']).status, 'incorrect');
      });
      it('should distinguish empty, duplicate and unknown selections', () => {
        const q = Questions_fx.make('multiple-select');
        assert.deepEqual(checkers['multiple-select'](q, []), { status: 'incomplete', reason: 'empty' });
        assert.deepEqual(checkers['multiple-select'](q, ['a', 'a']), { status: 'invalid', reason: 'duplicate-id' });
        assert.deepEqual(checkers['multiple-select'](q, ['unknown']), { status: 'invalid', reason: 'unknown-id' });
      });
    });
    describe('Matching', () => {
      it('should grade complete mappings by stable left and right identifiers', () => {
        const q = Questions_fx.make('matching');
        assert.equal(checkers.matching(q, { b: 'y', a: 'x' }).status, 'correct');
        assert.equal(checkers.matching(q, { a: 'y', b: 'x' }).status, 'incorrect');
      });
      it('should require all pairs and report incomplete drafts', () => {
        const q = Questions_fx.make('matching');
        assert.deepEqual(checkers.matching(q, {}), { status: 'incomplete', reason: 'empty' });
        assert.deepEqual(checkers.matching(q, { a: 'x' }), { status: 'incomplete', reason: 'missing-items' });
      });
      it('should reject duplicate targets and foreign source or target IDs', () => {
        const q = Questions_fx.make('matching');
        assert.deepEqual(checkers.matching(q, { a: 'x', b: 'x' }), { status: 'invalid', reason: 'duplicate-id' });
        assert.deepEqual(checkers.matching(q, { z: 'y' }), { status: 'invalid', reason: 'unknown-id' });
        assert.deepEqual(checkers.matching(q, { a: 'z' }), { status: 'invalid', reason: 'unknown-id' });
      });
      it('should reject duplicated authored pair definitions', () => {
        const q = Questions_fx.make('matching');
        assert.equal(checkers.matching({ ...q, pairs: [q.pairs[0], q.pairs[0]] }, {}).status, 'invalid');
      });
    });
    describe('AnswerWithText', () => {
      it('should accept independently authored alternatives under configured normalization', () => {
        const q = Questions_fx.make('short-text');
        assert.equal(checkers['short-text'](q, '  HELLO   WORLD ').status, 'correct');
        assert.equal(checkers['short-text'](q, 'hi').status, 'correct');
        assert.equal(checkers['short-text'](q, 'other').status, 'incorrect');
      });
      it('should make each normalization switch independently observable', () => {
        const q = Questions_fx.make('short-text');
        const answer = '  HELLO   WORLD ';
        for (const flag of ['trim', 'collapseWhitespace', 'ignoreCase'] as const) {
          const changed = { ...q, normalization: { ...q.normalization, [flag]: false } };
          assert.equal(checkers['short-text'](changed, answer).status, 'incorrect', flag);
        }
        assert.equal(
          normalizeText('  A\t B ', { trim: false, collapseWhitespace: false, ignoreCase: false }),
          '  A\t B ',
        );
      });
      it('should report blank Unicode whitespace as incomplete', () => {
        const q = Questions_fx.make('short-text');
        assert.deepEqual(checkers['short-text'](q, ' \t\n'), { status: 'incomplete', reason: 'empty' });
      });
    });
    describe('AnswerWithNumber', () => {
      it('should accept decimal point, decimal comma, signs and the inclusive tolerance boundary', () => {
        const q = Questions_fx.make('numeric');
        for (const value of ['2.4', '2,6', ' +2.5 ', '2.500']) {
          assert.equal(checkers.numeric(q, value).status, 'correct', value);
        }
        assert.equal(parseAnswerWithNumber('-,5'), -0.5);
        assert.equal(parseAnswerWithNumber('0'), 0);
      });
      it('should reject values outside tolerance including negative numbers and zero', () => {
        const q = Questions_fx.make('numeric');
        for (const value of ['0', '-2.5', '2.61']) {
          assert.equal(checkers.numeric(q, value).status, 'incorrect', value);
        }
      });
      it('should reject scientific notation, nonfinite input, separators and partial numbers', () => {
        const q = Questions_fx.make('numeric');
        for (const value of ['1e2', 'Infinity', 'NaN', '0x10', '1 000', '2.5x', '--1', '.', '1,2.3', '9'.repeat(400)]) {
          assert.deepEqual(checkers.numeric(q, value), { status: 'invalid', reason: 'number-format' }, value);
        }
      });
      it('should distinguish empty input from invalid numeric input', () => {
        const q = Questions_fx.make('numeric');
        assert.deepEqual(checkers.numeric(q, ' '), { status: 'incomplete', reason: 'empty' });
        assert.deepEqual(checkers.numeric({ ...q, tolerance: -1 }, '2.5'), { status: 'invalid', reason: 'definition' });
        assert.deepEqual(checkers.numeric({ ...q, expected: Infinity }, '2.5'), {
          status: 'invalid',
          reason: 'definition',
        });
      });
      it('should include a decimal rounding boundary in tolerance', () => {
        const q = { ...Questions_fx.make('numeric'), expected: 0.2, tolerance: 0.1 };
        assert.equal(checkers.numeric(q, '0.3').status, 'correct');
      });
      it('should apply exact matching when tolerance is zero', () => {
        const q = { ...Questions_fx.make('numeric'), tolerance: 0 };
        assert.equal(checkers.numeric(q, '2.5').status, 'correct');
        assert.equal(checkers.numeric(q, '2.50000001').status, 'incorrect');
      });
    });
    describe('OrderSequence', () => {
      it('should grade complete ordering by position without mutating the given array', () => {
        const q = Questions_fx.make('ordering');
        const answer = ['a', 'b', 'c'];
        assert.equal(checkers.ordering(q, answer).status, 'correct');
        assert.deepEqual(answer, ['a', 'b', 'c']);
        assert.equal(checkers.ordering(q, ['c', 'b', 'a']).status, 'incorrect');
      });
      it('should reject incomplete, duplicate and unknown item sequences', () => {
        const q = Questions_fx.make('ordering');
        assert.equal(checkers.ordering(q, []).status, 'incomplete');
        assert.deepEqual(checkers.ordering(q, ['a']), { status: 'incomplete', reason: 'missing-items' });
        assert.deepEqual(checkers.ordering(q, ['a', 'a']), { status: 'invalid', reason: 'duplicate-id' });
        assert.deepEqual(checkers.ordering(q, ['unknown']), { status: 'invalid', reason: 'unknown-id' });
      });
    });
    describe('BuildAnswerWithBlocks', () => {
      it('should accept alternate authored sequences and reject an extra block', () => {
        const q = Questions_fx.make('block-builder');
        assert.equal(checkers['block-builder'](q, ['a', 'b']).status, 'correct');
        assert.equal(checkers['block-builder'](q, ['b', 'a']).status, 'correct');
        assert.equal(checkers['block-builder'](q, ['a', 'b', 'c']).status, 'incorrect');
      });
      it('should distinguish extendable prefixes from incorrect partial sequences', () => {
        const q = Questions_fx.make('block-builder');
        assert.deepEqual(checkers['block-builder'](q, ['a']), { status: 'incomplete', reason: 'missing-items' });
        assert.equal(checkers['block-builder'](q, ['c']).status, 'incorrect');
        assert.equal(checkers['block-builder'](q, []).status, 'incomplete');
      });
      it('should reject duplicates or unknown blocks', () => {
        const q = Questions_fx.make('block-builder');
        assert.equal(checkers['block-builder'](q, ['a', 'a']).status, 'invalid');
        assert.equal(checkers['block-builder'](q, ['invalid']).status, 'invalid');
      });
    });
    describe('FillBlanksWithBlocks', () => {
      it('should grade complete positions rather than the set of selected blocks', () => {
        const q = Questions_fx.make('fill-blanks-drag');
        assert.equal(checkers['fill-blanks-drag'](q, { second: 'b', first: 'a' }).status, 'correct');
        assert.equal(checkers['fill-blanks-drag'](q, { first: 'b', second: 'a' }).status, 'incorrect');
      });
      it('should distinguish empty, partially filled, duplicated and foreign blocks', () => {
        const q = Questions_fx.make('fill-blanks-drag');
        assert.equal(checkers['fill-blanks-drag'](q, { first: null, second: null }).status, 'incomplete');
        assert.deepEqual(checkers['fill-blanks-drag'](q, { first: 'a', second: null }), {
          status: 'incomplete',
          reason: 'missing-items',
        });
        assert.deepEqual(checkers['fill-blanks-drag'](q, { first: 'a', second: 'a' }), {
          status: 'invalid',
          reason: 'duplicate-id',
        });
        assert.equal(checkers['fill-blanks-drag'](q, { third: 'c' }).status, 'invalid');
      });
    });
    describe('FillBlanksWithText', () => {
      it('should grade multiple textual blanks using their own alternatives', () => {
        const q = Questions_fx.make('fill-blanks-text');
        assert.equal(checkers['fill-blanks-text'](q, { first: ' a ', second: ' BETA ' }).status, 'correct');
        assert.equal(checkers['fill-blanks-text'](q, { first: 'Alpha', second: 'wrong' }).status, 'incorrect');
      });
      it('should require all fields and reject unknown blank IDs', () => {
        const q = Questions_fx.make('fill-blanks-text');
        assert.deepEqual(checkers['fill-blanks-text'](q, { first: 'Alpha', second: '' }), {
          status: 'incomplete',
          reason: 'missing-items',
        });
        assert.deepEqual(checkers['fill-blanks-text'](q, { first: '', second: '' }), {
          status: 'incomplete',
          reason: 'empty',
        });
        assert.deepEqual(checkers['fill-blanks-text'](q, { foreign: 'Alpha' }), {
          status: 'invalid',
          reason: 'unknown-id',
        });
      });
    });
  });
});
