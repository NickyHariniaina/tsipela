import { separate } from "./parser.js";
import { readJsonFile } from "./utils.js";

console.log(separate("angivy"));

const jsonData = await readJsonFile("./data/litera_a.json");
console.log(jsonData);


