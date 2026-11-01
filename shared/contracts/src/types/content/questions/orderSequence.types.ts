import type { ContentEntity_ConfigType } from '../entity.types';
import type { Question_Data_Meta, Question_Definition_Meta, Question_Response_Meta } from './common.types';

type Question_OrderSequence_Definition = Question_Definition_Meta<'order-sequence'>;
type Question_OrderSequence_Data = Question_Data_Meta<'order-sequence'>;
type Question_OrderSequence_Response = Question_Response_Meta<'order-sequence'>;

export type Question_OrderSequence<ConfigType extends ContentEntity_ConfigType> = {
  definition: Question_OrderSequence_Definition;
  data: Question_OrderSequence_Data;
  response: Question_OrderSequence_Response;
}[ConfigType];
