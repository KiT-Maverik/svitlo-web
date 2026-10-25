import {z} from "zod";

import {
    Generator_Config,
    NumberGeneratorArgument,
    Generator_ArgumentProposal,
    GeneratorArgumentType
} from "@/types/configs/generator.types";

const girlsApple: NumberGeneratorArgument = {
    selector: "girlsApple",
    min: 1,
    max: 10,
    type: "number"
} as const;

const boysApple: NumberGeneratorArgument = {
    selector: "boysApple",
    min: 1,
    max: 10,
    type: "number"
} as const;

const validateNumberArgument = (arg: Generator_ArgumentProposal<"number">) => {
    const constraints = {
        selector: typeof arg.selector === "string",
        type: arg.type === typeof arg.value,
        min: arg.min === undefined ? true : arg.value <= arg.min,
        max: arg.max === undefined ? true : arg.value <= arg.max,
        allowedValues: arg.allowedValues !== undefined && arg.allowedValues.includes(arg.value),
        exclude: arg.exclude === undefined || !arg.exclude.includes(arg.value),
        exact: arg.value === arg.exact,
    };

    return {
        success: Object.values(constraints).every(v => v),
        selector: arg.selector,
        type: arg.type,
        constraints,
    } as const;
}

const validateStringArgument = (arg: Generator_ArgumentProposal<"string">) => {
    const constraints = {
        selector: typeof arg.selector === "string",
        type: arg.type === typeof arg.value,
        minLength: arg.minLength === undefined ? true : arg.value.length <= arg.minLength,
        maxLength: arg.maxLength === undefined ? true : arg.value.length <= arg.maxLength,
        allowedValues: arg.allowedValues !== undefined && arg.allowedValues.includes(arg.value),
        exclude: arg.exclude === undefined || !arg.exclude.includes(arg.value),
        exact: arg.value === arg.exact,
    };

    return {
        success: Object.values(constraints).every(v => v),
        selector: arg.selector,
        type: arg.type,
        constraints,
    } as const;
}

const validateBooleanArgument = (arg: Generator_ArgumentProposal<"boolean">) => {
    const constraints = {
        selector: typeof arg.selector === "string",
        type: arg.type === typeof arg.value,
    };

    return {
        success: Object.values(constraints).every(v => v),
        selector: arg.selector,
        type: arg.type,
        constraints,
    } as const;
}

const validateArgument = (arg: Generator_ArgumentProposal<GeneratorArgumentType>) => {
    switch (arg.type) {
        case "number":
            return validateNumberArgument(arg);
        case "string":
            return validateStringArgument(arg);
        case "boolean":
            return validateBooleanArgument(arg);
    }
};

type Arguments = typeof girlsApple | typeof boysApple

const validateConfig = (girlsApples: number, boysApples: number) => {
    return boysApples > girlsApples
}

const getConfig = (override: [Arguments, ...Arguments[]]) => {

}

