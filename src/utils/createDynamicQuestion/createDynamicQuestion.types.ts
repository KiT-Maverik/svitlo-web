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

export interface DynamicQuestion_Config {
    arguments: [DynamicQuestion_Argument,...DynamicQuestion_Argument[]];
    buildVariants: (config: DynamicQuestion_Config) => DynamicQuestion_Config;
    checkConstraints: (config: DynamicQuestion_Config) => boolean;
    checkAnswer: (answer: string) => boolean;
    content: {
        question: NonEmptyArray<Resource[]>;
        explanation: NonEmptyArray<Resource[]>;
        answer: NonEmptyArray<Resource[]>;
    },
    name: TextResource_AllLocales,
}

export interface DynamicQuestion_Variant {
    args: () => NonEmptyArray<{selector: string; value: any}>;
    checkAnswer: (answer: string) => boolean;
}

export interface DynamicQuestion {
    getArgs: () => NonEmptyArray<DynamicQuestion_Argument>;
    updateArgs: (args) => void;
    calculateValidVariants: () => void;
    hasVariants: () => boolean;
    getAllVariants: () => NonEmptyArray<DynamicQuestion_Config>;
}
