import type { QuizState } from '@types';
import { quizStateSchema } from '../../../schemas/quizStateSchema/quizStateSchema';
import { updateState } from '../../../utils';

export function updateQuizState(
  id: QuizState['id'],
  change: (current: QuizState) => QuizState,
): Promise<QuizState | undefined> {
  return updateState('quizStates', id, value => quizStateSchema.parse(value), change);
}
