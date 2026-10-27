import { assessmentMethods_AssessmentMethod_Ids } from '../../../../Maps/assessmentMethodTaxonomy/index.ids';
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type {
  Lesson_Config,
  LessonContentCatalog,
  LessonSection_Config,
  Quiz_Config,
  TextResource_Config,
} from '@types';
import { buildLesson } from './buildLesson.utils';
import { buildLessonConfig } from '../config/buildLessonConfig.utils';
import { buildLessonSectionConfig } from '../config/buildLessonSectionConfig.utils';

const text = (id: string, english: string, ukrainian = english): TextResource_Config => ({
  id,
  blockType: 'text',
  allLocales: false,
  value: { en: english, uk: ukrainian },
});

const lesson = (): Lesson_Config => buildLessonConfig({
  id: 'lesson',
  slug: 'light',
  requireQuiz: true,
  title: 'title',
  sections: {
    allowNavigation: true,
    allowSkipping: false,
    showIndexes: true,
    content: ['theory'],
  },
});

const theory = (): LessonSection_Config => buildLessonSectionConfig({
  id: 'theory',
  lessonId: 'lesson',
  skippable: false,
  name: text('section-name', 'Theory', 'Теорія'),
  content: [
    text('body', 'Body', 'Текст'),
    { id: 'scene', blockType: 'scene', component: 'Scene content' },
    {
      id: 'image',
      blockType: 'image',
      allLocales: false,
      fileLocation: { 'en-US': '/en.png', 'uk-UA': '/uk.png' },
      alt: { 'en-US': 'Light', 'uk-UA': 'Світло' },
    },
  ],
});

const catalog = (): LessonContentCatalog => ({
  text: { title: text('title', 'Light', 'Світло') },
  sections: { theory: theory() },
});

const quiz = (): Quiz_Config => ({
  id: 'quiz',
  lessonId: 'lesson',
  sectionId: 'quiz-section',
  feedbackMode: 'after-completion',
  name: text('quiz-name', 'Quiz', 'Тест'),
  interaction: {
    retries: 0,
    showErrors: false,
    showCorrectAnswers: true,
    allowExplanations: true,
    allowDeferring: false,
    allowQuestionNavigation: false,
    skippable: false,
  },
  questionBank: [
    {
      id: 'q1',
      assessmentMethodId: assessmentMethods_AssessmentMethod_Ids.application,
      type: 'answer-with-number',
      restrictions: [],
      content: [text('prompt', 'Number', 'Число')],
      correctAnswer: [3],
      placeholder: text('placeholder', 'Type', 'Введіть'),
      number: 1,
      weight: 2,
    },
  ],
  results: { visibility: 'hidden', showScore: false },
  screen: {},
});

const build = (locale: 'en-US' | 'uk-UA') => buildLesson(lesson(), locale, catalog());

