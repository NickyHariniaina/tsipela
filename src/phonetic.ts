import type { Word } from "./parser.js";
import { Syllable } from "./syllable.js";

export function factorizePhonetic(phonetic: string): {
    initialPhonetic: string;
    lowestPhonetic: string;
} {
    //  NOTE: some malagasy texto like factorization.
    const lowestPhonetic: string = phonetic
        .replaceAll("hu", "u")
        .replaceAll("ua", "o")
        .replaceAll(/\b(\w*)(nina)\b/g, "$1na")
        .replace(/\b(\w*)(na|no|ne|ni|nu)\b/g, "$1n")
        .replace(/\b(\w*)(hi)\b/g, "$1")
        .replaceAll("ia", "e")
        .replace(/\b(\w*)(si)\b/g, "$1s")
        .replaceAll("u", "o");

    return {
        initialPhonetic: phonetic,
        lowestPhonetic,
    };
}

// Consonant onsets handled by getWordFromPhonetic, longest first.
const ONSETS = [
    "ts",
    "tr",
    "n",
    "m",
    "r",
    "t",
    "l",
    "h",
    "d",
    "k",
    "z",
    "g",
    "f",
    "s",
    "b",
    "v",
    "p",
    "j",
] as const;

type Onset = (typeof ONSETS)[number];

function isOnset(value: string): value is Onset {
    return (ONSETS as readonly string[]).includes(value);
}

//  Maps a normalized phonetic back to orthography.
//  Convention: phonetic uses `u` for the `o` sound and `i` for `y`,
//  except word-initial `ao` which is kept as `o` by the factorizer.
//  NOTE: only invert factorizeSyllableToNormalPhonetic output, not the
//  lossy factorizePhonetic (texto lowering) output.
export function getWordFromPhonetic(phonetic: string): string {
    let str = "";

    for (let i = 0; i < phonetic.length; i++) {
        const current = phonetic[i] ?? "";
        const previous = phonetic[i - 1] ?? "";

        // Longest onset first so `ts`/`tr` win over bare `t`.
        const pair = current + (phonetic[i + 1] ?? "");
        const onset: string | undefined = isOnset(pair)
            ? pair
            : isOnset(current)
              ? current
              : undefined;

        if (onset !== undefined) {
            const vowelIndex = i + onset.length;
            const vowel = phonetic[vowelIndex] ?? "";
            const isLastSyllable = vowelIndex + 1 >= phonetic.length;

            if (vowel === "a" || vowel === "e") {
                str += onset + vowel;
                i = vowelIndex;
            } else if (vowel === "i") {
                // `i` at end of word is spelled `y` (`ny`, `ty`, `tsy`...).
                str += onset + (isLastSyllable ? "y" : "i");
                i = vowelIndex;
            } else if (vowel === "u") {
                // Phonetic `u` is spelled `o` after a consonant.
                str += onset + "o";
                i = vowelIndex;
            } else {
                // Bare consonant (`n`, `m`, ...).
                str += onset;
                i = vowelIndex - 1;
            }
            continue;
        }

        if (current === "o" && previous === "a") {
            str += "o";
        } else if (current === "o") {
            str += "ao";
        } else if (current === "a") {
            str += "a";
        } else if (current === "e") {
            str += "e";
        } else if (current === "i") {
            // 'i' at the end of the phonetic string becomes 'y'
            if (i === phonetic.length - 1) {
                str += "y";
            } else {
                str += "i";
            }
        } else if (current === "u") {
            str += "o";
        } else {
            str += current;
        }
    }

    return str;
}

export function factorizeSyllableToNormalPhonetic(word: Word): string {
    let phonetic = "";

    for (let i = 0; i < word.syllables.length; i++) {
        const currentSyllable = word.syllables[i];

        if (!currentSyllable) continue;

        if (
            currentSyllable.syllable === Syllable.a ||
            currentSyllable.syllable === Syllable.e ||
            currentSyllable.syllable === Syllable.i
        ) {
            phonetic += currentSyllable.syllable;
        } else if (currentSyllable.syllable === Syllable.u) {
            phonetic = appendStandaloneU(phonetic, word, i);
        } else if (currentSyllable.syllable === Syllable.consonant) {
            phonetic += currentSyllable.character || "";
        } else {
            // Every other Syllable enum value already equals its
            // phonetic spelling (`na` -> "na", `tsi` -> "tsi", ...).
            phonetic += currentSyllable.syllable;
        }
    }

    return phonetic;
}

// Handles a standalone `o` vowel: `o` is `u` in phonetic, except inside
// an `ao` sequence (`taova` -> "tova") and word-initial `ao` (`aona`).
function appendStandaloneU(phonetic: string, word: Word, i: number): string {
    const previousCharacter = word.syllables[i - 1]?.character ?? "";
    const currentCharacter = word.syllables[i]?.character ?? "";
    const isLast = i + 1 === word.syllables.length;

    if (
        currentCharacter === "o" &&
        phonetic === "a" &&
        previousCharacter === "a" &&
        !isLast
    ) {
        return phonetic + "o";
    }

    if (previousCharacter.endsWith("a") && !isLast) {
        return phonetic.slice(0, -1) + "o";
    }

    return phonetic + "u";
}
