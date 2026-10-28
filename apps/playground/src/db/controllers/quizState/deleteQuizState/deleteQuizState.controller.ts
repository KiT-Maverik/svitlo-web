import type { QuizState } from '@types';
import { runStateRequest } from '../../../utils';

export async function deleteQuizState(id: QuizState['id']): Promise<void> {
  await runStateRequest('quizStates', 'readwrite', store => store.delete(id));
}
