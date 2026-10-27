import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Container } from '@mui/material';
import { Lesson } from '@pages';
import { resolveLocale } from '@/i18n/resolveLocale';
import { DEFAULT_SUPPORTED_LANGUAGES } from '@types';
import { howLightMoves } from '@/content/howLightMoves/howLightMoves.data';
import { howLightMovesCatalog } from '@/content/howLightMoves/howLightMoves.catalog';
import { buildTextResource } from '@/utils';

export async function generateMetadata({ searchParams }: PageProps<'/topics/light'>): Promise<Metadata> {
  const locale = resolveLocale((await searchParams).lang, DEFAULT_SUPPORTED_LANGUAGES.map(language => language.locale), 'uk-UA');
  return {
    title: `${buildTextResource(howLightMovesCatalog.text[howLightMoves.title], locale).value} — Світло`,
    description: 'Перша інтерактивна тема: світловий промінь, малюнок і анімована сцена.',
  };
}

export default function LightTopic({ searchParams }: PageProps<'/topics/light'>) {
  return <Suspense fallback={<Container maxWidth="md" sx={{ py: 6 }} />}>
    <LocalizedLightTopic searchParams={searchParams} />
  </Suspense>;
}

async function LocalizedLightTopic({ searchParams }: Pick<PageProps<'/topics/light'>, 'searchParams'>) {
  const locale = resolveLocale((await searchParams).lang, DEFAULT_SUPPORTED_LANGUAGES.map(language => language.locale), 'uk-UA');
  return <Lesson config={howLightMoves} catalog={howLightMovesCatalog} locale={locale} href="/topics/light" />;
}
