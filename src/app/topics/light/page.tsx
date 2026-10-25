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
import Ray from '@/content/how-light-moves/sections/theory/scenes/RaySvg/Ray';
import { theorySectionConfig } from '@/content/how-light-moves/sections/theory/sectionConfig';
import { resolveLocale } from '@/i18n/resolveLocale';
import { LocaleProvider } from '@/i18n/LocaleProvider/LocaleProvider';

export const metadata: Metadata = {
  title: 'Як рухається світло — Світло',
  description: 'Перша інтерактивна тема: світловий промінь, малюнок і анімована сцена.',
};

async function getContent(fileLocation: string) {
  'use cache';
  return readFile(path.join(process.cwd(), 'src', fileLocation.slice(1)), 'utf8');
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
  const theory = await Promise.all(theorySectionConfig.content.map(async block => {
    if (block.blockType === 'scene') {
      const scenes = { ray: <Ray key={block.id} locale={locale} /> };
      return scenes[block.scene];
    }

    const content = await getContent(block.fileLocation['uk-UA']);
    return <MarkdownContent key={block.id} content={content} scenes={{ ray: <Ray locale={locale} messages={messages} /> }} />;
  }));
  return (
    <LocaleProvider locale={locale}>
      <LearningLayout>
        <LightLesson theory={<Container maxWidth="md" sx={{ py: { xs: 3, md: 6 } }}>
          <Box component="p" sx={{ color: 'text.secondary', letterSpacing: '.12em', fontSize: 12, fontWeight: 700 }}>
            ФІЗИКА · УРОК 01 · 4 ЕТАПИ
          </Box>
          {theory}
        </Container>} />
      </LearningLayout>
    </LocaleProvider>
  );
}
