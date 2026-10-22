import type { QuestionOf, Submission } from '../src/features/questions/model';
import type { QuestionViewProps } from '../src/features/questions/QuestionView';
declare const numeric: QuestionOf<'numeric'>;
// @ts-expect-error Numeric values are raw strings, not arrays.
const invalid: Submission = { question: numeric, answer: { type: 'numeric', value: [] } };
// @ts-expect-error A numeric question cannot use a matching answer.
const mismatch: Submission = { question: numeric, answer: { type: 'matching', value: {} } };
// @ts-expect-error Controlled UI rejects answer shapes of a different type.
const invalidView: QuestionViewProps = { type: 'numeric', question: numeric, value: [], onChange: () => {} };
void [invalid, mismatch, invalidView];
