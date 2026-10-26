import type { QuizState } from '@types';
import { quizStateSchema } from '../../../schemas/quizStateSchema/quizStateSchema';
import { runStateRequest } from '../../../utils';

export async function getQuizState(id: QuizState['id']): Promise<QuizState | undefined> {
  const value: unknown = await runStateRequest('quizStates', 'readonly', store => store.get(id));
  return value === undefined ? undefined : quizStateSchema.parse(value);
}
