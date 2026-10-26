import { vi } from 'vitest';
import { usePathname } from 'next/navigation';
import { useLocale } from '@/i18n/LocaleProvider/LocaleProvider';
import { useLessonProgress, initialProgress, type Progress } from '@/components/lesson/LessonProgress';

export const LearningLayout_mx = {
  prepare: (options: { locale?: 'uk-UA' | 'ar-SA'; progress?: Partial<Progress> } = {}) => {
    const dispatch = vi.fn();
    vi.mocked(usePathname).mockReturnValue('/topics/light');
    vi.mocked(useLocale).mockReturnValue({
      locale: options.locale ?? 'uk-UA', setLocale: vi.fn(),
    });
    vi.mocked(useLessonProgress).mockReturnValue({
      progress: { ...initialProgress, ready: true, lastStep: 2, ...options.progress },
      dispatch,
    });
    return { dispatch };
  },
  reset: () => vi.clearAllMocks(),
} as const;
