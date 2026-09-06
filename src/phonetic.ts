import type { Word } from "./parser.js";
import { Syllable } from "./syllable.js";

export function factorizePhonetic(phonetic: string) {
    //  NOTE: some malagasy texto like factorization.
    let newPhonetic: string = phonetic
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
        lowestPhonetic: newPhonetic,
    };
}

//  TODO: This function may be removed later... OR FIXED.
//   FIXME: Whit is wrong:
//   - This function will not return the correct word since we factorize the phonetic before using this function.
//   The factorized phonetic is not the same as the phonetic of the word.
//   Why ? -> we really lowered it. So any word would just match ( used for matching )
//   ... But since I'm writing this... I think Imma just store the actual data that will be changed...
//   Idk if replaceAll and replace act on the current string or on a copy of it.
//   I'm a bad js dev, btw.
export function getWordFromPhonetic(phonetic: string): string {
    let str = "";

    for (let i = 0; i < phonetic.length; i++) {
        const current = phonetic[i];
        const previous = phonetic[i - 1] || "";
        const next = phonetic[i + 1] || "";
        const nextNext = phonetic[i + 2] || "";

        if (current === "t" && next === "s") {
            if (nextNext === "a") {
                str += "tsa";
                i += 2;
            } else if (nextNext === "e") {
                str += "tse";
                i += 2;
            } else if (nextNext === "i") {
                str += "tsi";
                i += 2;
            } else if (nextNext === "u") {
                str += "tso";
                i += 2;
            } else {
                str += "ts";
                i += 1;
            }
        } else if (current === "t" && next === "r") {
            if (nextNext === "a") {
                str += "tra";
                i += 2;
            } else if (nextNext === "e") {
                str += "tre";
                i += 2;
            } else if (nextNext === "i") {
                str += "tri";
                i += 2;
            } else if (nextNext === "u") {
                str += "tro";
                i += 2;
            } else {
                str += "tr";
                i += 1;
            }
        } else if (current === "n") {
            if (next === "a") {
                str += "na";
                i++;
            } else if (next === "e") {
                str += "ne";
                i++;
            } else if (next === "i") {
                // Check if this is the last syllable (end of word)
                if (i + 2 >= phonetic.length) {
                    str += "ny"; // 'i' at end becomes 'y'
                } else {
                    str += "ni";
                }
                i++;
            } else if (next === "u") {
                str += "no";
                i++;
            } else {
                str += "n";
            }
        } else if (current === "m") {
            if (next === "a") {
                str += "ma";
                i++;
            } else if (next === "e") {
                str += "me";
                i++;
            } else if (next === "i") {
                if (i + 2 >= phonetic.length) {
                    str += "my";
                } else {
                    str += "mi";
                }
                i++;
            } else if (next === "u") {
                str += "mo";
                i++;
            } else {
                str += "m";
            }
        } else if (current === "r") {
            if (next === "a") {
                str += "ra";
                i++;
            } else if (next === "e") {
                str += "re";
                i++;
            } else if (next === "i") {
                if (i + 2 >= phonetic.length) {
                    str += "ry";
                } else {
                    str += "ri";
                }
                i++;
            } else if (next === "u") {
                str += "ro";
                i++;
            } else {
                str += "r";
            }
        } else if (current === "t") {
            if (next === "a") {
                str += "ta";
                i++;
            } else if (next === "e") {
                str += "te";
                i++;
            } else if (next === "i") {
                if (i + 2 >= phonetic.length) {
                    str += "ty";
                } else {
                    str += "ti";
                }
                i++;
            } else if (next === "u") {
                str += "to";
                i++;
            } else {
                str += "t";
            }
        } else if (current === "l") {
            if (next === "a") {
                str += "la";
                i++;
            } else if (next === "e") {
                str += "le";
                i++;
            } else if (next === "i") {
                if (i + 2 >= phonetic.length) {
                    str += "ly";
                } else {
                    str += "li";
                }
                i++;
            } else if (next === "u") {
                str += "lo";
                i++;
            } else {
                str += "l";
            }
        } else if (current === "h") {
            if (next === "a") {
                str += "ha";
                i++;
            } else if (next === "e") {
                str += "he";
                i++;
            } else if (next === "i") {
                if (i + 2 >= phonetic.length) {
                    str += "hy";
                } else {
                    str += "hi";
                }
                i++;
            } else if (next === "u") {
                str += "ho";
                i++;
            } else {
                str += "h";
            }
        } else if (current === "d") {
            if (next === "a") {
                str += "da";
                i++;
            } else if (next === "e") {
                str += "de";
                i++;
            } else if (next === "i") {
                if (i + 2 >= phonetic.length) {
                    str += "dy";
                } else {
                    str += "di";
                }
                i++;
            } else if (next === "u") {
                str += "do";
                i++;
            } else {
                str += "d";
            }
        } else if (current === "k") {
            if (next === "a") {
                str += "ka";
                i++;
            } else if (next === "e") {
                str += "ke";
                i++;
            } else if (next === "i") {
                if (i + 2 >= phonetic.length) {
                    str += "ky";
                } else {
                    str += "ki";
                }
                i++;
            } else if (next === "u") {
                str += "ko";
                i++;
            } else {
                str += "k";
            }
        } else if (current === "z") {
            if (next === "a") {
                str += "za";
                i++;
            } else if (next === "e") {
                str += "ze";
                i++;
            } else if (next === "i") {
                if (i + 2 >= phonetic.length) {
                    str += "zy";
                } else {
                    str += "zi";
                }
                i++;
            } else if (next === "u") {
                str += "zo";
                i++;
            } else {
                str += "z";
            }
        } else if (current === "g") {
            if (next === "a") {
                str += "ga";
                i++;
            } else if (next === "e") {
                str += "ge";
                i++;
            } else if (next === "i") {
                if (i + 2 >= phonetic.length) {
                    str += "gy";
                } else {
                    str += "gi";
                }
                i++;
            } else if (next === "u") {
                str += "go";
                i++;
            } else {
                str += "g";
            }
        } else if (current === "f") {
            if (next === "a") {
                str += "fa";
                i++;
            } else if (next === "e") {
                str += "fe";
                i++;
            } else if (next === "i") {
                if (i + 2 >= phonetic.length) {
                    str += "fy";
                } else {
                    str += "fi";
                }
                i++;
            } else if (next === "u") {
                str += "fo";
                i++;
            } else {
                str += "f";
            }
        } else if (current === "s") {
            if (next === "a") {
                str += "sa";
                i++;
            } else if (next === "e") {
                str += "se";
                i++;
            } else if (next === "i") {
                if (i + 2 >= phonetic.length) {
                    str += "sy";
                } else {
                    str += "si";
                }
                i++;
            } else if (next === "u") {
                str += "so";
                i++;
            } else {
                str += "s";
            }
        } else if (current === "b") {
            if (next === "a") {
                str += "ba";
                i++;
            } else if (next === "e") {
                str += "be";
                i++;
            } else if (next === "i") {
                if (i + 2 >= phonetic.length) {
                    str += "by";
                } else {
                    str += "bi";
                }
                i++;
            } else if (next === "u") {
                str += "bo";
                i++;
            } else {
                str += "b";
            }
        } else if (current === "v") {
            if (next === "a") {
                str += "va";
                i++;
            } else if (next === "e") {
                str += "ve";
                i++;
            } else if (next === "i") {
                if (i + 2 >= phonetic.length) {
                    str += "vy";
                } else {
                    str += "vi";
                }
                i++;
            } else if (next === "u") {
                str += "vo";
                i++;
            } else {
                str += "v";
            }
        } else if (current === "p") {
            if (next === "a") {
                str += "pa";
                i++;
            } else if (next === "e") {
                str += "pe";
                i++;
            } else if (next === "i") {
                if (i + 2 >= phonetic.length) {
                    str += "py";
                } else {
                    str += "pi";
                }
                i++;
            } else if (next === "u") {
                str += "po";
                i++;
            } else {
                str += "p";
            }
        } else if (current === "j") {
            if (next === "a") {
                str += "ja";
                i++;
            } else if (next === "e") {
                str += "je";
                i++;
            } else if (next === "i") {
                if (i + 2 >= phonetic.length) {
                    str += "jy";
                } else {
                    str += "ji";
                }
                i++;
            } else if (next === "u") {
                str += "jo";
                i++;
            } else {
                str += "j";
            }
        } else if (current === "o" && previous == "a") {
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

        if (currentSyllable.syllable === Syllable.a) {
            phonetic += "a";
        } else if (currentSyllable.syllable === Syllable.e) {
            phonetic += "e";
        } else if (currentSyllable.syllable === Syllable.i) {
            phonetic += "i";
        } else if (currentSyllable.syllable === Syllable.u) {
            const len = word.syllables[i - 1]?.character.length;
            if (
                word.syllables[i]?.character == "o" &&
                phonetic.length == 1 &&
                word.syllables[i - 1]?.character == "a" &&
                i + 1 != word.syllables.length
            ) {
                phonetic += "o";
            } else if (word.syllables[i - 1]?.character[len - 1] == "a") {
                if (i + 1 != word.syllables.length) {
                    phonetic = phonetic.slice(0, -1);
                    phonetic += "o";
                } else if (i == 1) {
                    phonetic += "u";
                } else {
                    phonetic += "u";
                }
            } else {
                phonetic += "u";
            }
        } else if (currentSyllable.syllable === Syllable.na) {
            phonetic += "na";
        } else if (currentSyllable.syllable === Syllable.ni) {
            phonetic += "ni";
        } else if (currentSyllable.syllable === Syllable.nu) {
            phonetic += "nu";
        } else if (currentSyllable.syllable === Syllable.ma) {
            phonetic += "ma";
        } else if (currentSyllable.syllable === Syllable.me) {
            phonetic += "me";
        } else if (currentSyllable.syllable === Syllable.mi) {
            phonetic += "mi";
        } else if (currentSyllable.syllable === Syllable.mu) {
            phonetic += "mu";
        } else if (currentSyllable.syllable === Syllable.ra) {
            phonetic += "ra";
        } else if (currentSyllable.syllable === Syllable.re) {
            phonetic += "re";
        } else if (currentSyllable.syllable === Syllable.ri) {
            phonetic += "ri";
        } else if (currentSyllable.syllable === Syllable.ru) {
            phonetic += "ru";
        } else if (currentSyllable.syllable === Syllable.ta) {
            phonetic += "ta";
        } else if (currentSyllable.syllable === Syllable.ti) {
            phonetic += "ti";
        } else if (currentSyllable.syllable === Syllable.tu) {
            phonetic += "tu";
        } else if (currentSyllable.syllable === Syllable.la) {
            phonetic += "la";
        } else if (currentSyllable.syllable === Syllable.le) {
            phonetic += "le";
        } else if (currentSyllable.syllable === Syllable.li) {
            phonetic += "li";
        } else if (currentSyllable.syllable === Syllable.lu) {
            phonetic += "lu";
        } else if (currentSyllable.syllable === Syllable.ha) {
            phonetic += "ha";
        } else if (currentSyllable.syllable === Syllable.he) {
            phonetic += "he";
        } else if (currentSyllable.syllable === Syllable.hi) {
            phonetic += "hi";
        } else if (currentSyllable.syllable === Syllable.hu) {
            phonetic += "hu";
        } else if (currentSyllable.syllable === Syllable.da) {
            phonetic += "da";
        } else if (currentSyllable.syllable === Syllable.de) {
            phonetic += "de";
        } else if (currentSyllable.syllable === Syllable.di) {
            phonetic += "di";
        } else if (currentSyllable.syllable === Syllable.du) {
            phonetic += "du";
        } else if (currentSyllable.syllable === Syllable.ka) {
            phonetic += "ka";
        } else if (currentSyllable.syllable === Syllable.ke) {
            phonetic += "ke";
        } else if (currentSyllable.syllable === Syllable.ki) {
            phonetic += "ki";
        } else if (currentSyllable.syllable === Syllable.ku) {
            phonetic += "ku";
        } else if (currentSyllable.syllable === Syllable.za) {
            phonetic += "za";
        } else if (currentSyllable.syllable === Syllable.ze) {
            phonetic += "ze";
        } else if (currentSyllable.syllable === Syllable.zi) {
            phonetic += "zi";
        } else if (currentSyllable.syllable === Syllable.zu) {
            phonetic += "zu";
        } else if (currentSyllable.syllable === Syllable.ga) {
            phonetic += "ga";
        } else if (currentSyllable.syllable === Syllable.ge) {
            phonetic += "ge";
        } else if (currentSyllable.syllable === Syllable.gi) {
            phonetic += "gi";
        } else if (currentSyllable.syllable === Syllable.gu) {
            phonetic += "gu";
        } else if (currentSyllable.syllable === Syllable.fa) {
            phonetic += "fa";
        } else if (currentSyllable.syllable === Syllable.fe) {
            phonetic += "fe";
        } else if (currentSyllable.syllable === Syllable.fi) {
            phonetic += "fi";
        } else if (currentSyllable.syllable === Syllable.fu) {
            phonetic += "fu";
        } else if (currentSyllable.syllable === Syllable.sa) {
            phonetic += "sa";
        } else if (currentSyllable.syllable === Syllable.se) {
            phonetic += "se";
        } else if (currentSyllable.syllable === Syllable.si) {
            phonetic += "si";
        } else if (currentSyllable.syllable === Syllable.su) {
            phonetic += "su";
        } else if (currentSyllable.syllable === Syllable.ba) {
            phonetic += "ba";
        } else if (currentSyllable.syllable === Syllable.be) {
            phonetic += "be";
        } else if (currentSyllable.syllable === Syllable.bi) {
            phonetic += "bi";
        } else if (currentSyllable.syllable === Syllable.bu) {
            phonetic += "bu";
        } else if (currentSyllable.syllable === Syllable.va) {
            phonetic += "va";
        } else if (currentSyllable.syllable === Syllable.ve) {
            phonetic += "ve";
        } else if (currentSyllable.syllable === Syllable.vi) {
            phonetic += "vi";
        } else if (currentSyllable.syllable === Syllable.vu) {
            phonetic += "vu";
        } else if (currentSyllable.syllable === Syllable.tsa) {
            phonetic += "tsa";
        } else if (currentSyllable.syllable === Syllable.tse) {
            phonetic += "tse";
        } else if (currentSyllable.syllable === Syllable.tsi) {
            phonetic += "tsi";
        } else if (currentSyllable.syllable === Syllable.tsu) {
            phonetic += "tsu";
        } else if (currentSyllable.syllable === Syllable.tra) {
            phonetic += "tra";
        } else if (currentSyllable.syllable === Syllable.tre) {
            phonetic += "tre";
        } else if (currentSyllable.syllable === Syllable.tri) {
            phonetic += "tri";
        } else if (currentSyllable.syllable === Syllable.tru) {
            phonetic += "tru";
        } else if (currentSyllable.syllable === Syllable.pa) {
            phonetic += "pa";
        } else if (currentSyllable.syllable === Syllable.pe) {
            phonetic += "pe";
        } else if (currentSyllable.syllable === Syllable.pi) {
            phonetic += "pi";
        } else if (currentSyllable.syllable === Syllable.pu) {
            phonetic += "pu";
        } else if (currentSyllable.syllable === Syllable.n) {
            phonetic += "n";
        } else if (currentSyllable.syllable === Syllable.m) {
            phonetic += "m";
        } else if (currentSyllable.syllable === Syllable.consonant) {
            phonetic += currentSyllable.character || "";
        } else if (currentSyllable.syllable === Syllable.ju) {
            phonetic += "ju";
        } else if (currentSyllable.syllable === Syllable.ja) {
            phonetic += "ja";
        } else if (currentSyllable.syllable === Syllable.je) {
            phonetic += "je";
        } else if (currentSyllable.syllable === Syllable.ji) {
            phonetic += "ji";
        }
    }

    return phonetic;
}
