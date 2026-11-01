import type { ContentBlock } from './blocks';
import type { ContentEntity_ConfigType } from './entity.types';

type Flashcard_Definition = {
  type: 'flashcard';
};

type Flashcard_Data = {
  id: string;
  isDefault?: true;
  front: ContentBlock<'data'>[];
  back: ContentBlock<'data'>[];
  hint: ContentBlock<'data'>[];
  tags: string[];
  flags: string[];
};

type Flashcard_Response = {
  id: string;
  front: ContentBlock<'response'>[];
  back: ContentBlock<'response'>[];
  hint: ContentBlock<'response'>[];
  tags: string[];
  flags: string[];
};

export type Flashcard<ConfigType extends ContentEntity_ConfigType> = {
  definition: Flashcard_Definition;
  data: Flashcard_Data;
  response: Flashcard_Response;
}[ConfigType];
