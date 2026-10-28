'use client';

import type { ElementType } from 'react';
import type { Locale } from '@svitlo/engine/localization';
import LearningLayout, { type LearningLayoutProgress, type LearningLayoutProps } from './LearningLayout';
import NavbarPreferences from './NavbarPreferences/NavbarPreferences';

export type LessonLearningLayoutProps = Pick<
  LearningLayoutProps,
  'children' | 'topics' | 'skippableSteps' | 'quizStep'
>;

export type LessonLearningLayoutBindings = {
  /** Supplied by the consuming app; the UI Kit never imports Next.js hooks. */
  usePathname: () => string;
  useLocale: () => { locale: Locale; setLocale: (locale: Locale) => void };
  useLessonProgress: () => {
    progress: LearningLayoutProgress;
    dispatch: (action: { type: 'back' | 'next' | 'skip' }) => void;
  };
  linkComponent?: ElementType;
};

/** Bind app-owned hooks once, without duplicating layout and navigation logic. */
export function createLessonLearningLayout(bindings: LessonLearningLayoutBindings) {
  function LessonLearningLayout({ children, topics, skippableSteps, quizStep }: LessonLearningLayoutProps) {
    const { locale, setLocale } = bindings.useLocale();
    const pathname = bindings.usePathname();
    const { progress, dispatch } = bindings.useLessonProgress();

    return (
      <LearningLayout
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
        preferences={<NavbarPreferences locale={locale} onLocaleChange={setLocale} />}
        linkComponent={bindings.linkComponent}
      >
        {children}
      </LearningLayout>
    );
  }
  LessonLearningLayout.displayName = 'LessonLearningLayout';
  return LessonLearningLayout;
}
