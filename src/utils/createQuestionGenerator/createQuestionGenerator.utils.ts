import {
    Generator_ArgumentProposal,
    GeneratorArgumentType
} from "@/types/configs/generator.types";
import {NonEmptyArray} from "@/types/misc.types";

export const validateNumberArgumentProposition = (arg: Generator_ArgumentProposal<"number">) => {
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

export const validateStringArgumentProposition = (arg: Generator_ArgumentProposal<"string">) => {
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

export const validateBooleanArgumentProposition = (arg: Generator_ArgumentProposal<"boolean">) => {
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

export const validateArgument = (arg: Generator_ArgumentProposal<GeneratorArgumentType>) => {
    switch (arg.type) {
        case "number":
            return validateNumberArgumentProposition(arg);
        case "string":
            return validateStringArgumentProposition(arg);
        case "boolean":
            return validateBooleanArgumentProposition(arg);
    }
};

type VariantsGenerator_Config = {
    propositions: NonEmptyArray<Generator_ArgumentProposal<GeneratorArgumentType>>;
    handler: () => void;
}

type VariantsConfig = {
    args: NonEmptyArray<Generator_ArgumentProposal<GeneratorArgumentType>>;
    variants: NonEmptyArray<Generator_ArgumentProposal<GeneratorArgumentType>>;
    randomTask: Generator_ArgumentProposal<GeneratorArgumentType>;
}

type VariantsGenerator = (config: VariantsGenerator_Config) => VariantsConfig

export const getValidVariants: VariantsGenerator = ({propositions, handler}) => {
    const validatedPropositions = propositions.map((i) => validateArgument(i));

    if (validatedPropositions.every(({success}) => success)) {
        handler()
    }

    return {
        validatedPropositions,
        variants,
        randomTask,
    }
}
