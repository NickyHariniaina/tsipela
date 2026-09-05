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
                separateN(syllables, i, undefinedCount);
                separateT(syllables, i, undefinedCount);
                separateR(syllables, i, undefinedCount);
                separateM(syllables, i, undefinedCount);
                separateL(syllables, i, undefinedCount);
                separateH(syllables, i, undefinedCount);
                separateD(syllables, i, undefinedCount);
                separateK(syllables, i, undefinedCount);
                separateZ(syllables, i, undefinedCount);
                separateG(syllables, i, undefinedCount);
                separateF(syllables, i, undefinedCount);
                separateS(syllables, i, undefinedCount);
                separateB(syllables, i, undefinedCount);
                separateV(syllables, i, undefinedCount);
                separateP(syllables, i, undefinedCount);
            }
        }
    }

    if (undefinedCount > 0) {
        separate(word, syllables, undefinedCount);
    }

    return { syllables };
}

function separateP(syllables: SyllableObject[], i: number, undefinedCount: number) {
    if (syllables[i]?.character == "p") {
        if (syllables[i + 1]?.syllable == Syllable.a) {
            syllables[i] = {
                syllable: Syllable.pa,
                character: "pa",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.i) {
            syllables[i] = {
                syllable: Syllable.pi,
                character: syllables[i + 1]?.character == "i" ? "pi" : "py",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.u) {
            syllables[i] = {
                syllable: Syllable.pu,
                character: "po",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.e) {
            syllables[i] = {
                syllable: Syllable.pe,
                character: "pe",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        }
    }
}

function separateR(
    syllables: SyllableObject[],
    i: number,
    undefinedCount: number,
) {
    if (syllables[i]?.character == "r") {
        if (syllables[i + 1]?.syllable == Syllable.u) {
            syllables[i] = {
                syllable: Syllable.ru,
                character: "ro",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.a) {
            syllables[i] = {
                syllable: Syllable.ra,
                character: "ra",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.i) {
            syllables[i] = {
                syllable: Syllable.ri,
                character: syllables[i + 1]?.character == "i" ? "ri" : "ry",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.e) {
            syllables[i] = {
                syllable: Syllable.re,
                character: "re",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        }
    }
}

function separateN(
    syllables: SyllableObject[],
    i: number,
    undefinedCount: number,
) {
    if (syllables[i]?.character == "n") {
        if (syllables[i + 1]?.syllable == Syllable.i) {
            syllables[i] = {
                syllable: Syllable.ni,
                character: syllables[i + 1]?.character == "i" ? "ni" : "ny",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.u) {
            syllables[i] = {
                syllable: Syllable.nu,
                character: "no",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.a) {
            syllables[i] = {
                syllable: Syllable.na,
                character: "na",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.consonant) {
            syllables[i] = {
                syllable: Syllable.n,
                character: "n",
            };
        }
    }
}

function separateT(
    syllables: SyllableObject[],
    i: number,
    undefinedCount: number,
) {
    if (syllables[i]?.character == "t") {
        if (syllables[i + 1]?.syllable == Syllable.u) {
            syllables[i] = {
                syllable: Syllable.tu,
                character: "to",
            };
        } else if (syllables[i + 1]?.syllable == Syllable.i) {
            syllables[i] = {
                syllable: Syllable.ti,
                character: syllables[i + 1]?.character == "i" ? "ti" : "ty",
            };
        } else if (syllables[i + 1]?.syllable == Syllable.a) {
            syllables[i] = {
                syllable: Syllable.ta,
                character: "ta",
            };
        } else if (syllables[i + 1]?.syllable == Syllable.consonant) {
            const isTr = syllables[i + 1]?.character == "r";
            if (syllables[i + 2]?.syllable == Syllable.i) {
                syllables[i] = {
                    syllable: isTr ? Syllable.tri : Syllable.tsi,
                    character: isTr
                        ? syllables[i + 2]?.character == "i"
                            ? "tri"
                            : "try"
                        : syllables[i + 2]?.character == "i"
                          ? "tsi"
                          : "tsy",
                };
            } else if (syllables[i + 2]?.syllable == Syllable.a) {
                syllables[i] = {
                    syllable: isTr ? Syllable.tra : Syllable.tsa,
                    character: isTr ? "tra" : "tsa",
                };
            } else if (syllables[i + 2]?.syllable == Syllable.u) {
                syllables[i] = {
                    syllable: isTr ? Syllable.tru : Syllable.tsu,
                    character: isTr ? "tro" : "tso",
                };
            } else if (syllables[i + 2]?.syllable == Syllable.e) {
                syllables[i] = {
                    syllable: isTr ? Syllable.tre : Syllable.tse,
                    character: isTr ? "tre" : "tse",
                };
            }
            syllables.splice(i + 1, 1);
            undefinedCount--;
        }
        syllables.splice(i + 1, 1);
        undefinedCount--;
    }
}

function separateM(
    syllables: SyllableObject[],
    i: number,
    undefinedCount: number,
) {
    if (syllables[i]?.character == "m") {
        if (syllables[i + 1]?.syllable == Syllable.a) {
            syllables[i] = {
                syllable: Syllable.ma,
                character: "ma",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.u) {
            syllables[i] = {
                syllable: Syllable.mu,
                character: "mo",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.i) {
            syllables[i] = {
                syllable: Syllable.mi,
                character: syllables[i + 1]?.character == "i" ? "mi" : "my",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.e) {
            syllables[i] = {
                syllable: Syllable.me,
                character: "me",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.consonant) {
            syllables[i] = {
                syllable: Syllable.m,
                character: "m",
            };
        }
    }
}

function separateL(
    syllables: SyllableObject[],
    i: number,
    undefinedCount: number,
) {
    if (syllables[i]?.character == "l") {
        if (syllables[i + 1]?.syllable == Syllable.a) {
            syllables[i] = {
                syllable: Syllable.la,
                character: "la",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.u) {
            syllables[i] = {
                syllable: Syllable.lu,
                character: "lo",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.i) {
            syllables[i] = {
                syllable: Syllable.li,
                character: syllables[i + 1]?.character == "i" ? "li" : "ly",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.e) {
            syllables[i] = {
                syllable: Syllable.le,
                character: "le",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        }
    }
}

function separateH(
    syllables: SyllableObject[],
    i: number,
    undefinedCount: number,
) {
    if (syllables[i]?.character == "h") {
        if (syllables[i + 1]?.syllable == Syllable.a) {
            syllables[i] = {
                syllable: Syllable.ha,
                character: "ha",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.u) {
            syllables[i] = {
                syllable: Syllable.hu,
                character: "ho",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.i) {
            syllables[i] = {
                syllable: Syllable.hi,
                character: syllables[i + 1]?.character == "i" ? "hi" : "hy",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.e) {
            syllables[i] = {
                syllable: Syllable.he,
                character: "he",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        }
    }
}

function separateD(
    syllables: SyllableObject[],
    i: number,
    undefinedCount: number,
) {
    if (syllables[i]?.character == "d") {
        if (syllables[i + 1]?.syllable == Syllable.a) {
            syllables[i] = {
                syllable: Syllable.da,
                character: "da",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.u) {
            syllables[i] = {
                syllable: Syllable.du,
                character: "do",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.i) {
            syllables[i] = {
                syllable: Syllable.di,
                character: syllables[i + 1]?.character == "i" ? "di" : "dy",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.e) {
            syllables[i] = {
                syllable: Syllable.de,
                character: "de",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.a) {
            syllables[i] = {
                syllable: Syllable.da,
                character: "da",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        }
    }
}

function separateK(
    syllables: SyllableObject[],
    i: number,
    undefinedCount: number,
) {
    if (syllables[i]?.character == "k") {
        if (syllables[i + 1]?.syllable == Syllable.a) {
            syllables[i] = {
                syllable: Syllable.ka,
                character: "ka",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.i) {
            syllables[i] = {
                syllable: Syllable.ki,
                character: syllables[i + 1]?.character == "i" ? "ki" : "ky",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.u) {
            syllables[i] = {
                syllable: Syllable.ku,
                character: "ko",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.e) {
            syllables[i] = {
                syllable: Syllable.ke,
                character: "ke",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        }
    }
}

function separateZ(
    syllables: SyllableObject[],
    i: number,
    undefinedCount: number,
) {
    if (syllables[i]?.character == "z") {
        if (syllables[i + 1]?.syllable == Syllable.a) {
            syllables[i] = {
                syllable: Syllable.za,
                character: "za",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.i) {
            syllables[i] = {
                syllable: Syllable.zi,
                character: syllables[i + 1]?.character == "i" ? "zi" : "zy",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.u) {
            syllables[i] = {
                syllable: Syllable.zu,
                character: "zo",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.e) {
            syllables[i] = {
                syllable: Syllable.ze,
                character: "ze",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        }
    }
}

function separateG(
    syllables: SyllableObject[],
    i: number,
    undefinedCount: number,
) {
    if (syllables[i]?.character == "g") {
        if (syllables[i + 1]?.syllable == Syllable.a) {
            syllables[i] = {
                syllable: Syllable.ga,
                character: "ga",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.i) {
            syllables[i] = {
                syllable: Syllable.gi,
                character: syllables[i + 1]?.character == "i" ? "gi" : "gy",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.u) {
            syllables[i] = {
                syllable: Syllable.gu,
                character: "go",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.e) {
            syllables[i] = {
                syllable: Syllable.ge,
                character: "ge",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        }
    }
}

function separateF(
    syllables: SyllableObject[],
    i: number,
    undefinedCount: number,
) {
    if (syllables[i]?.character == "f") {
        if (syllables[i + 1]?.syllable == Syllable.a) {
            syllables[i] = {
                syllable: Syllable.fa,
                character: "fa",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.i) {
            syllables[i] = {
                syllable: Syllable.fi,
                character: syllables[i + 1]?.character == "i" ? "fi" : "fy",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.u) {
            syllables[i] = {
                syllable: Syllable.fu,
                character: "fo",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.e) {
            syllables[i] = {
                syllable: Syllable.fe,
                character: "fe",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        }
    }
}

function separateS(
    syllables: SyllableObject[],
    i: number,
    undefinedCount: number,
) {
    if (syllables[i]?.character == "s") {
        if (syllables[i + 1]?.syllable == Syllable.a) {
            syllables[i] = {
                syllable: Syllable.sa,
                character: "sa",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.i) {
            syllables[i] = {
                syllable: Syllable.si,
                character: syllables[i + 1]?.character == "i" ? "si" : "sy",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.u) {
            syllables[i] = {
                syllable: Syllable.su,
                character: "so",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.e) {
            syllables[i] = {
                syllable: Syllable.se,
                character: "se",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        }
    }
}

function separateB(
    syllables: SyllableObject[],
    i: number,
    undefinedCount: number,
) {
    if (syllables[i]?.character == "b") {
        if (syllables[i + 1]?.syllable == Syllable.a) {
            syllables[i] = {
                syllable: Syllable.ba,
                character: "ba",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.i) {
            syllables[i] = {
                syllable: Syllable.bi,
                character: syllables[i + 1]?.character == "i" ? "bi" : "by",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.u) {
            syllables[i] = {
                syllable: Syllable.bu,
                character: "bo",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.e) {
            syllables[i] = {
                syllable: Syllable.be,
                character: "be",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        }
    }
}

function separateV(
    syllables: SyllableObject[],
    i: number,
    undefinedCount: number,
) {
    if (syllables[i]?.character == "v") {
        if (syllables[i + 1]?.syllable == Syllable.a) {
            syllables[i] = {
                syllable: Syllable.va,
                character: "va",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.i) {
            syllables[i] = {
                syllable: Syllable.vi,
                character: syllables[i + 1]?.character == "i" ? "vi" : "vy",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.u) {
            syllables[i] = {
                syllable: Syllable.vu,
                character: "vo",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        } else if (syllables[i + 1]?.syllable == Syllable.e) {
            syllables[i] = {
                syllable: Syllable.ve,
                character: "ve",
            };
            syllables.splice(i + 1, 1);
            undefinedCount--;
        }
    }
}
