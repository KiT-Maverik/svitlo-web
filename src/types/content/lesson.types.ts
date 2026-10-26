import type { ReactNode } from 'react';
import type { Resource, Resource_Config, TextResource, TextResource_Config } from './resource.types';
import type { Quiz, Quiz_Config } from './quiz.types';
import type { NonEmptyArray } from '../misc.types';

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
}
