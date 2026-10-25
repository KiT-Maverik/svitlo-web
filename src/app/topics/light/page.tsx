import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Box, Button, Container } from '@mui/material';
import { MarkdownContent } from '@/components/widgets';
import LightLesson from '@/components/lesson/LightLesson';
import Ray from '@/content/how-light-moves/sections/practice/components/Ray/Ray';
import { loadRayLocale, rayLocales } from '@/content/how-light-moves/sections/practice/components/Ray/ray.locales';
import { resolveLocale } from '@/i18n/resolveLocale';

export const metadata: Metadata = {
  title: 'Як рухається світло — Світло',
  description: 'Перша інтерактивна тема: світловий промінь, малюнок і анімована сцена.',
};

async function getContent() {
  'use cache';
  return readFile(path.join(process.cwd(), 'public/content/topics/light/uk.md'), 'utf8');
}

export default function LightTopic({ searchParams }: PageProps<'/topics/light'>) {
  return <Suspense fallback={<Container maxWidth="md" sx={{ py: 6 }} />}>
    <LocalizedLightTopic searchParams={searchParams} />
  </Suspense>;
}

async function LocalizedLightTopic({ searchParams }: Pick<PageProps<'/topics/light'>, 'searchParams'>) {
  const requestedLocale = (await searchParams).lang;
  const locale = resolveLocale(requestedLocale, rayLocales.map(option => option.code), 'uk-UA');
  const [content, messages] = await Promise.all([getContent(), loadRayLocale(locale)]);
  return (
    <LightLesson theory={<Container maxWidth="md" sx={{ py: { xs: 3, md: 6 } }}>
      <p style={{ color: '#63758b', letterSpacing: '.12em', fontSize: 12, fontWeight: 700 }}>
        ФІЗИКА · УРОК 01 · 4 ЕТАПИ
      </p>
      <Box component="nav" aria-label="Мова сцени Ray" sx={{ display: 'flex', gap: 1, mt: 2 }}>
        {rayLocales.map(option => <Button key={option.code} href={`/topics/light?lang=${option.code}`} size="small" variant={locale === option.code ? 'contained' : 'outlined'} aria-current={locale === option.code ? 'page' : undefined}>{option.name}</Button>)}
      </Box>
      <MarkdownContent content={content} scenes={{ ray: <Ray locale={locale} messages={messages} /> }} />
    </Container>} />
  );
}
