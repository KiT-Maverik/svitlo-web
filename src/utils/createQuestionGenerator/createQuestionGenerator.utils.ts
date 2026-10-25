import {Generator_Config, NumberGeneratorArgument} from "@/types/configs/generator.types";

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

type Arguments = typeof girlsApple | typeof boysApple

const getConfig = (override: [Arguments, ...Arguments[]]) => {

}

