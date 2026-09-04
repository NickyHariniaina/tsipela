export enum Syllable {
    a = "a",
    u = "u",
    e = "e",
    i = "i",
    tu = "tu",
    consonant = "consonant",
}

export interface SyllableObject {
    syllable: Syllable;
    character: string;
}
