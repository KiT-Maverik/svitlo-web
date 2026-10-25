export type GeneratorArgumentType =
    | "string"
    | "number"
    | "boolean"
    | "enum";

type GeneratorArgumentBase<
    TType extends GeneratorArgumentType,
    TValue,
> = {
    type: TType;
    selector: string;
    exclude?: readonly TValue[];
    exact?: TValue;
};

export type StringGeneratorArgument =
    GeneratorArgumentBase<"string", string> & {
    minLength?: number;
    maxLength?: number;
};

export type NumberGeneratorArgument =
    GeneratorArgumentBase<"number", number> & {
    min?: number;
    max?: number;
    step?: number;
};

export type BooleanGeneratorArgument =
    GeneratorArgumentBase<"boolean", boolean>;

export type EnumGeneratorArgument =
    GeneratorArgumentBase<"enum", string> & {
    values: readonly [string, ...string[]];
};

type GeneratorArgument =
    | StringGeneratorArgument
    | NumberGeneratorArgument
    | BooleanGeneratorArgument
    | EnumGeneratorArgument;

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
