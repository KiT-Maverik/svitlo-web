import { Container } from '@mui/material';
import type { Lesson_Config, Locale, Quiz } from '@types';
import { buildLesson } from '@/utils';
import { LocaleProvider } from '@/i18n/LocaleProvider/LocaleProvider';
import { LearningLayout } from '@layout';
import { LessonProgressProvider } from './LessonProgress/LessonProgress';
import LessonSectionContent from './LessonSectionContent/LessonSectionContent';
import LessonClient from './LessonClient/LessonClient';
import { SceneLocaleProvider } from './SceneLocaleContext';
import { toQuestionWidgets } from './adapters/toQuestionWidgets';

export interface LessonProps {
  config: Lesson_Config;
  locale: Locale;
  href: string;
}

export default function Lesson({ config, locale, href }: LessonProps) {
  const lesson = buildLesson(config, locale);
  const quizzes = lesson.sections.content.filter((section): section is Quiz => 'sectionId' in section);
  if (quizzes.length > 1) throw new Error('The current lesson progress model supports one quiz per lesson');
  const quiz = quizzes[0];
  if (lesson.requireQuiz && !quiz) throw new Error('A lesson that requires a quiz must include one');
  const sectionIds = lesson.sections.content.map(section => 'sectionId' in section ? section.sectionId : section.id);
  const sectionContent = lesson.sections.content.map(section => 'sectionId' in section ? null :
    <Container key={section.id} maxWidth="md" sx={{ py: { xs: 3, md: 6 } }}>
      <LessonSectionContent content={section.content} locale={locale} />
    </Container>);

  return <LocaleProvider locale={locale}>
    <SceneLocaleProvider locale={locale} scenes={lesson.sceneLocale ?? {}}>
      <LessonProgressProvider lessonId={lesson.id} sectionIds={sectionIds} quizSectionId={quiz?.sectionId} requireQuiz={lesson.requireQuiz}>
        <LearningLayout
          topics={[{ id: lesson.id, title: lesson.title.value, href }]}
          skippableSteps={lesson.sections.content.map(section => lesson.sections.allowSkipping && ('sectionId' in section ? section.interaction.skippable : section.skippable))}
          quizStep={quiz && lesson.sections.content.indexOf(quiz)}
        >
          <LessonClient lesson={lesson} quiz={quiz} questions={quiz ? toQuestionWidgets(quiz) : []} sectionContent={sectionContent} />
        </LearningLayout>
      </LessonProgressProvider>
    </SceneLocaleProvider>
  </LocaleProvider>;
}
