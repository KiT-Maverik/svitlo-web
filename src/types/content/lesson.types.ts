import type { ReactNode } from 'react';
import type { Resource, Resource_Config, TextResource, TextResource_Config } from './resource.types';
import type { Quiz, Quiz_Config, QuizState } from './quiz.types';
import type { NonEmptyArray } from '../misc.types';
import type { LanguageCode } from '../languages';

export interface LessonSection_Config {
  content: NonEmptyArray<Resource_Config | ReactNode>;
  id: string;
  name: TextResource_Config;
  skippable: boolean;
  icon?: ReactNode;
}

export interface LessonSection {
  content: NonEmptyArray<Resource | ReactNode>;
  id: string;
  name: TextResource;
  skippable: boolean;
  icon?: ReactNode;
}

export type LessonSection_Content = LessonSection_Config | Quiz_Config;

export interface Lesson_Config {
  id: string,
  slug: string;
  requireQuiz: boolean;
  sections: {
    allowNavigation: boolean;
    allowSkipping: boolean;
    showIndexes: boolean;
    content: NonEmptyArray<LessonSection_Content>;
  };
  title: TextResource_Config;
  /** Every scene's translations, keyed by short language code. Server selects one value per scene. */
  sceneLocales?: Record<string, Partial<Record<LanguageCode, object>>>;
}

export interface Lesson {
  id: string;
  slug: string;
  requireQuiz: boolean;
  sections: {
    allowNavigation: boolean;
    allowSkipping: boolean;
    showIndexes: boolean;
    content: NonEmptyArray<LessonSection | Quiz>;
  };
  title: TextResource;
  /** Only the selected locale is included in the rendered lesson. */
  sceneLocale?: Readonly<object>;
}

interface LessonState_Base {
  /** Identifies this particular run of the lesson. */
  id: string;
  lessonId: Lesson['id'];
}

interface LessonState_Progress extends LessonState_Base {
  startedAt: string;
  currentSectionId?: string;
  /** Keyed by section ID; an absent entry means the section has not been visited. */
  sectionCompletion: Record<string, boolean>;
  skippedSectionIds: string[];
  /** Keyed by quiz section ID; the linked QuizState holds its answers and result. */
  quizStateIds: Record<string, QuizState['id']>;
}

export type LessonState =
  | (LessonState_Base & { status: 'new'; startedAt?: never; sectionCompletion?: never; skippedSectionIds?: never; quizStateIds?: never; contentCompletedAt?: never; completedAt?: never })
  | (LessonState_Progress & { status: 'in-progress'; contentCompletedAt?: never; completedAt?: never })
  /** Lesson content is complete; any required quiz may still be unfinished. */
  | (LessonState_Progress & { status: 'content-complete'; contentCompletedAt: string; completedAt?: never })
  /** All requirements, including a quiz when requireQuiz is true, are met. */
  | (LessonState_Progress & { status: 'finished'; contentCompletedAt: string; completedAt: string });
