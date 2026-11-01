import type { ReactNode } from 'react';
import type { LanguageCode } from '../languages';
import type { NonEmptyArray } from '../misc.types';
import type { ContentEntity_ConfigType } from './entity.types';
import type { Locale_Config, Locale_ResponseParams } from './locale.types';
import type { Section } from './section.types';

type LessonV2_Parameters = {
  requireQuiz: boolean;
  languages: LanguageCode[];
  sections: {
    allowNavigation: boolean;
    allowSkipping: boolean;
    showIndexes: boolean;
    content: NonEmptyArray<string>;
  };
};

type LessonV2_Definition = {
  type: 'lesson';
  icon?: ReactNode;
  sections: Record<string, Section<'definition'>>;
};

type LessonV2_Data = {
  id: string;
  type: 'lesson';
  slug: string;
  title: Locale_Config;
  parameters: LessonV2_Parameters;
  sections: Record<string, Section<'data'>>;
};

type LessonV2_Response = Locale_ResponseParams & {
  id: string;
  type: 'lesson';
  slug: string;
  title: string;
  parameters: LessonV2_Parameters;
  sections: Record<string, Section<'response'>>;
};

export type LessonV2<ConfigType extends ContentEntity_ConfigType> = {
  definition: LessonV2_Definition;
  data: LessonV2_Data;
  response: LessonV2_Response;
}[ConfigType];
