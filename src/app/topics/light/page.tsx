import type { Metadata } from 'next';
import Container from '@mui/material/Container';
import MarkdownContent from '@/components/MarkdownContent';

export const metadata: Metadata = {
  title: 'Як рухається світло — Світло',
  description: 'Перша інтерактивна тема: світловий промінь, малюнок і анімована HTML-сцена.',
};

export default function LightTopic() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 3, md: 6 } }}>
      <p style={{ color: '#63758b', letterSpacing: '.12em', fontSize: 12, fontWeight: 700 }}>
        ФІЗИКА · ТЕМА 01 · 5 ХВИЛИН
      </p>
      <MarkdownContent src="/content/topics/light/uk.md" />
    </Container>
  );
}
