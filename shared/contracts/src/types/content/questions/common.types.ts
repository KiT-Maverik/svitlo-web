import type { Disability } from '../../disabilities.types';
import type { AssessmentMethodKey } from '../assessmentMethod.types';
import type { Locale_ResponseParams } from '../locale.types';

export type Question_Type =
  | 'select-one-answer'
  | 'select-multiple-answers'
  | 'match-blocks'
  | 'answer-with-text'
  | 'answer-with-number'
  | 'order-sequence'
  | 'build-answer-with-blocks'
  | 'fill-blanks-with-blocks'
  | 'fill-blanks-with-text';

export type Question_Definition_Meta<Type extends Question_Type> = {
  type: Type;
};

export type Question_Data_Meta<Type extends Question_Type> = {
  id: string;
  assessmentMethod: AssessmentMethodKey;
  restrictions: Disability[];
};

export type Question_Response_Meta<Type extends Question_Type> = Locale_ResponseParams & {
  id: string;
  assessmentMethod: AssessmentMethodKey;
  restrictions: Disability[];
};
