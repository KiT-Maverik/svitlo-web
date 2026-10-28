import { Container } from '@mui/material';
import type { LessonContentCatalog, Quiz } from '@svitlo/engine/content';
import type { Locale } from '@svitlo/engine/localization';
import { buildLesson } from '@svitlo/engine/builders';
import { LocaleProvider } from '@/i18n/LocaleProvider/LocaleProvider';
import LessonLearningLayout from '@/components/layout/LearningLayout/LearningLayout';
import { LessonProgressProvider } from './LessonProgress/LessonProgress';
import LessonSectionContent from './LessonSectionContent/LessonSectionContent';
import LessonClient from './LessonClient/LessonClient';
import { SceneLocaleProvider } from './SceneLocaleContext';
import { toQuestionWidgets } from './adapters/toQuestionWidgets';

export interface LessonProps {
  config: Parameters<typeof buildLesson>[0];
  catalog: LessonContentCatalog;
  locale: Locale;
  href: string;
}

export default function Lesson({ config, catalog, locale, href }: LessonProps) {
  const lesson = buildLesson(config, locale, catalog);
  const quizzes = lesson.sections.content.filter((section): section is Quiz => 'sectionId' in section);
  if (quizzes.length > 1) throw new Error('The current lesson progress model supports one quiz per lesson');
  const quiz = quizzes[0];
  if (lesson.requireQuiz && !quiz) throw new Error('A lesson that requires a quiz must include one');
  const sectionIds = lesson.sections.content.map(section => ('sectionId' in section ? section.sectionId : section.id));
  const sectionContent = lesson.sections.content.map(section =>
    'sectionId' in section ? null : (
      <Container key={section.id} maxWidth="md" sx={{ py: { xs: 3, md: 6 } }}>
        <LessonSectionContent content={section.content} locale={locale} />
      </Container>
    ),
  );

  return (
    <LocaleProvider locale={locale}>
      <SceneLocaleProvider locale={locale} scenes={lesson.sceneLocale ?? {}}>
        <LessonProgressProvider
          key={lesson.id}
          lessonId={lesson.id}
          sectionIds={sectionIds}
          quizSectionId={quiz?.sectionId}
          requireQuiz={lesson.requireQuiz}
        >
          <LessonLearningLayout
            topics={[{ id: lesson.id, title: lesson.title.value, href }]}
            skippableSteps={lesson.sections.content.map(
              section =>
                lesson.sections.allowSkipping &&
                ('sectionId' in section ? section.interaction.skippable : section.skippable),
            )}
            quizStep={quiz && lesson.sections.content.indexOf(quiz)}
          >
            <LessonClient
              lesson={lesson}
              quiz={quiz}
              questions={quiz ? toQuestionWidgets(quiz) : []}
              sectionContent={sectionContent}
            />
          </LessonLearningLayout>
        </LessonProgressProvider>
      </SceneLocaleProvider>
    </LocaleProvider>
  );
}
