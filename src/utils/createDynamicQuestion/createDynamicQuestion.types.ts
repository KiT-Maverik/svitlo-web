import {Resource, TextResource_AllLocales} from "@/types/content/resources";
import {NonEmptyArray} from "@/types/misc.types";

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

export type DynamicQuestion_StringArgumentConfig =
    DynamicQuestion_ArgumentBase<"string"> &
    DynamicQuestion_ArgumentConstraints<string> & {
    minLength?: number;
    maxLength?: number;
};

export type DynamicQuestion_NumberArgumentConfig =
    DynamicQuestion_ArgumentBase<"number"> &
    DynamicQuestion_ArgumentConstraints<number> & {
    min?: number;
    max?: number;
    step?: number;
};

export type DynamicQuestion_BooleanArgumentConfig =
    DynamicQuestion_ArgumentBase<"boolean">;

export type DynamicQuestion_ArgumentConfig =
    | DynamicQuestion_StringArgumentConfig
    | DynamicQuestion_NumberArgumentConfig
    | DynamicQuestion_BooleanArgumentConfig

export type DynamicQuestion_ArgumentProposal<
    T extends DynamicQuestion_ArgumentType,
> =
    T extends "boolean"
        ? DynamicQuestion_BooleanArgumentConfig & { value: boolean }
        : T extends "number"
            ? DynamicQuestion_NumberArgumentConfig & { value: number }
            : T extends "string"
                ? DynamicQuestion_StringArgumentConfig & { value: string }
                : never;

export type DynamicQuestion_ArgumentValue<
    T extends DynamicQuestion_ArgumentType,
> = Pick<DynamicQuestion_ArgumentProposal<T>, "selector" | "value">;

export type DynamicQuestion_AnswerChecker<
    T extends DynamicQuestion_ArgumentType,
> = (args: DynamicQuestion_ArgumentValue<T>[]) => boolean;

export interface DynamicQuestion_Config {
    arguments: [DynamicQuestion_ArgumentConfig,...DynamicQuestion_ArgumentConfig[]];
    buildVariants: (config: DynamicQuestion_Config) => DynamicQuestion_Config;
    checkConstraints: (config: DynamicQuestion_Config) => boolean;
    checkAnswer: DynamicQuestion_AnswerChecker
    content: {
        question: NonEmptyArray<Resource[]>;
        explanation: NonEmptyArray<Resource[]>;
        answer: NonEmptyArray<Resource[]>;
    },
    name: TextResource_AllLocales,
}

export interface DynamicQuestion_Variant {
    args: () => NonEmptyArray<{selector: string; value: any}>;
    checkAnswer: DynamicQuestion_AnswerChecker;
}

export interface DynamicQuestion {
    getArgs: () => NonEmptyArray<DynamicQuestion_ArgumentConfig>;
    updateArgs: (args) => void;
    calculateValidVariants: () => void;
    hasVariants: () => boolean;
    getAllVariants: () => NonEmptyArray<DynamicQuestion_Config>;
}
