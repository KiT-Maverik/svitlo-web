import type { QuizState } from '@types';
import { quizStateSchema } from '../../../schemas/quizStateSchema/quizStateSchema';
import { runStateRequest } from '../../../utils';

export async function listQuizStates(quizId: QuizState['quizId']): Promise<QuizState[]> {
  const values: unknown[] = await runStateRequest('quizStates', 'readonly', store => store.index('quizId').getAll(quizId));
  return values.map(value => quizStateSchema.parse(value));
}
