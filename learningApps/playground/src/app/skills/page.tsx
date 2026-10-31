import type { Metadata } from 'next';
import Link from 'next/link';
import { Box, Container } from '@mui/material';
import { SkillsMindMap } from '@/components/pages/SkillsMindMap/SkillsMindMap';

export const metadata: Metadata = { title: 'Skills — Світло Playground' };

export default function SkillsPage() {
  return (
    <Container component="main" maxWidth={false} sx={{ maxWidth: '1480px', py: { xs: 2, sm: 4 }, px: { xs: 2, md: 4 } }}>
      <Box sx={{ mb: 2, fontSize: 14 }}><Link href="/">← Світло · Playground</Link></Box>
      <SkillsMindMap />
    </Container>
  );
}
