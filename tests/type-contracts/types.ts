import type { QuestionOf, Submission } from '../../src/components/widgets/questions/model';
import type { QuestionViewProps } from '../../src/components/widgets/questions/helpers';
declare const numeric: QuestionOf<'numeric'>;
// @ts-expect-error AnswerWithNumber values are raw strings, not arrays.
const invalid: Submission = { question: numeric, answer: { type: 'numeric', value: [] } };
// @ts-expect-error A numeric question cannot use a matching answer.
const mismatch: Submission = { question: numeric, answer: { type: 'matching', value: {} } };
// @ts-expect-error Controlled UI rejects answer shapes of a different type.
const invalidView: QuestionViewProps = { type: 'numeric', question: numeric, value: [], onChange: () => {} };
void [invalid, mismatch, invalidView];

import type { SelectMultipleAnswersQuestion, AnswerWithNumberQuestion } from '@types';
import { QuestionType } from '@types';
import type { QuestionAttemptProps } from '../../src/components/widgets/questions/helpers';
const extended: SelectMultipleAnswersQuestion = {
  id: 'extended', type: QuestionType.SelectMultipleAnswers, prompt: '?', explanation: '.', options: [{ id: 'a', label: 'A' }], correctIds: ['a'],
  curriculum: { topicId: 'math', objectives: ['identify'] },
};
// @ts-expect-error Extensions have a checked shape.
const invalidExtension: SelectMultipleAnswersQuestion = { ...extended, curriculum: { topicId: 12, objectives: [] } };
const extendedAnswerWithNumber: AnswerWithNumberQuestion = { id: 'n', type: 'numeric', prompt: '?', explanation: '.', expected: 1, tolerance: 0, authorDifficulty: 'easy' };
const options: QuestionAttemptProps<'numeric'> = { question: extendedAnswerWithNumber, slots: {
  answers: context => {
    context.setAnswer('12');
    // @ts-expect-error A numeric slot cannot write an array answer.
    context.setAnswer(['12']);
    return null;
  },
}, onAnswer: event => {
  const answer: string = event.answer;
  void answer;
} };
void [extended, invalidExtension, options];
