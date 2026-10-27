import { isGraded } from './feedback';
import type { AnswerMap, QuestionOf, QuestionType } from '@/components/widgets/questions/types';
import type { CheckResult } from './check-result';
import type { AttemptEvent, AttemptOptions, AttemptState } from './attempt-model';

function canonical(value: unknown): string {
  if (Array.isArray(value)) return JSON.stringify(value.map(v => canonical(v)));
  if (value !== null && typeof value === 'object')
    return JSON.stringify(
      Object.entries(value)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([key, v]) => [key, canonical(v)]),
    );
  return JSON.stringify(value);
}
export function answersEqual(type: QuestionType, a: unknown, b: unknown): boolean {
  if (type === 'multiple-select' && Array.isArray(a) && Array.isArray(b))
    return canonical([...a].sort()) === canonical([...b].sort());
  return canonical(a) === canonical(b);
}
/** UI-independent state machine. Events originate in actions, never render/effects. */
export function createQuestionController<K extends QuestionType>(
  question: QuestionOf<K>,
  initial: AnswerMap[K],
  checker: (q: QuestionOf<K>, a: AnswerMap[K]) => CheckResult,
  initialOptions: AttemptOptions<K> = {},
) {
  const first = structuredClone(initial);
  const fresh = (): AttemptState<K> => ({
    answer: structuredClone(first),
    result: null,
    hasInteracted: false,
    isModified: false,
    hasChecked: false,
    attemptNumber: 1,
  });
  let state: AttemptState<K> =
    initialOptions.initialAnswer === undefined
      ? fresh()
      : {
          answer: structuredClone(initialOptions.initialAnswer),
          result: initialOptions.initialResult ?? null,
          hasInteracted: true,
          isModified: !answersEqual(question.type, initialOptions.initialAnswer, first),
          hasChecked: Boolean(initialOptions.initialResult),
          attemptNumber: 1,
        };
  let options = initialOptions;
  const listeners = new Set<() => void>();
  const locked = () => Boolean(options.disabled || options.readOnly || state.result);
  const event = (): AttemptEvent<K> => ({ ...structuredClone(state), question });
  function commit(next: AttemptState<K>) {
    state = next;
    listeners.forEach(listener => listener());
  }
  function evaluate(answer: AnswerMap[K], result = checker(question, answer)) {
    if (locked()) return;
    commit({ ...state, answer: structuredClone(answer), result, hasChecked: true });
    const snapshot = event();
    const handlers = options;
    handlers.onCheck?.({ ...structuredClone(snapshot), result: structuredClone(result) });
    if (result.status === 'correct' || result.status === 'incorrect') {
      handlers.onAnswer?.({ ...structuredClone(snapshot), result: structuredClone(result) });
      if (result.status === 'correct')
        handlers.onCorrect?.({ ...structuredClone(snapshot), result: structuredClone(result) });
      else handlers.onIncorrect?.({ ...structuredClone(snapshot), result: structuredClone(result) });
    }
  }
  const isReadyToCheck = () => {
    if (!isGraded(checker(question, state.answer))) return false;
    // A wrong short sequence is still unfinished in the block editor.
    if (question.type === 'block-builder' && 'acceptedSequences' in question && Array.isArray(state.answer)) {
      return state.answer.length >= Math.min(...question.acceptedSequences.map(sequence => sequence.length));
    }
    return true;
  };
  return {
    isReadyToCheck,
    getSnapshot: () => state,
    subscribe: (listener: () => void) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    configure: (next: AttemptOptions<K>) => {
      options = next;
    },
    setAnswer: (answer: AnswerMap[K]) => {
      if (locked() || answersEqual(question.type, state.answer, answer)) return;
      const next = structuredClone(answer);
      commit({ ...state, answer: next, hasInteracted: true, isModified: !answersEqual(question.type, next, first) });
      const changed = state;
      options.onChange?.(event());
      if (state === changed && options.checkMode === 'on-change' && !locked()) {
        const result = checker(question, next);
        // Empty, incomplete and invalid edits remain editable, including deselection.
        if (isGraded(result) && isReadyToCheck()) evaluate(next, result);
      }
    },
    check: () => {
      if (isReadyToCheck()) evaluate(state.answer);
    },
    retry: () => {
      if (options.disabled || options.readOnly || !state.hasChecked) return;
      commit({ ...state, result: null, hasChecked: false, attemptNumber: state.attemptNumber + 1 });
      options.onRetry?.(event());
    },
    reset: () => {
      if (options.disabled || options.readOnly) return;
      commit(fresh());
      options.onReset?.(event());
    },
  };
}
