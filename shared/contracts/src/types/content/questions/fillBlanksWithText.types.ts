import type { ContentEntity_ConfigType } from '../entity.types';
import type { Question_Data_Meta, Question_Definition_Meta, Question_Response_Meta } from './common.types';

type Question_FillBlanksWithText_Definition = Question_Definition_Meta<'fillBlanksWithText'>;
type Question_FillBlanksWithText_Data = Question_Data_Meta<'fillBlanksWithText'>;
type Question_FillBlanksWithText_Response = Question_Response_Meta<'fillBlanksWithText'>;

export type Question_FillBlanksWithText<ConfigType extends ContentEntity_ConfigType> = {
  definition: Question_FillBlanksWithText_Definition;
  data: Question_FillBlanksWithText_Data;
  response: Question_FillBlanksWithText_Response;
}[ConfigType];
