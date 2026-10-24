import type { ReactNode } from 'react';
import LearningLayout from '@/components/layout/LearningLayout/LearningLayout';
import { LessonProgressProvider } from '@/components/lesson/LessonProgress';

export default function TopicsLayout({ children }: { children: ReactNode }) {
  return <LessonProgressProvider><LearningLayout>{children}</LearningLayout></LessonProgressProvider>;
}
