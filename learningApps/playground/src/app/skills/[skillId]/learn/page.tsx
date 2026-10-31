import type { Metadata } from 'next';
import Link from 'next/link';
import { Box, Container } from '@mui/material';
import { SkillLearningClient } from '@/components/pages/SkillsMindMap/SkillLearningClient';
import { PLAYGROUND_SKILL_ANALYTICS_DOMAINS } from '@/components/pages/SkillsMindMap/skillsPageConfig';

export const metadata: Metadata = { title: 'Прокачати навичку — Світло Playground' };

export default async function SkillLearningPage({
  params,
}: {
  params: Promise<{ skillId: string }>;
}) {
  const { skillId } = await params;
  return (
    <Container component="main" maxWidth="md" sx={{ py: { xs: 2, md: 4 } }}>
      <Box sx={{ fontSize: 14, mb: 2 }}><Link href="/skillAnalytics">← Аналітика навичок</Link></Box>
      <SkillLearningClient skillId={skillId} domainSlugs={PLAYGROUND_SKILL_ANALYTICS_DOMAINS} />
    </Container>
  );
}
