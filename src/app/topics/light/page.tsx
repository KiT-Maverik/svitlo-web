import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Box, Container } from '@mui/material';
import LearningLayout from '@/components/layout/LearningLayout/LearningLayout';
import LightLesson from '@/components/lesson/LightLesson';
import LessonSectionContent from '@/components/lesson/LessonSectionContent';
import { createTheorySectionConfig } from '@/content/how-light-moves/sections/theory/sectionConfig';
import { resolveLocale } from '@/i18n/resolveLocale';
import { LocaleProvider } from '@/i18n/LocaleProvider/LocaleProvider';
import { DEFAULT_SUPPORTED_LANGUAGES } from '@/types/languages';
import { createLightQuestions } from '@/content/how-light-moves/sections/quiz/createLightQuestions';
import { lightLesson } from '@/content/how-light-moves/lightLesson';

export async function generateMetadata({ searchParams }: PageProps<'/topics/light'>): Promise<Metadata> {
  const locale = resolveLocale((await searchParams).lang, DEFAULT_SUPPORTED_LANGUAGES.map(language => language.locale), 'uk-UA');
  return {
    title: `${lightLesson.title.value[locale]} — Світло`,
    description: 'Перша інтерактивна тема: світловий промінь, малюнок і анімована сцена.',
  };
}

export default function LightTopic({ searchParams }: PageProps<'/topics/light'>) {
  return <Suspense fallback={<Container maxWidth="md" sx={{ py: 6 }} />}>
    <LocalizedLightTopic searchParams={searchParams} />
  </Suspense>;
}

async function LocalizedLightTopic({ searchParams }: Pick<PageProps<'/topics/light'>, 'searchParams'>) {
  const requestedLocale = (await searchParams).lang;
  const locale = resolveLocale(requestedLocale, DEFAULT_SUPPORTED_LANGUAGES.map(language => language.locale), 'uk-UA');
  const theorySection = createTheorySectionConfig(locale);
  const questions = createLightQuestions(locale);
  return (
    <LocaleProvider locale={locale}>
      <LearningLayout topics={[{ id: 'light', title: lightLesson.title.value[locale], href: '/topics/light' }]}>
        <LightLesson questions={questions} theory={<Container maxWidth="md" sx={{ py: { xs: 3, md: 6 } }}>
          <Box component="p" sx={{ color: 'text.secondary', letterSpacing: '.12em', fontSize: 12, fontWeight: 700 }}>
            ФІЗИКА · УРОК 01 · 4 ЕТАПИ
          </Box>
          <LessonSectionContent content={theorySection.content} locale={locale} />
        </Container>} />
      </LearningLayout>
    </LocaleProvider>
  );
}
