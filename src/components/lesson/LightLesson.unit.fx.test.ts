import { createElement, type ComponentProps } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LightLesson from './LightLesson';
import { LessonSteps_fx } from './LessonSteps.unit.fx.test';
import { QuestionProgress_fx } from './QuestionProgress.unit.fx.test';
import { Celebration_fx } from './Celebration.unit.fx.test';
import { locale } from './locales/uk-UA';

type Props = ComponentProps<typeof LightLesson>;

const questions = [{
  id: 'sample-question',
  prompt: 'Which answer is correct?',
  type: 'select-one-answer',
}] as unknown as Props['questions'];

const quiz = {
  id: 'sample-quiz',
  sectionId: 'quiz',
  questionBank: [{ ...questions[0], weight: 1, number: 1 }],
  feedbackMode: 'immediate',
  interaction: {
    retries: 0, showErrors: true, showCorrectAnswers: true,
    allowExplanations: true, allowDeferring: false,
    allowQuestionNavigation: true, skippable: false,
  },
  results: { visibility: 'immediate', showScore: true },
  screen: {},
} satisfies Props['quiz'];

const lesson = {
  id: 'sample-lesson',
  slug: 'sample-lesson',
  requireQuiz: true,
  title: { id: 'title', blockType: 'text', locale: 'uk-UA', value: 'Sample lesson' },
  sections: {
    allowNavigation: true, allowSkipping: true, showIndexes: true,
    content: [
      { id: 'theory', name: { value: 'Theory' } },
      { id: 'practice', name: { value: 'Practice' } },
      quiz,
    ],
  },
} as unknown as Props['lesson'];

const defaults = {
  lesson, quiz, questions,
  sectionContent: [createElement('p', { key: 'theory' }, 'Theory body'), createElement('p', { key: 'practice' }, 'Practice body')],
} satisfies Props;

export const LightLesson_fx = {
  defaults,
  render: (props: Partial<Props> = {}) => render(createElement(LightLesson, { ...defaults, ...props })),
  child: {
    steps: LessonSteps_fx.selectors,
    progress: QuestionProgress_fx.selectors,
    celebration: Celebration_fx.selectors,
  },
  selectors: {
    quiz: () => screen.getByRole('region', { name: locale.lightLesson.test }),
    question: () => screen.getByRole('group', { name: questions[0].prompt }),
    check: () => screen.getByRole('button', { name: 'Check answer' }),
    finish: () => screen.getByRole('button', { name: locale.lightLesson.finish }),
    sound: () => screen.getByRole('checkbox', { name: locale.lightLesson.sound }),
  },
  actions: {
    check: async () => userEvent.click(LightLesson_fx.selectors.check()),
    finish: async () => userEvent.click(LightLesson_fx.selectors.finish()),
  },
} as const;
