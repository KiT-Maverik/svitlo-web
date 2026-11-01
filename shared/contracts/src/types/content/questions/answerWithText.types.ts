import type { ContentEntity_ConfigType } from '../entity.types';
import type { Question_Data_Meta, Question_Definition_Meta, Question_Response_Meta } from './common.types';

type Question_AnswerWithText_Definition = Question_Definition_Meta<'answer-with-text'>;
type Question_AnswerWithText_Data = Question_Data_Meta<'answer-with-text'>;
type Question_AnswerWithText_Response = Question_Response_Meta<'answer-with-text'>;

export type Question_AnswerWithText<ConfigType extends ContentEntity_ConfigType> = {
  definition: Question_AnswerWithText_Definition;
  data: Question_AnswerWithText_Data;
  response: Question_AnswerWithText_Response;
}[ConfigType];
