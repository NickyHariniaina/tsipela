import { separate } from "./parser.js";
import {
    factorizeSyllableToNormalPhonetic,
} from "./phonetic.js";
import { readJsonFile } from "./utils.js";

const word = "taona";
const expectedPhonetic = factorizeSyllableToNormalPhonetic(separate("tona"));

const syllables = separate(word);

const phonetic = factorizeSyllableToNormalPhonetic(syllables);

const factorizedPhonetic = factorizePhonetic(phonetic);
const expectedFactorizedPhonetic = factorizePhonetic(expectedPhonetic);

console.log(factorizedPhonetic);
console.log(expectedFactorizedPhonetic);
console.log(factorizedPhonetic === expectedFactorizedPhonetic);

export function factorizePhonetic(phonetic: string): string {
    return phonetic
        .replaceAll("hu", "u")
        .replaceAll("ua", "o")
        .replace(/\b(\w*)(na|no|ne|ni|nu)\b/g, "$1n")
        .replace(/\b(\w*)(hi)\b/g, "$1")
        .replaceAll("ia", "e")
        .replace(/\b(\w*)(si)\b/g, "$1s")
        .replace("u", "o")
}
