import type { CheckResult } from './check-result';
export interface FeedbackVisibility {
  showErrors?: boolean;
  showCorrectAnswers?: boolean;
}
export type ChoiceFeedback = 'correct' | 'incorrect' | 'missed';
export const isGraded = (result?: CheckResult | null): boolean =>
  result?.status === 'correct' || result?.status === 'incorrect';
/** Presentation only; never grades or modifies an answer. */
export function choiceFeedback(
  result: CheckResult | null | undefined,
  selected: boolean,
  correct: boolean,
  { showErrors = true, showCorrectAnswers = true }: FeedbackVisibility,
): ChoiceFeedback | undefined {
  if (!isGraded(result)) return;
  if (correct && showCorrectAnswers) return selected ? 'correct' : 'missed';
  if (selected && !correct && showErrors) return 'incorrect';
}

export function resultFeedback(
  result: CheckResult | null | undefined,
  { showErrors = true, showCorrectAnswers = true }: FeedbackVisibility,
): 'correct' | 'incorrect' | undefined {
  if (!isGraded(result)) return;
  if (result?.status === 'correct') return showCorrectAnswers ? 'correct' : undefined;
  return showErrors ? 'incorrect' : undefined;
}
