import { vi } from 'vitest';
import { createQuizState, getQuizState, listQuizStates, saveQuizState } from '@/db';
import { useLocale } from '@/i18n/LocaleProvider/LocaleProvider';
import { useLessonProgress, initialProgress, type Progress } from './LessonProgress';

const freshState = { id: 'quiz-state-1', quizId: 'sample-quiz', status: 'new' as const };

export const LightLesson_mx = {
  prepare: (options: { step?: number; ready?: boolean; quizStateId?: string; progress?: Partial<Progress> } = {}) => {
    const dispatch = vi.fn();
    vi.mocked(useLocale).mockReturnValue({ locale: 'uk-UA', setLocale: vi.fn() });
    vi.mocked(useLessonProgress).mockReturnValue({
      progress: { ...initialProgress, ready: options.ready ?? true, step: options.step ?? 0, lastStep: 2, unlocked: 2, ...options.progress },
      dispatch,
    });
    vi.mocked(getQuizState).mockReset().mockResolvedValue(undefined);
    vi.mocked(listQuizStates).mockReset().mockResolvedValue([]);
    vi.mocked(createQuizState).mockReset().mockResolvedValue(freshState);
    vi.mocked(saveQuizState).mockReset().mockResolvedValue(undefined);
    return { dispatch, freshState };
  },
  reset: () => vi.clearAllMocks(),
} as const;
