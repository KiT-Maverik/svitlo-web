import { vi } from 'vitest';
import { listLessonStates, saveLessonState } from '@svitlo/indexdb';

export const LessonProgress_mx = {
  unavailable: () => {
    vi.mocked(listLessonStates).mockReset().mockRejectedValue(new Error('IndexedDB unavailable'));
    vi.mocked(saveLessonState).mockReset().mockResolvedValue(undefined);
  },
  reset: () => vi.clearAllMocks(),
} as const;
