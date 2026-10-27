import { assessmentMethods_AssessmentMethod_Ids } from '../../../Maps/assessmentMethodTaxonomy/index.ids';
import type { AssessmentMethodId } from './assessmentMethod.types';
import type { Question_Base_Config } from './question.types';

const valid: AssessmentMethodId = assessmentMethods_AssessmentMethod_Ids.retrieval;
void valid;

// @ts-expect-error A semantic key is not a stable method UUID.
const badKey: AssessmentMethodId = 'retrieval';
void badKey;

// @ts-expect-error UUIDs outside the authored dictionary are not allowed.
const badUuid: AssessmentMethodId = 'aaaaaaaa-aaaa-4aaa-aaaa-aaaaaaaaaaaa';
void badUuid;

// @ts-expect-error All content questions must declare exactly one primary method.
const missingMethod: Question_Base_Config = {
  id: 'q',
  type: 'answer-with-number',
  restrictions: [],
  content: [{ id: 'prompt', blockType: 'text', allLocales: false, value: { en: 'Question' } }],
};
void missingMethod;
