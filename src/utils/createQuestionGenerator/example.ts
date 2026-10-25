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
    min: 2,
    max: 11,
    type: "number"
} as const;

type Arguments = typeof girlsApple | typeof boysApple

const checkConstraints = (girlsApple: number, boysApple: number) => girlsApple < boysApple

type F = (boysApple?: number, girlsApple?: number) => void

const getValidVariants: F = (
    girlsApple,
    boysApple,
) => {
    let girlsOptions: number[] = [];
    let boysOptions: number[] = [];

    if (boysApple && girlsApple) {
        girlsOptions = [girlsApple]
        boysOptions = [boysApple]
    }
    else if (boysApple) {
        girlsOptions = Array.from({length: boysApple - 1}, (_, i) => i + 1)
        boysOptions = [boysApple]
    }
    else if (girlsApple) {
        girlsOptions = [girlsApple]
        boysOptions = Array.from({length: girlsApple - 1}, (_, i) => i + 1)
    }

    return variants
}


const generator
