import type { AnswerWithNumberQuestion } from '@/components/widgets/questions/types';
import type { QuestionAttemptProps } from '..';

const numeric: AnswerWithNumberQuestion = {
  id: 'n',
  type: 'numeric',
  prompt: '?',
  explanation: '.',
  expected: 1,
  tolerance: 0,
};

const options: QuestionAttemptProps<'numeric'> = {
  question: numeric,
  slots: {
    answers: context => {
      context.setAnswer('12');
      // @ts-expect-error A numeric slot cannot write an array answer.
      context.setAnswer(['12']);
      return null;
    },
  },
  onAnswer: event => {
    const answer: string = event.answer;
    void answer;
  },
};
void options;
