'use client';

import { createContext, useContext, useReducer, type ReactNode } from 'react';

export type Progress = { step: number; unlocked: number; cardsDone: boolean; testDone: boolean };
export type ProgressAction = { type: 'next' } | { type: 'skip' } | { type: 'back' } | { type: 'visit'; step: number } | { type: 'cardsDone' } | { type: 'testDone' };
export const initialProgress: Progress = { step: 0, unlocked: 0, cardsDone: false, testDone: false };
export function canAdvance(state: Progress) { return state.step < 3 && (state.step !== 2 || state.cardsDone); }
export function progressReducer(state: Progress, action: ProgressAction): Progress {
  switch (action.type) {
    case 'next': return canAdvance(state) ? { ...state, step: state.step + 1, unlocked: Math.max(state.unlocked, state.step + 1) } : state;
    case 'skip': return state.step < 3 ? { ...state, step: state.step + 1, unlocked: Math.max(state.unlocked, state.step + 1) } : state;
    case 'back': return { ...state, step: Math.max(0, state.step - 1) };
    case 'visit': return Number.isInteger(action.step) && action.step >= 0 && action.step <= state.unlocked ? { ...state, step: action.step } : state;
    case 'cardsDone': return { ...state, cardsDone: true };
    case 'testDone': return { ...state, testDone: true };
  }
}
const Context = createContext<{ progress: Progress; dispatch: React.Dispatch<ProgressAction> } | null>(null);
export function LessonProgressProvider({ children }: { children: ReactNode }) {
  const [progress, dispatch] = useReducer(progressReducer, initialProgress);
  return <Context.Provider value={{ progress, dispatch }}>{children}</Context.Provider>;
}
export function useLessonProgress() {
  const value = useContext(Context);
  if (!value) throw new Error('LessonProgressProvider is required');
  return value;
}
