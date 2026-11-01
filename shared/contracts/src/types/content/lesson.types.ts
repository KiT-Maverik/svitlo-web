import type {
  ContentBlock,
  ContentBlock_Config,
  TextContentBlock,
  TextContentBlock_Config,
} from './contentBlock.types';
import type { Quiz, Quiz_Config, QuizState } from './quiz.types';
import type { Collection, NonEmptyArray } from '../misc.types';
import type { LanguageCode } from '../languages';
import type { DeepReadonly } from '../readonly.types';

export interface LessonSection_Config<TIcon = unknown> {
  readonly collection: Extract<Collection, 'lessonSection'>;
  content: NonEmptyArray<ContentBlock_Config>;
  id: string;
  lessonId: Lesson_Config['id'];
  name: TextContentBlock_Config;
  skippable: boolean;
  /** Presentation payload interpreted by the consuming application. */
  icon?: TIcon;
}

export interface LessonSection<TIcon = unknown> {
  readonly collection: Extract<Collection, 'lessonSection'>;
  content: NonEmptyArray<ContentBlock>;
  id: string;
  lessonId: Lesson['id'];
  name: TextContentBlock;
  skippable: boolean;
  /** Presentation payload interpreted by the consuming application. */
  icon?: TIcon;
}

export type LessonSection_Content = LessonSection_Config | Quiz_Config;

/** Definitions referenced by a lesson's stable IDs. */
export interface LessonContentCatalog {
  text: Readonly<Record<string, TextContentBlock_Config>>;
  sections: Readonly<Record<string, DeepReadonly<LessonSection_Content>>>;
}

export interface Lesson_Config {
  readonly collection: Extract<Collection, 'lesson'>;
  id: string;
  slug: string;
  requireQuiz: boolean;
  languages: LanguageCode[];
  sections: {
    allowNavigation: boolean;
    allowSkipping: boolean;
    showIndexes: boolean;
    content: NonEmptyArray<string>;
  };
  title: string;
  /** Every scene's translations, keyed by short language code. Server selects one value per scene. */
  sceneLocales?: Record<string, Partial<Record<LanguageCode, object>>>;
}

export interface Lesson {
  readonly collection: Extract<Collection, 'lesson'>;
  id: string;
  slug: string;
  requireQuiz: boolean;
  sections: {
    allowNavigation: boolean;
    allowSkipping: boolean;
    showIndexes: boolean;
    content: NonEmptyArray<LessonSection | Quiz>;
  };
  title: TextContentBlock;
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
  | (LessonState_Base & {
      status: 'new';
      startedAt?: never;
      sectionCompletion?: never;
      skippedSectionIds?: never;
      quizStateIds?: never;
      contentCompletedAt?: never;
      completedAt?: never;
    })
  | (LessonState_Progress & { status: 'in-progress'; contentCompletedAt?: never; completedAt?: never })
  /** Lesson content is complete; any required quiz may still be unfinished. */
  | (LessonState_Progress & { status: 'content-complete'; contentCompletedAt: string; completedAt?: never })
  /** All requirements, including a quiz when requireQuiz is true, are met. */
  | (LessonState_Progress & { status: 'finished'; contentCompletedAt: string; completedAt: string });
