import { readFile } from 'node:fs/promises';
import path from 'node:path';
import type { Metadata } from 'next';
import Container from '@mui/material/Container';
import MarkdownContent from '@/components/MarkdownContent';
import LightLesson from '@/components/lesson/LightLesson';

export const metadata: Metadata = {
  title: 'Як рухається світло — Світло',
  description: 'Перша інтерактивна тема: світловий промінь, малюнок і анімована HTML-сцена.',
};

async function getContent() {
  'use cache';
  return readFile(path.join(process.cwd(), 'public/content/topics/light/uk.md'), 'utf8');
}

export default async function LightTopic() {
  const content = await getContent();
  return (
    <LightLesson theory={<Container maxWidth="md" sx={{ py: { xs: 3, md: 6 } }}>
      <p style={{ color: '#63758b', letterSpacing: '.12em', fontSize: 12, fontWeight: 700 }}>
        ФІЗИКА · УРОК 01 · 4 ЕТАПИ
      </p>
      <MarkdownContent content={content} />
    </Container>} />
  );
}
