import type { ContentEntity_ConfigType } from '../entity.types';
import type { Question_Data_Meta, Question_Definition_Meta, Question_Response_Meta } from './common.types';

type Question_AnswerWithText_Definition = Question_Definition_Meta<'answerWithText'>;
type Question_AnswerWithText_Data = Question_Data_Meta<'answerWithText'>;
type Question_AnswerWithText_Response = Question_Response_Meta<'answerWithText'>;

export type Question_AnswerWithText<ConfigType extends ContentEntity_ConfigType> = {
  definition: Question_AnswerWithText_Definition;
  data: Question_AnswerWithText_Data;
  response: Question_AnswerWithText_Response;
}[ConfigType];
