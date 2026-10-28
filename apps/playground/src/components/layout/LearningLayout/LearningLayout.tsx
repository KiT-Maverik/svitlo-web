'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LearningLayout as SharedLearningLayout } from '@svitlo/ui-kit/learning-layout';
import { useLessonProgress } from '@/components/pages/Lesson/LessonProgress/LessonProgress';
import { useLocale } from '@/i18n/LocaleProvider/LocaleProvider';
import NavbarPreferences from './NavbarPreferences/NavbarPreferences';

export default function LessonLearningLayout({
  children, topics, skippableSteps = [], quizStep,
}: {
  children: ReactNode;
  topics: readonly { id: string; title: string; href: string }[];
  skippableSteps?: readonly boolean[];
  quizStep?: number;
}) {
  const { locale } = useLocale();
  const pathname = usePathname();
  const { progress, dispatch } = useLessonProgress();
  return (
    <SharedLearningLayout
      locale={locale}
      pathname={pathname}
      progress={progress}
      topics={topics}
      skippableSteps={skippableSteps}
      quizStep={quizStep}
      actions={{
        back: () => dispatch({ type: 'back' }),
        next: () => dispatch({ type: 'next' }),
        skip: () => dispatch({ type: 'skip' }),
      }}
      preferences={<NavbarPreferences />}
      linkComponent={Link}
    >
      {children}
    </SharedLearningLayout>
  );
}