describe('Utils', () => {
  describe('Builders', () => {
    describe('BuildLesson', () => {
      describe('Lesson metadata', () => {
        it('should preserve lesson identity, slug, and quiz requirement', () => {
          const result = build('uk-UA');
          assert.equal(result.id, 'lesson');
          assert.equal(result.collection, 'lesson');
          assert.equal(result.slug, 'light');
          assert.equal(result.requireQuiz, true);
        });

        it('should localize the title for the requested locale', () => {
          assert.deepEqual(build('uk-UA').title, {
            id: 'title',
            blockType: 'text',
            locale: 'uk-UA',
            value: 'Світло',
          });
        });

        it('should retain navigation, skipping, and index visibility settings', () => {
          const result = build('en-US');
          assert.deepEqual(
            {
              allowNavigation: result.sections.allowNavigation,
              allowSkipping: result.sections.allowSkipping,
              showIndexes: result.sections.showIndexes,
            },
            { allowNavigation: true, allowSkipping: false, showIndexes: true },
          );
        });
      });

      describe('Section content', () => {
        it('should reject unresolved or mismatched references', () => {
          const config = lesson();
          const definitions = catalog();
          assert.throws(
            () => buildLesson({ ...config, title: 'missing' }, 'en-US', definitions),
            /Missing text resource/,
          );
          assert.throws(
            () =>
              buildLesson({ ...config, sections: { ...config.sections, content: ['missing'] } }, 'en-US', definitions),
            /Missing lesson section/,
          );
          assert.throws(
            () =>
              buildLesson(config, 'en-US', {
                ...definitions,
                sections: { theory: { ...theory(), lessonId: 'another-lesson' } },
              }),
            /belongs to another lesson/,
          );
        });

        it('should localize the section name and all resource blocks', () => {
          const result = build('uk-UA');
          const section = result.sections.content[0];
          if ('questionBank' in section) return assert.fail('Expected a lesson section');
          assert.deepEqual(section.name, {
            id: 'section-name',
            blockType: 'text',
            locale: 'uk-UA',
            value: 'Теорія',
          });
          assert.deepEqual(section.content[0], {
            id: 'body',
            blockType: 'text',
            locale: 'uk-UA',
            value: 'Текст',
          });
          assert.deepEqual(section.content[2], {
            id: 'image',
            blockType: 'image',
            locale: 'uk-UA',
            fileLocation: '/uk.png',
            alt: 'Світло',
          });
        });

        it('should preserve a scene resource and its position', () => {
          const result = build('en-US');
          const section = result.sections.content[0];
          if ('questionBank' in section) return assert.fail('Expected a lesson section');
          assert.deepEqual(section.content[1], { id: 'scene', blockType: 'scene', component: 'Scene content' });
          assert.deepEqual(
            section.content.map(block => block.blockType),
            ['text', 'scene', 'image'],
          );
        });

        it('should preserve section IDs and skippable settings', () => {
          const result = build('en-US');
          const section = result.sections.content[0];
          if ('questionBank' in section) return assert.fail('Expected a lesson section');
          assert.equal(section.id, 'theory');
          assert.equal(section.collection, 'lessonSection');
          assert.equal(section.lessonId, 'lesson');
          assert.equal(section.skippable, false);
        });

        it('should convert quiz sections without disturbing their order among lesson sections', () => {
          const config = lesson();
          const definitions = catalog();
          const summary: LessonSection_Config = buildLessonSectionConfig({
            id: 'summary',
            lessonId: 'lesson',
            skippable: true,
            name: text('summary-name', 'Summary'),
            content: [text('summary-text', 'Finish')],
          });
          config.sections.content.push('quiz-section', 'summary');
          const result = buildLesson(config, 'uk-UA', {
            ...definitions,
            sections: { ...definitions.sections, 'quiz-section': quiz(), summary },
          });
          assert.deepEqual(
            result.sections.content.map(section => section.id),
            ['theory', 'quiz', 'summary'],
          );
          const convertedQuiz = result.sections.content[1];
          if (!('questionBank' in convertedQuiz)) return assert.fail('Expected a quiz section');
          assert.deepEqual(convertedQuiz.name, {
            id: 'quiz-name',
            blockType: 'text',
            locale: 'uk-UA',
            value: 'Тест',
          });
          assert.deepEqual(
            convertedQuiz.questionBank.map(question => ({
              id: question.id,
              number: question.number,
              weight: question.weight,
            })),
            [{ id: 'q1', number: 1, weight: 2 }],
          );
          assert.deepEqual(convertedQuiz.questionBank[0].content[0], {
            id: 'prompt',
            blockType: 'text',
            locale: 'uk-UA',
            value: 'Число',
          });
        });
      });

      describe('Server-side scene localization', () => {
        it('should select only the requested language for each scene', () => {
          const config = lesson();
          config.sceneLocales = {
            ray: { en: { title: 'Ray' }, uk: { title: 'Промінь' } },
            practice: { en: { title: 'Practice' }, uk: { title: 'Практика' } },
          };
          assert.deepEqual(buildLesson(config, 'uk-UA', catalog()).sceneLocale, {
            ray: { title: 'Промінь' },
            practice: { title: 'Практика' },
          });
        });

        it('should fall back to English for scenes missing a requested translation', () => {
          const config = lesson();
          config.sceneLocales = { practice: { en: { title: 'Practice' }, uk: { title: 'Практика' } } };
          assert.deepEqual(buildLesson(config, 'pl-PL', catalog()).sceneLocale, { practice: { title: 'Practice' } });
        });

        it('should reject scenes without either the selected language or English fallback', () => {
          const config = lesson();
          config.sceneLocales = { practice: { uk: { title: 'Практика' } } };
          assert.throws(() => buildLesson(config, 'de-DE', catalog()), /no translation/);
        });
      });

      describe('Input integrity', () => {
        it('should not mutate lesson content, nested resources, or quiz configuration', () => {
          const config = lesson();
          const definitions = catalog();
          config.sections.content.push('quiz-section');
          const before = structuredClone(config);
          buildLesson(config, 'uk-UA', {
            ...definitions,
            sections: { ...definitions.sections, 'quiz-section': quiz() },
          });
          assert.deepEqual(config, before);
        });
      });
    });
  });
});
