import type { Metadata } from 'next';
import { SkillsPageShell } from '@/components/pages/SkillsMindMap/SkillsPageShell';

export const metadata: Metadata = { title: 'Skills — Світло Playground' };

export default function SkillsPage() {
  return <SkillsPageShell />;
}
