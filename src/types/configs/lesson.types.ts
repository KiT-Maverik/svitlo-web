import type { TextResource, NonEmptyResourceArray } from '../content/resources';
import type { QuizConfig } from './quiz.types';

export interface LessonSection_Config {
  id: string;
  name: TextResource;
  content: [NonEmptyResourceArray, ...NonEmptyResourceArray[]];
}

export type LessonSection_Content = LessonSection_Config | QuizConfig;

export interface Lesson_Config {
  allowSectionNavigation: boolean;
  allowSectionSkip: boolean;
  id: string;
  requireQuiz: boolean;
  sections: [LessonSection_Content, ...LessonSection_Content[]];
  showStepNumbers: boolean;
  title: TextResource;
}
