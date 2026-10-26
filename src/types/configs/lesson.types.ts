import type { ReactNode } from 'react';
import {TextResource_Config, Resource_Config} from '../content/resources';
import type { QuizConfig } from './quiz.types';
import {NonEmptyArray} from "@/types/misc.types";

export interface LessonSection_Config {
  content: NonEmptyArray<Resource_Config | ReactNode>;
  id: string;
  name: TextResource_Config;
  skippable: boolean;
}

export type LessonSection_Content = LessonSection_Config | QuizConfig;

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
}
