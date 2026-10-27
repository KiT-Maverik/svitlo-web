import { assessmentMethods_AssessmentMethod_Ids } from '../../../../Maps/assessmentMethodTaxonomy/index.ids';
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type { Question_Config, TextResource_Config } from '@types';
import { buildQuestion } from './buildQuestion.utils';

const text = (id: string, english: string, ukrainian = english): TextResource_Config => ({
  id,
  blockType: 'text',
  allLocales: false,
  value: { en: english, uk: ukrainian },
});

const base = {
  id: 'question',
  assessmentMethodId: assessmentMethods_AssessmentMethod_Ids.interpretation,
  restrictions: [],
  content: [text('prompt', 'Question', 'Запитання')] as [TextResource_Config],
  explanation: text('explanation', 'Because', 'Тому що'),
  flashcardConfig: { includeInLessonSet: true },
};

describe('Utils', () => {
  describe('Builders', () => {
    describe('BuildQuestion', () => {
      describe('Shared fields', () => {
        it('should preserve identifiers, restrictions, and flashcard settings', () => {
          const result = buildQuestion(
            {
              ...base,
              type: 'answer-with-number',
              correctAnswer: [42],
              placeholder: text('placeholder', 'Enter'),
            },
            'uk-UA',
          );
          assert.equal(result.id, 'question');
          assert.equal(result.assessmentMethodId, assessmentMethods_AssessmentMethod_Ids.interpretation);
          assert.deepEqual(result.restrictions, []);
          assert.deepEqual(result.flashcardConfig, { includeInLessonSet: true });
        });

        it('should localize question content and explanation', () => {
          const result = buildQuestion(
            {
              ...base,
              type: 'answer-with-number',
              correctAnswer: [42],
              placeholder: text('placeholder', 'Enter'),
            },
            'uk-UA',
          );
          assert.deepEqual(result.content, [{ id: 'prompt', blockType: 'text', locale: 'uk-UA', value: 'Запитання' }]);
          assert.deepEqual(result.explanation, {
            id: 'explanation',
            blockType: 'text',
            locale: 'uk-UA',
            value: 'Тому що',
          });
        });

        it('should permit an omitted explanation and flashcard configuration', () => {
          const result = buildQuestion(
            {
              id: 'minimal',
              assessmentMethodId: assessmentMethods_AssessmentMethod_Ids.retrieval,
              type: 'answer-with-number',
              restrictions: [],
              content: [text('prompt', 'Prompt')],
              correctAnswer: [0],
              placeholder: text('placeholder', 'Number'),
            },
            'en-US',
          );
          assert.equal(result.explanation, undefined);
          assert.equal(result.flashcardConfig, undefined);
        });
      });

      describe('Choice answers', () => {
        it('should localize correct, incorrect, and distractor resources for one answer', () => {
          const result = buildQuestion(
            {
              ...base,
              type: 'select-one-answer',
              answers: {
                correct: text('correct', 'Yes', 'Так'),
                incorrect: [text('wrong', 'No', 'Ні')],
                distractors: [text('distractor', 'Maybe', 'Можливо')],
              },
            },
            'uk-UA',
          );
          assert.equal(result.type, 'select-one-answer');
          if (result.type !== 'select-one-answer') return assert.fail('Expected a single-selection question');
          assert.equal(result.answers.correct.blockType, 'text');
          if (result.answers.correct.blockType !== 'text') return assert.fail('Expected localized text');
          assert.equal(result.answers.correct.value, 'Так');
          assert.deepEqual(
            result.answers.incorrect.map(item => item.id),
            ['wrong'],
          );
          assert.deepEqual(
            result.answers.distractors.map(item => item.id),
            ['distractor'],
          );
        });

        it('should preserve the order of multiple correct and incorrect answers', () => {
          const result = buildQuestion(
            {
              ...base,
              type: 'select-multiple-answers',
              answers: {
                correct: [text('yes-2', 'Second'), text('yes-1', 'First')],
                incorrect: [text('no', 'Second no'), text('no', 'First no')],
                distractors: [text('extra', 'Extra')],
              },
            },
            'en-US',
          );
          assert.equal(result.type, 'select-multiple-answers');
          if (result.type !== 'select-multiple-answers') return assert.fail('Expected multiple selection');
          assert.deepEqual(
            result.answers.correct.map(item => item.id),
            ['yes-2', 'yes-1'],
          );
          assert.deepEqual(
            result.answers.incorrect.map(item => item.id),
            ['no', 'no'],
          );
          assert.deepEqual(
            result.answers.distractors.map(item => item.id),
            ['extra'],
          );
        });
      });

      describe('Typed input answers', () => {
        it('should preserve numeric correct answers and localize the placeholder', () => {
          const result = buildQuestion(
            {
              ...base,
              type: 'answer-with-number',
              correctAnswer: [0, 3.5, -2],
              placeholder: text('placeholder', 'Number', 'Число'),
            },
            'uk-UA',
          );
          assert.equal(result.type, 'answer-with-number');
          if (result.type !== 'answer-with-number') return assert.fail('Expected numeric answer');
          assert.deepEqual(result.correctAnswer, [0, 3.5, -2]);
          assert.equal(result.placeholder.value, 'Число');
        });

        it('should localize every accepted text answer without changing its order', () => {
          const result = buildQuestion(
            {
              ...base,
              type: 'answer-with-text',
              correctAnswer: [text('a', 'One', 'Один'), text('b', 'Two', 'Два')],
              placeholder: text('placeholder', 'Type here', 'Введіть'),
            },
            'uk-UA',
          );
          assert.equal(result.type, 'answer-with-text');
          if (result.type !== 'answer-with-text') return assert.fail('Expected text answer');
          assert.deepEqual(
            result.correctAnswer.map(value => value.value),
            ['Один', 'Два'],
          );
          assert.equal(result.placeholder.value, 'Введіть');
        });

        it('should retain an empty list of accepted text answers', () => {
          const result = buildQuestion(
            {
              ...base,
              type: 'answer-with-text',
              correctAnswer: [],
              placeholder: text('placeholder', 'Type'),
            },
            'en-US',
          );
          assert.equal(result.type, 'answer-with-text');
          if (result.type !== 'answer-with-text') return assert.fail('Expected text answer');
          assert.deepEqual(result.correctAnswer, []);
        });
      });

      describe('Blocks and slots', () => {
        it('should localize a block sequence and its distractors in their original order', () => {
          const result = buildQuestion(
            {
              ...base,
              type: 'build-answer-with-blocks',
              correctSequence: [text('two', 'Two', 'Два'), text('one', 'One', 'Один')],
              distractors: [text('extra', 'Extra', 'Зайве')],
              placeholder: text('placeholder', 'Build'),
            },
            'uk-UA',
          );
          assert.equal(result.type, 'build-answer-with-blocks');
          if (result.type !== 'build-answer-with-blocks') return assert.fail('Expected block builder');
          assert.deepEqual(
            result.correctSequence.map(item => item.value),
            ['Два', 'Один'],
          );
          assert.deepEqual(
            result.distractors.map(item => item.value),
            ['Зайве'],
          );
        });

        it('should preserve slot selectors when localizing block-fill answers', () => {
          const result = buildQuestion(
            {
              ...base,
              type: 'fill-blanks-with-blocks',
              placeholder: text('placeholder', 'Drop here'),
              distractors: [text('extra', 'Unused')],
              slots: [{ selector: '#second', correctAnswer: text('answer', 'Right', 'Правильно') }],
            },
            'uk-UA',
          );
          assert.equal(result.type, 'fill-blanks-with-blocks');
          if (result.type !== 'fill-blanks-with-blocks') return assert.fail('Expected block-fill question');
          assert.deepEqual(result.slots, [
            {
              selector: '#second',
              correctAnswer: { id: 'answer', blockType: 'text', locale: 'uk-UA', value: 'Правильно' },
            },
          ]);
        });

        it('should localize text-fill slot answers and retain empty distractors', () => {
          const result = buildQuestion(
            {
              ...base,
              type: 'fill-blanks-with-text',
              placeholder: text('placeholder', 'Type'),
              distractors: [],
              slots: [
                { selector: '#a', correctAnswer: text('first', 'Alpha', 'Альфа') },
                { selector: '#b', correctAnswer: text('second', 'Beta', 'Бета') },
              ],
            },
            'uk-UA',
          );
          assert.equal(result.type, 'fill-blanks-with-text');
          if (result.type !== 'fill-blanks-with-text') return assert.fail('Expected text-fill question');
          assert.deepEqual(result.distractors, []);
          assert.deepEqual(
            result.slots.map(slot => [slot.selector, slot.correctAnswer.value]),
            [
              ['#a', 'Альфа'],
              ['#b', 'Бета'],
            ],
          );
        });

        it('should retain both sides and original ordering of matched resources', () => {
          const result = buildQuestion(
            {
              ...base,
              type: 'match-blocks',
              map: {
                left: [text('l2', 'Left two'), text('l1', 'Left one')],
                right: [text('r1', 'Right one'), text('r2', 'Right two')],
              },
            },
            'en-US',
          );
          assert.equal(result.type, 'match-blocks');
          if (result.type !== 'match-blocks') return assert.fail('Expected matching question');
          assert.deepEqual(
            result.map.left.map(item => item.id),
            ['l2', 'l1'],
          );
          assert.deepEqual(
            result.map.right.map(item => item.id),
            ['r1', 'r2'],
          );
        });

        it('should preserve the order of a sequence and localize its resources', () => {
          const result = buildQuestion(
            {
              ...base,
              type: 'order-sequence',
              sequence: [text('second', 'Second', 'Другий'), text('first', 'First', 'Перший')],
            },
            'uk-UA',
          );
          assert.equal(result.type, 'order-sequence');
          if (result.type !== 'order-sequence') return assert.fail('Expected ordering question');
          assert.deepEqual(
            result.sequence.map(item => item.id),
            ['second', 'first'],
          );
          assert.deepEqual(
            result.sequence.map(item => (item.blockType === 'text' ? item.value : '')),
            ['Другий', 'Перший'],
          );
        });
      });

      describe('Input integrity', () => {
        it('should not modify the supplied question or answer arrays', () => {
          const config: Question_Config = {
            ...base,
            type: 'select-multiple-answers',
            answers: {
              correct: [text('a', 'A')],
              incorrect: [text('b', 'B')],
              distractors: [text('c', 'C')],
            },
          };
          const original = structuredClone(config);
          buildQuestion(config, 'uk-UA');
          assert.deepEqual(config, original);
        });
      });
    });
  });
});
