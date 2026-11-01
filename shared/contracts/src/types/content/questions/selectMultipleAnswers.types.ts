import type { ContentEntity_ConfigType } from '../entity.types';
import type { Question_Data_Meta, Question_Definition_Meta, Question_Response_Meta } from './common.types';

type Question_SelectMultipleAnswers_Definition = Question_Definition_Meta<'selectMultipleAnswers'>;
type Question_SelectMultipleAnswers_Data = Question_Data_Meta<'selectMultipleAnswers'>;
type Question_SelectMultipleAnswers_Response = Question_Response_Meta<'selectMultipleAnswers'>;

export type Question_SelectMultipleAnswers<ConfigType extends ContentEntity_ConfigType> = {
  definition: Question_SelectMultipleAnswers_Definition;
  data: Question_SelectMultipleAnswers_Data;
  response: Question_SelectMultipleAnswers_Response;
}[ConfigType];
