import { Syllable } from "./syllable.js";

export interface Word {
    syllables: Syllable[];
}

export function separate(word: string): Word {
    if (word.length === 0) {
        return { syllables: [] };
    }

    let syllables: Syllable[] = [];

    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        switch (char) {
            case "a":
                syllables.push(Syllable.a);
                break;
            case "o":
                syllables.push(Syllable.u);
                break;
            default:
                throw new Error("Invalid character");
        }
    }

    return { syllables };
}
