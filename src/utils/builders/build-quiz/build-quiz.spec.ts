import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type { Quiz_Config, TextResource_Config } from '@types';
import { buildQuiz } from './build-quiz.utils';

const text = (id: string, english: string, ukrainian = english): TextResource_Config => ({
  id, blockType: 'text', allLocales: false,
  value: { 'en-US': english, 'uk-UA': ukrainian },
});

const question = (id: string, number: number): Quiz_Config['questionBank'][number] => ({
  id, type: 'answer-with-number', restrictions: [],
  content: [text('prompt-' + id, 'Question', 'Запитання')],
  correctAnswer: [42],
  placeholder: text('placeholder-' + id, 'Type', 'Введіть'),
  number, weight: number + 1,
});

const quiz = (): Quiz_Config => ({
  id: 'quiz', sectionId: 'section', feedbackMode: 'immediate',
  name: text('quiz-name', 'Quiz', 'Тест'),
  grading: { mode: 'percentage', successThreshold: 70 },
  maxDuration: 120,
  interaction: {
    retries: -1, showErrors: true, showCorrectAnswers: true,
    allowExplanations: true, allowDeferring: false,
    allowQuestionNavigation: true, skippable: false,
  },
  questionBank: [question('one', 1), question('two', 2)],
  results: { visibility: 'after-review', showScore: true },
  screen: {},
});

describe('Utils', () => {
  describe('Builders', () => {
    describe('BuildQuiz', () => {
      describe('Questions and metadata', () => {
        it('should preserve quiz metadata and interaction settings', () => {
          const config = quiz();
          const result = buildQuiz(config, 'uk-UA');
          assert.equal(result.id, config.id);
          assert.equal(result.sectionId, config.sectionId);
          assert.deepEqual(result.name, {
            id: 'quiz-name', blockType: 'text', locale: 'uk-UA', value: 'Тест',
          });
          assert.equal(result.feedbackMode, config.feedbackMode);
          assert.deepEqual(result.grading, config.grading);
          assert.deepEqual(result.interaction, config.interaction);
          assert.deepEqual(result.results, config.results);
          assert.equal(result.maxDuration, 120);
        });

        it('should localize all questions and retain their number and weight', () => {
          const result = buildQuiz(quiz(), 'uk-UA');
          assert.deepEqual(result.questionBank.map(({ id, number, weight }) => ({
            id, number, weight,
          })), [
            { id: 'one', number: 1, weight: 2 },
            { id: 'two', number: 2, weight: 3 },
          ]);
          assert.deepEqual(result.questionBank.map(item => item.content[0]), [
            { id: 'prompt-one', blockType: 'text', locale: 'uk-UA', value: 'Запитання' },
            { id: 'prompt-two', blockType: 'text', locale: 'uk-UA', value: 'Запитання' },
          ]);
        });

        it('should preserve the configured question bank order', () => {
          const config = quiz();
          config.questionBank = [question('last', 9), question('first', 1)];
          assert.deepEqual(buildQuiz(config, 'en-US').questionBank.map(item => item.id), [
            'last', 'first',
          ]);
        });
      });

      describe('Welcome and ending screens', () => {
        it('should keep absent optional screens absent', () => {
          const result = buildQuiz(quiz(), 'en-US');
          assert.deepEqual(result.screen, { welcome: undefined, ending: undefined });
        });

        it('should localize every welcome-screen resource', () => {
          const config = quiz();
          config.screen.welcome = {
            resources: [text('welcome-1', 'First', 'Перший'), text('welcome-2', 'Second', 'Другий')],
          };
          const result = buildQuiz(config, 'uk-UA');
          assert.deepEqual(result.screen.welcome?.resources.map(item => item.id), [
            'welcome-1', 'welcome-2',
          ]);
          assert.deepEqual(result.screen.welcome?.resources.map(item =>
            item.blockType === 'text' ? item.value : ''), ['Перший', 'Другий']);
        });

        it('should retain custom ending content and its visibility flag', () => {
          const config = quiz();
          config.screen.ending = {
            success: { showDefaultContent: false, resources: [text('success', 'Done', 'Готово')] },
            fail: { showDefaultContent: true, resources: [text('fail', 'Retry', 'Повторіть')] },
          };
          const result = buildQuiz(config, 'uk-UA');
          assert.deepEqual(result.screen.ending?.success, {
            showDefaultContent: false,
            resources: [{ id: 'success', blockType: 'text', locale: 'uk-UA', value: 'Готово' }],
          });
          assert.deepEqual(result.screen.ending?.fail, {
            showDefaultContent: true,
            resources: [{ id: 'fail', blockType: 'text', locale: 'uk-UA', value: 'Повторіть' }],
          });
        });

        it('should enable default ending content when no custom resources are configured', () => {
          const config = quiz();
          config.screen.ending = {
            success: { showDefaultContent: true },
            fail: { showDefaultContent: true },
          };
          const result = buildQuiz(config, 'en-US');
          assert.deepEqual(result.screen.ending, {
            success: { showDefaultContent: true },
            fail: { showDefaultContent: true },
          });
        });
      });

      describe('Input integrity', () => {
        it('should not mutate a quiz or its nested question configurations', () => {
          const config = quiz();
          config.screen.welcome = { resources: [text('welcome', 'Welcome')] };
          const before = structuredClone(config);
          buildQuiz(config, 'uk-UA');
          assert.deepEqual(config, before);
        });
      });
    });
  });
});
