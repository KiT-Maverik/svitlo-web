import type { Metadata } from 'next';
import { SkillAnalyticsPage } from '@/components/pages/SkillsMindMap/SkillAnalyticsPage';

export const metadata: Metadata = { title: 'Аналітика навичок — Світло Playground' };

export default function Page() {
  return <SkillAnalyticsPage />;
}
