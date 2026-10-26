import type { QuizState } from '@types';
import { quizStateSchema } from '../../../schemas/quizStateSchema/quizStateSchema';
import { runStateRequest } from '../../../utils';

export async function saveQuizState(state: QuizState): Promise<void> {
  const validated = quizStateSchema.parse(state);
  await runStateRequest('quizStates', 'readwrite', store => store.put(validated));
}
