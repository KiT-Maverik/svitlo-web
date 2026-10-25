import type { ReactNode } from 'react';
import { LessonProgressProvider } from '@/components/lesson/LessonProgress';

export default function TopicsLayout({ children }: { children: ReactNode }) {
  return <LessonProgressProvider>{children}</LessonProgressProvider>;
}
