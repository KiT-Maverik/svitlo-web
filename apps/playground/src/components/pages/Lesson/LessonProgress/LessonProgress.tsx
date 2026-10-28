'use client';

import { createContext, useContext, useEffect, useReducer, useRef, type ReactNode } from 'react';
import type { LessonState } from '@types';
import { createLessonState, getQuizState, listLessonStates, saveLessonState } from '@/db';

export type Progress = {
  step: number;
  lastStep: number;
  unlocked: number;
  testDone: boolean;
  ready: boolean;
  completed: Record<string, boolean>;
  skipped: string[];
  quizStateId?: string;
  quizSectionId?: string;
};
export type ProgressAction =
  | { type: 'next' | 'skip' | 'back' | 'testDone' | 'resumeQuiz' }
  | { type: 'visit'; step: number }
  | { type: 'linkQuiz'; id: string }
  | { type: 'hydrate'; progress: Progress };

export const initialProgress: Progress = {
  step: 0,
  lastStep: 0,
  unlocked: 0,
  testDone: false,
  ready: false,
  completed: {},
  skipped: [],
};
export function canAdvance(state: Progress) {
  return state.ready && state.step < state.lastStep;
}

export function progressReducer(
  state: Progress,
  action: ProgressAction,
  sectionIds: readonly string[],
  quizSectionId?: string,
): Progress {
  switch (action.type) {
    case 'hydrate':
      return action.progress;
    case 'next': {
      if (!state.ready || state.step >= sectionIds.length - 1) return state;
      const id = sectionIds[state.step];
      if (id === quizSectionId && !state.testDone && !state.skipped.includes(id)) return state;
      return {
        ...state,
        step: state.step + 1,
        unlocked: Math.max(state.unlocked, state.step + 1),
        completed: { ...state.completed, [id]: true },
      };
    }
    case 'skip': {
      if (!state.ready || state.step >= sectionIds.length) return state;
      const id = sectionIds[state.step];
      const step = Math.min(state.step + 1, sectionIds.length - 1);
      return {
        ...state,
        step,
        unlocked: Math.max(state.unlocked, step),
        skipped: state.skipped.includes(id) ? state.skipped : [...state.skipped, id],
      };
    }
    case 'back':
      return state.ready ? { ...state, step: Math.max(0, state.step - 1) } : state;
    case 'visit':
      return state.ready && Number.isInteger(action.step) && action.step >= 0 && action.step <= state.unlocked
        ? { ...state, step: action.step }
        : state;
    case 'linkQuiz':
      return { ...state, quizStateId: action.id };
    case 'testDone':
      return quizSectionId
        ? { ...state, testDone: true, completed: { ...state.completed, [quizSectionId]: true } }
        : state;
    case 'resumeQuiz':
      return quizSectionId ? { ...state, skipped: state.skipped.filter(id => id !== quizSectionId) } : state;
  }
}

const Context = createContext<{ progress: Progress; dispatch: React.Dispatch<ProgressAction> } | null>(null);

