export type GeneratorArgumentType =
    | "string"
    | "number"
    | "boolean";

type GeneratorArgumentBase<TType extends GeneratorArgumentType> = {
    type: TType;
    selector: string;
};

type GeneratorArgumentConstraints<TValue> = {
    exclude?: readonly TValue[];
    allowedValues?: readonly TValue[];
    exact?: TValue;
};

export type StringGeneratorArgument =
    GeneratorArgumentBase<"string"> &
    GeneratorArgumentConstraints<string> & {
    minLength?: number;
    maxLength?: number;
};

export type NumberGeneratorArgument =
    GeneratorArgumentBase<"number"> &
    GeneratorArgumentConstraints<number> & {
    min?: number;
    max?: number;
    step?: number;
};

export type BooleanGeneratorArgument =
    GeneratorArgumentBase<"boolean">;

type GeneratorArgument =
    | StringGeneratorArgument
    | NumberGeneratorArgument
    | BooleanGeneratorArgument

export type Generator_ArgumentProposal<
    T extends GeneratorArgumentType,
> =
    T extends "boolean"
        ? BooleanGeneratorArgument & { value: boolean }
        : T extends "number"
            ? NumberGeneratorArgument & { value: number }
            : T extends "string"
                ? StringGeneratorArgument & { value: string }
                : never;

export interface Generator_Config {
    arguments: [GeneratorArgument,...GeneratorArgument[]];
    content: {
        question: string[];
        explanation: string[];
    },
    handlers: {
        createValidConfig: (config: Generator_Config) => Generator_Config;
        checkAnswer: (config: Generator_Config) => boolean;
        getValidValuesForRemainingArgument: (config: Generator_Config) => any;
    }
}
