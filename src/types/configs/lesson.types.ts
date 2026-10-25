import {TextResource, Resource} from '../content/resources';
import type { QuizConfig } from './quiz.types';
import {NonEmptyArray} from "@/types/misc.types";

export interface LessonSection_Config {
  content: NonEmptyArray<Resource>;
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
    content: NonEmptyArray<LessonSection_Content>;
  };
  title: TextResource;
}
