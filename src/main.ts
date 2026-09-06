import { separate } from "./parser.js";
import { factorizeSyllableToNormalPhonetic } from "./phonetic.js";
import { readJsonFile, readTextFile } from "./utils.js";


const data = await readTextFile("./example/test.txt");

console.log(data);

