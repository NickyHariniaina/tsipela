import { separate } from "./parser.js";
import fs from 'fs/promises';

const data = await fs.readFile('./data/litera_a.json', 'utf8');
const jsonData = JSON.parse(data);
console.log(separate(jsonData[40].word.toLowerCase()));
