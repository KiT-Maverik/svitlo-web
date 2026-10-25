import {z} from "zod";

import {
    Generator_Config,
    NumberGeneratorArgument,
    Generator_ArgumentProposal,
    GeneratorArgumentType
} from "@/types/configs/generator.types";
import {NonEmptyArray} from "@/types/misc.types";

const girlsApple: NumberGeneratorArgument = {
    selector: "girlsApple",
    min: 1,
    max: 10,
    type: "number"
} as const;

const boysApple: NumberGeneratorArgument = {
    selector: "boysApple",
    min: 1,
    max: 11,
    type: "number"
} as const;

type Arguments = typeof girlsApple | typeof boysApple

const checkConstraints = (girlsApple: number, boysApple: number) => girlsApple < boysApple

const getValidVariants = ({
    girlsApple: number,
    boysApple: number,
}) => {
    let variants: [number, number] | undefined;

    if (boysApple) {

    }

    return variants
}
