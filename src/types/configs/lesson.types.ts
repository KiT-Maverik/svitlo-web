import type { TextResource, NonEmptyResourceArray } from '../content/resources';
import type { QuizConfig } from './quiz.types';

export interface LessonSection_Config {
  content: [NonEmptyResourceArray, ...NonEmptyResourceArray[]];
  id: string;
  name: TextResource;
  skippable: boolean;
}

export type LessonSection_Content = LessonSection_Config | QuizConfig;

export interface Lesson_Config {
  id: string,
  requireQuiz: boolean;
  sections: {
    allowNavigation: boolean;
    allowSkipping: boolean;
    showIndexes: boolean;
    content: [LessonSection_Content, ...LessonSection_Content[]];
  };
  title: TextResource;
}