export function LessonProgressProvider({
  children,
  lessonId,
  sectionIds,
  quizSectionId,
  requireQuiz,
}: {
  children: ReactNode;
  lessonId: string;
  sectionIds: readonly string[];
  quizSectionId?: string;
  requireQuiz: boolean;
}) {
  const [progress, dispatch] = useReducer(
    (state: Progress, action: ProgressAction) => progressReducer(state, action, sectionIds, quizSectionId),
    initialProgress,
  );
  const stateId = useRef<string | null>(null);
  const startedAt = useRef<string | null>(null);
  const contentCompletedAt = useRef<string | null>(null);
  const completedAt = useRef<string | null>(null);
  const saveQueue = useRef<Promise<unknown>>(Promise.resolve());
  const loadPromise = useRef<Promise<{ saved: LessonState; quizFinished: boolean }> | null>(null);

  useEffect(() => {
    let active = true;
    loadPromise.current ??= (async () => {
      const states = await listLessonStates(lessonId);
      const saved =
        [...states].reverse().find(state => state.status !== 'finished') ??
        states.at(-1) ??
        (await createLessonState(lessonId));
      const quizId = saved.status === 'new' || !quizSectionId ? undefined : saved.quizStateIds[quizSectionId];
      const quiz = quizId ? await getQuizState(quizId) : undefined;
      return { saved, quizFinished: quiz?.status === 'finished' };
    })();
    void loadPromise.current
      .then(({ saved, quizFinished }) => {
        if (!active) return;
        const quizId = saved.status === 'new' || !quizSectionId ? undefined : saved.quizStateIds[quizSectionId];
        stateId.current = saved.id;
        startedAt.current = saved.status === 'new' ? null : saved.startedAt;
        contentCompletedAt.current =
          saved.status === 'content-complete' || saved.status === 'finished' ? saved.contentCompletedAt : null;
        completedAt.current = saved.status === 'finished' ? saved.completedAt : null;
        const completed = saved.status === 'new' ? {} : saved.sectionCompletion;
        const firstUnfinished = sectionIds.findIndex(
          id => !completed[id] && !(saved.status !== 'new' && saved.skippedSectionIds.includes(id)),
        );
        const unlocked = Math.max(
          saved.status === 'new' ? 0 : sectionIds.indexOf(saved.currentSectionId ?? sectionIds[0]),
          firstUnfinished < 0 ? sectionIds.length - 1 : firstUnfinished,
        );
        dispatch({
          type: 'hydrate',
          progress: {
            step:
              saved.status === 'new'
                ? 0
                : Math.max(0, sectionIds.indexOf(saved.currentSectionId ?? sectionIds[unlocked])),
            lastStep: sectionIds.length - 1,
            unlocked,
            testDone: quizFinished,
            ready: true,
            completed,
            skipped: saved.status === 'new' ? [] : saved.skippedSectionIds,
            quizStateId: quizId,
            quizSectionId,
          },
        });
      })
      .catch(() => {
        if (active)
          dispatch({ type: 'hydrate', progress: { ...initialProgress, lastStep: sectionIds.length - 1, ready: true } });
      });
    return () => {
      active = false;
    };
  }, [lessonId, sectionIds, quizSectionId]);

  useEffect(() => {
    if (!progress.ready || !stateId.current) return;
    const now = new Date().toISOString();
    startedAt.current ??= now;
    const contentDone = sectionIds
      .filter(id => id !== quizSectionId)
      .every(id => progress.completed[id] || progress.skipped.includes(id));
    const base = {
      id: stateId.current,
      lessonId,
      startedAt: startedAt.current,
      currentSectionId: sectionIds[progress.step],
      sectionCompletion: progress.completed,
      skippedSectionIds: progress.skipped,
      quizStateIds: progress.quizStateId && quizSectionId ? { [quizSectionId]: progress.quizStateId } : {},
    };
    if (contentDone) contentCompletedAt.current ??= now;
    if (contentDone && (!requireQuiz || progress.testDone)) completedAt.current ??= now;
    const state: LessonState =
      contentDone && (!requireQuiz || progress.testDone)
        ? {
            ...base,
            status: 'finished',
            contentCompletedAt: contentCompletedAt.current!,
            completedAt: completedAt.current!,
          }
        : contentDone && requireQuiz
          ? { ...base, status: 'content-complete', contentCompletedAt: contentCompletedAt.current! }
          : { ...base, status: 'in-progress' };
    saveQueue.current = saveQueue.current.then(() => saveLessonState(state)).catch(() => undefined);
  }, [lessonId, progress, requireQuiz, sectionIds, quizSectionId]);

  return <Context.Provider value={{ progress, dispatch }}>{children}</Context.Provider>;
}

export function useLessonProgress() {
  const value = useContext(Context);
  if (!value) throw new Error('LessonProgressProvider is required');
  return value;
}
