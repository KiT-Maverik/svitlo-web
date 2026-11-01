import type { ContentEntity_ConfigType } from '../entity.types';
import type { Locale_Config } from '../locale.types';
import type { Question_Data_Meta, Question_Definition_Meta, Question_Response_Meta } from './common.types';

type Question_SelectOneAnswer_Answers<Value> = {
  correct: Record<string, Value>;
  incorrect: Record<string, Value>;
  distractors: Record<string, Value>;
};

type Question_SelectOneAnswer_Definition = Question_Definition_Meta<'select-one-answer'>;

type Question_SelectOneAnswer_Data = Question_Data_Meta<'select-one-answer'> & {
  question: Locale_Config;
  explanation: Record<string, Locale_Config>;
  answers: Question_SelectOneAnswer_Answers<Locale_Config>;
};

type Question_SelectOneAnswer_Response = Question_Response_Meta<'select-one-answer'> & {
  question: string;
  explanation: Record<string, string>;
  answers: Question_SelectOneAnswer_Answers<string>;
};

export type Question_SelectOneAnswer<ConfigType extends ContentEntity_ConfigType> = {
  definition: Question_SelectOneAnswer_Definition;
  data: Question_SelectOneAnswer_Data;
  response: Question_SelectOneAnswer_Response;
}[ConfigType];
