import type { ContentEntity_ConfigType } from '../entity.types';
import type { Question_Data_Meta, Question_Definition_Meta, Question_Response_Meta } from './common.types';

type Question_BuildAnswerWithBlocks_Definition = Question_Definition_Meta<'buildAnswerWithBlocks'>;
type Question_BuildAnswerWithBlocks_Data = Question_Data_Meta<'buildAnswerWithBlocks'>;
type Question_BuildAnswerWithBlocks_Response = Question_Response_Meta<'buildAnswerWithBlocks'>;

export type Question_BuildAnswerWithBlocks<ConfigType extends ContentEntity_ConfigType> = {
  definition: Question_BuildAnswerWithBlocks_Definition;
  data: Question_BuildAnswerWithBlocks_Data;
  response: Question_BuildAnswerWithBlocks_Response;
}[ConfigType];
