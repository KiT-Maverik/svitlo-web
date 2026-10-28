import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('@/db', () => ({
  listLessonStates: vi.fn().mockRejectedValue(new Error('IndexedDB unavailable')),
  createLessonState: vi.fn(),
  getQuizState: vi.fn(),
  saveLessonState: vi.fn().mockResolvedValue(undefined),
}));

import { renderHook, waitFor } from '@testing-library/react';
import { LessonProgress_fx, sectionIds } from './LessonProgress.unit.fx';
import { LessonProgress_mx } from './LessonProgress.unit.mx';
import { canAdvance, initialProgress, progressReducer, useLessonProgress } from './LessonProgress';

describe('Components', () => {
  describe('LessonProgressProvider', () => {
    beforeEach(() => LessonProgress_mx.unavailable());
    afterEach(() => LessonProgress_mx.reset());

    it('should initialize and allow lesson navigation when database hydration fails', async () => {
      LessonProgress_fx.render();
      await waitFor(() => expect(LessonProgress_fx.selectors.ready()).toHaveTextContent('true'));
      expect(LessonProgress_fx.selectors.step()).toHaveTextContent('0');
      await LessonProgress_fx.actions.next();
      expect(LessonProgress_fx.selectors.step()).toHaveTextContent('1');
      expect(LessonProgress_fx.selectors.unlocked()).toHaveTextContent('1');
    });

    it('should permit going back to a previously unlocked step', async () => {
      LessonProgress_fx.render();
      await waitFor(() => expect(LessonProgress_fx.selectors.ready()).toHaveTextContent('true'));
      await LessonProgress_fx.actions.next();
      await LessonProgress_fx.actions.back();
      expect(LessonProgress_fx.selectors.step()).toHaveTextContent('0');
      expect(LessonProgress_fx.selectors.unlocked()).toHaveTextContent('1');
    });

    it('should reject navigation when readiness has not been established', () => {
      const state = progressReducer(initialProgress, { type: 'next' }, sectionIds);
      expect(state).toBe(initialProgress);
      expect(canAdvance(initialProgress)).toBe(false);
    });

    it('should record completed content when advancing to the next section', () => {
      const ready = { ...initialProgress, ready: true, lastStep: 2 };
      const result = progressReducer(ready, { type: 'next' }, sectionIds);
      expect(result).toMatchObject({ step: 1, unlocked: 1, completed: { theory: true } });
      expect(canAdvance(result)).toBe(true);
    });

    it('should remember skipped section IDs without marking them completed', () => {
      const ready = { ...initialProgress, ready: true, lastStep: 2 };
      const result = progressReducer(ready, { type: 'skip' }, sectionIds);
      expect(result.skipped).toEqual(['theory']);
      expect(result.completed).toEqual({});
    });

    it('should reject visits outside the unlocked range or noninteger indexes', () => {
      const ready = { ...initialProgress, ready: true, lastStep: 2, unlocked: 1 };
      expect(progressReducer(ready, { type: 'visit', step: 2 }, sectionIds)).toBe(ready);
      expect(progressReducer(ready, { type: 'visit', step: 0.5 }, sectionIds)).toBe(ready);
      expect(progressReducer(ready, { type: 'visit', step: 1 }, sectionIds).step).toBe(1);
    });

    it('should mark the final quiz complete without changing the current step', () => {
      const ready = { ...initialProgress, ready: true, lastStep: 2, step: 2 };
      const result = progressReducer(ready, { type: 'testDone' }, sectionIds, 'quiz');
      expect(result).toMatchObject({ testDone: true, step: 2, completed: { quiz: true } });
    });

    it('should associate the current quiz identifier without modifying progress', () => {
      const linked = progressReducer(initialProgress, { type: 'linkQuiz', id: 'quiz-session' }, sectionIds);
      expect(linked.quizStateId).toBe('quiz-session');
      expect(linked.step).toBe(0);
    });

    it('should reject useLessonProgress calls outside its provider', () => {
      expect(() => renderHook(() => useLessonProgress())).toThrow('LessonProgressProvider is required');
    });
  });
});
