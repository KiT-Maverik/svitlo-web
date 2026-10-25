export type DynamicQuestion_ArgumentType =
    | "string"
    | "number"
    | "boolean";

type DynamicQuestion_ArgumentBase<TType extends DynamicQuestion_ArgumentType> = {
    type: TType;
    selector: string;
};

type DynamicQuestion_ArgumentConstraints<TValue> = {
    exclude?: readonly TValue[];
    allowedValues?: readonly TValue[];
    exact?: TValue;
};

export type DynamicQuestion_StringArgument =
    DynamicQuestion_ArgumentBase<"string"> &
    DynamicQuestion_ArgumentConstraints<string> & {
    minLength?: number;
    maxLength?: number;
};

export type DynamicQuestion_NumberArgument =
    DynamicQuestion_ArgumentBase<"number"> &
    DynamicQuestion_ArgumentConstraints<number> & {
    min?: number;
    max?: number;
    step?: number;
};

export type DynamicQuestion_BooleanArgument =
    DynamicQuestion_ArgumentBase<"boolean">;

export type DynamicQuestion_Argument =
    | DynamicQuestion_StringArgument
    | DynamicQuestion_NumberArgument
    | DynamicQuestion_BooleanArgument

export type DynamicQuestion__ArgumentProposal<
    T extends DynamicQuestion_ArgumentType,
> =
    T extends "boolean"
        ? DynamicQuestion_BooleanArgument & { value: boolean }
        : T extends "number"
            ? DynamicQuestion_NumberArgument & { value: number }
            : T extends "string"
                ? DynamicQuestion_StringArgument & { value: string }
                : never;

export interface DynamicQuestion__Config {
    arguments: [DynamicQuestion_Argument,...DynamicQuestion_Argument[]];
    content: {
        question: string[];
        explanation: string[];
    },
    handlers: {
        createValidConfig: (config: DynamicQuestion__Config) => DynamicQuestion__Config;
        checkAnswer: (config: DynamicQuestion__Config) => boolean;
        getValidValuesForRemainingArgument: (config: DynamicQuestion__Config) => any;
    }
}
