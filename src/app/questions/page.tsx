import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Stack } from '@mui/material';
import { QuestionsDemo } from '@/components/pages/QuestionsDemo/QuestionsDemo';
export const metadata: Metadata = { title: 'Інтерактивні запитання — Світло' };
export default function QuestionsPage() {
  return (
    <Container component="main" maxWidth="md" sx={{ py: { xs: 2, sm: 4 } }}>
      <Stack spacing={3}>
        <Link href="/">← Світло</Link>
        <Link href="/questions/api">Демонстрація режимів, подій та слотів →</Link>
        <QuestionsDemo />
      </Stack>
    </Container>
  );
}
