import type { ReactNode } from 'react';
import type { LanguageCode } from '../languages';
import type { DefineValidKeysFromSlugs, NonEmptyArray } from '../misc.types';
import type { ContentEntity_ConfigType } from './entity.types';
import type { Flashcard } from './flashcard.types';
import type { Locale_Config, Locale_ResponseParams } from './locale.types';
import type { Question_Catalog, Question_Catalog_ValidSlugs } from './questions';
import type { Section } from './section.types';

type LessonV2_Parameters = {
  requireQuiz: boolean;
  languages: NonEmptyArray<LanguageCode>;
  sections: {
    allowNavigation: boolean;
    allowSkipping: boolean;
    showIndexes: boolean;
  };
};

type LessonV2_Definition = {
  type: 'lesson';
  icon?: ReactNode;
  sections: Record<string, Section<'definition'>>;
};

type LessonV2_Data = {
  id: string;
  group: string;
  slug: string;
  title: Locale_Config;
  flashcards: Flashcard<'data'>[];
  parameters: LessonV2_Parameters;
  questions: Question_Catalog<'data'>;
  sections: Record<string, Section<'data'>>;
};

type LessonV2_Response = Locale_ResponseParams & {
  id: string;
  slug: string;
  title: string;
  flashcards: Flashcard<'response'>[];
  parameters: LessonV2_Parameters;
  questions: Question_Catalog<'response'>;
  sections: Record<string, Section<'response'>>;
};

export type LessonV2<ConfigType extends ContentEntity_ConfigType> = {
  definition: LessonV2_Definition;
  data: LessonV2_Data;
  response: LessonV2_Response;
}[ConfigType];

export function defineLessonV2Data<const T extends LessonV2<'data'>>(
  lesson: T & {
    questions: Question_Catalog_ValidSlugs<T['questions']>;
    sections: DefineValidKeysFromSlugs<keyof T['sections'] & string, Section<'data'>>;
  },
): T {
  return lesson;
}
