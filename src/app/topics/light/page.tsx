import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Box, Container } from '@mui/material';
import { MarkdownContent } from '@/components/widgets';
import LearningLayout from '@/components/layout/LearningLayout/LearningLayout';
import LightLesson from '@/components/lesson/LightLesson';
import Ray from '@/content/how-light-moves/sections/practice/components/Ray/Ray';
import { getRayLocale, rayLocales } from '@/content/how-light-moves/sections/practice/components/Ray/ray.locales';
import { resolveLocale } from '@/i18n/resolveLocale';
import { LocaleProvider } from '@/i18n/LocaleProvider/LocaleProvider';

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
  const messages = getRayLocale(locale);
  const content = await getContent();
  return (
    <LocaleProvider locale={locale}>
      <LearningLayout>
        <LightLesson theory={<Container maxWidth="md" sx={{ py: { xs: 3, md: 6 } }}>
          <Box component="p" sx={{ color: 'text.secondary', letterSpacing: '.12em', fontSize: 12, fontWeight: 700 }}>
            ФІЗИКА · УРОК 01 · 4 ЕТАПИ
          </Box>
          <MarkdownContent content={content} scenes={{ ray: <Ray locale={locale} messages={messages} /> }} />
        </Container>} />
      </LearningLayout>
    </LocaleProvider>
  );
}
