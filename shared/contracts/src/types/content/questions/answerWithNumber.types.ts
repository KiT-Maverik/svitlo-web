import type { ContentEntity_ConfigType } from '../entity.types';
import type { Question_Data_Meta, Question_Definition_Meta, Question_Response_Meta } from './common.types';

type Question_AnswerWithNumber_Definition = Question_Definition_Meta<'answerWithNumber'>;
type Question_AnswerWithNumber_Data = Question_Data_Meta<'answerWithNumber'>;
type Question_AnswerWithNumber_Response = Question_Response_Meta<'answerWithNumber'>;

export type Question_AnswerWithNumber<ConfigType extends ContentEntity_ConfigType> = {
  definition: Question_AnswerWithNumber_Definition;
  data: Question_AnswerWithNumber_Data;
  response: Question_AnswerWithNumber_Response;
}[ConfigType];
