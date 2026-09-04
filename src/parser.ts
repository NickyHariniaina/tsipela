import type { Syllable } from "./syllable.js";

export interface Word {
    syllables: Syllable[],
}

export function separate(_word: string): Word {
    let syllables: Syllable[] = []
    return { syllables }
}
