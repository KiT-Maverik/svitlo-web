import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Box, Container } from '@mui/material';
import LearningLayout from '@/components/layout/LearningLayout/LearningLayout';
import LightLesson from '@/components/lesson/LightLesson';
import LessonSectionContent from '@/components/lesson/LessonSectionContent';
import { createTheorySectionConfig } from '@/content/how-light-moves/sections/theory/sectionConfig';
import { resolveLocale } from '@/i18n/resolveLocale';
import { LocaleProvider } from '@/i18n/LocaleProvider/LocaleProvider';
import { DEFAULT_SUPPORTED_LANGUAGES } from '@types';
import { createLightQuestions } from '@/content/how-light-moves/sections/quiz/createLightQuestions';
import { lightLesson } from '@/content/how-light-moves/lightLesson';
import { practiceSectionConfig } from '@/content/how-light-moves/sections/practice/sectionConfig';
import { quizSectionConfig } from '@/content/how-light-moves/sections/quiz/sectionConfig';
import { buildLesson } from '@/utils';
import type { Lesson_Config, Quiz } from '@types';
import { LessonProgressProvider } from '@/components/lesson/LessonProgress';

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
  const config: Lesson_Config = {
    ...lightLesson,
    sections: { ...lightLesson.sections, content: [createTheorySectionConfig(locale), practiceSectionConfig, quizSectionConfig] },
  };
  const lesson = buildLesson(config, locale);
  const quiz = lesson.sections.content[2] as Quiz;
  const questions = createLightQuestions(quiz);
  const sectionContent = lesson.sections.content.map((section, index) => 'sectionId' in section ? null : <Container key={section.id} maxWidth="md" sx={{ py: { xs: 3, md: 6 } }}>
    {index === 0 && <Box component="p" sx={{ color: 'text.secondary', letterSpacing: '.12em', fontSize: 12, fontWeight: 700 }}>ФІЗИКА · УРОК 01 · 4 ЕТАПИ</Box>}
    <LessonSectionContent content={section.content} locale={locale} />
  </Container>);
  return (
    <LocaleProvider locale={locale}>
      <LessonProgressProvider lessonId={lesson.id} sectionIds={lesson.sections.content.map(section => 'sectionId' in section ? section.sectionId : section.id)} requireQuiz={lesson.requireQuiz}>
      <LearningLayout topics={[{ id: 'light', title: lesson.title.value, href: '/topics/light' }]} skippableSteps={lesson.sections.content.map(section => lesson.sections.allowSkipping && ('sectionId' in section ? section.interaction.skippable : section.skippable))}>
        <LightLesson lesson={lesson} quiz={quiz} questions={questions} sectionContent={sectionContent} />
      </LearningLayout>
      </LessonProgressProvider>
    </LocaleProvider>
  );
}
