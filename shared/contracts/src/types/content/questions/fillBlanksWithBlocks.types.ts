import type { ContentEntity_ConfigType } from '../entity.types';
import type { Question_Data_Meta, Question_Definition_Meta, Question_Response_Meta } from './common.types';

type Question_FillBlanksWithBlocks_Definition = Question_Definition_Meta<'fill-blanks-with-blocks'>;
type Question_FillBlanksWithBlocks_Data = Question_Data_Meta<'fill-blanks-with-blocks'>;
type Question_FillBlanksWithBlocks_Response = Question_Response_Meta<'fill-blanks-with-blocks'>;

export type Question_FillBlanksWithBlocks<ConfigType extends ContentEntity_ConfigType> = {
  definition: Question_FillBlanksWithBlocks_Definition;
  data: Question_FillBlanksWithBlocks_Data;
  response: Question_FillBlanksWithBlocks_Response;
}[ConfigType];
