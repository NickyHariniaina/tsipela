import { separate } from "./parser.js";
import { factorizeSyllableToNormalPhonetic } from "./phonetic.js";
import { readJsonFile } from "./utils.js";

const word = "aona";

const syllables = separate(word);

const phonetic = factorizeSyllableToNormalPhonetic(syllables);

console.log(phonetic);

// aona -> get phonetic: aona -> get probability -> aona, ahoana, aon, aoana -> search in database -> ahoana -> return ahoana

