'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createLessonLearningLayout } from '@svitlo/ui-kit/learning-layout';
import { useLessonProgress } from '@/components/pages/Lesson/LessonProgress/LessonProgress';
import { useLocale } from '@/i18n/LocaleProvider/LocaleProvider';

/** Next.js hooks/providers stay app-owned; the UI Kit owns all layout behavior. */
const LessonLearningLayout = createLessonLearningLayout({
  usePathname,
  useLessonProgress,
  useLocale,
  linkComponent: Link,
});

export default LessonLearningLayout;
