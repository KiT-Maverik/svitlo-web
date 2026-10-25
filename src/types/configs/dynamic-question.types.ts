import type { NonEmptyArray } from '../misc.types';
import type { TextResource } from '../content/resources';

export type DynamicQuestionArgumentType = 'string' | 'number' | 'boolean';
export type DynamicQuestionArgumentValue = string | number | boolean;

type DynamicQuestionArgumentBase<TType extends DynamicQuestionArgumentType> = {
  type: TType;
  selector: string;
};

type DynamicQuestionArgumentConstraints<TValue> = {
  exclude?: readonly TValue[];
  allowedValues?: readonly TValue[];
  exact?: TValue;
};

export type StringDynamicQuestionArgument = DynamicQuestionArgumentBase<'string'> & DynamicQuestionArgumentConstraints<string> & {
  minLength?: number;
  maxLength?: number;
};

export type NumberDynamicQuestionArgument = DynamicQuestionArgumentBase<'number'> & DynamicQuestionArgumentConstraints<number> & {
  min?: number;
  max?: number;
  step?: number;
};

export type BooleanDynamicQuestionArgument = DynamicQuestionArgumentBase<'boolean'>;

export type DynamicQuestionArgument = StringDynamicQuestionArgument | NumberDynamicQuestionArgument | BooleanDynamicQuestionArgument;

export type DynamicQuestionArgumentProposal<T extends DynamicQuestionArgumentType = DynamicQuestionArgumentType> =
  T extends 'boolean'
    ? BooleanDynamicQuestionArgument & { value: boolean }
    : T extends 'number'
      ? NumberDynamicQuestionArgument & { value: number }
      : T extends 'string'
        ? StringDynamicQuestionArgument & { value: string }
        : never;

export type DynamicQuestionVariant = Record<string, DynamicQuestionArgumentValue>;

export interface DynamicQuestionHandlerContext {
  arguments: NonEmptyArray<DynamicQuestionArgument>;
  propositions: readonly DynamicQuestionArgumentProposal[];
  getValues: (selector: string, propositions?: readonly DynamicQuestionArgumentProposal[]) => DynamicQuestionArgumentValue[];
  createVariants: (domains: Readonly<Record<string, readonly DynamicQuestionArgumentValue[]>>) => DynamicQuestionVariant[];
}

export type DynamicQuestionVariantsHandler = (context: DynamicQuestionHandlerContext) => DynamicQuestionVariant[];

export interface DynamicQuestionConfig {
  shortName: TextResource;
  arguments: NonEmptyArray<DynamicQuestionArgument>;
  handler: DynamicQuestionVariantsHandler;
}

export interface DynamicQuestion {
  config: DynamicQuestionConfig;
  getValidVariants: (propositions?: readonly DynamicQuestionArgumentProposal[]) => DynamicQuestionVariant[];
}
