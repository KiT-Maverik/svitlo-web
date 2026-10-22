import type { ReactNode } from 'react';
import LearningLayout from '@/components/LearningLayout';

export default function TopicsLayout({ children }: { children: ReactNode }) {
  return <LearningLayout>{children}</LearningLayout>;
}
