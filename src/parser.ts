import { Syllable, type SyllableObject } from "./syllable.js";

export interface Word {
    syllables: SyllableObject[];
}

export function separate(
    word: string,
    syllables: SyllableObject[] = [],
    undefinedCount: number = 0,
): Word {
    if (word.length === 0) {
        return { syllables: [] };
    }

    if (syllables.length == 0) {
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (char == "a") {
                syllables.push({ syllable: Syllable.a, character: char });
            } else if (char == "e") {
                syllables.push({ syllable: Syllable.e, character: char });
            } else if (char == "i" || char == "y") {
                syllables.push({ syllable: Syllable.i, character: char });
            } else if (char == "o") {
                syllables.push({ syllable: Syllable.u, character: char });
            } else if (char) {
                syllables.push({
                    syllable: Syllable.consonant,
                    character: char,
                });
            }
        }
    }
    for (let i = 0; i < syllables.length; i++) {
        if (syllables.length > 0 && syllables.length > i) {
            if (syllables[i]?.syllable == Syllable.consonant) {
                if (syllables[i]?.character == "t") {
                    if (syllables[i + 1]?.syllable == Syllable.u) {
                        syllables[i] = {
                            syllable: Syllable.tu,
                            character: "to",
                        };
                        syllables.splice(i + 1, 1);
                        undefinedCount--;
                    }
                }
            }
        }
    }

    if (undefinedCount > 0) {
        console.log("syllables here: " + syllables);
        separate(word, syllables, undefinedCount);
    }

    return { syllables };
}
