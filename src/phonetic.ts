import type { Word } from "./parser.js";
import { Syllable } from "./syllable.js";

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
            if (word.syllables[i - 1]?.character[len - 1] == "a") {
                if (i + 1 != word.syllables.length) {
                    phonetic = phonetic.slice(0, -1);
                    phonetic += "o";
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
