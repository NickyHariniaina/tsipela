import { describe, it, expect } from "vitest";
import { factorizeSyllableToNormalPhonetic, getWordFromPhonetic } from "../src/phonetic.js";
import { separate } from "../src/parser.js";

describe("Should factorize basic group of syllable", () => {
    it("should return correct phonetic for eny", () => {
        expect(factorizeSyllableToNormalPhonetic(separate("eni"))).toEqual("eni");
    });

    it("should return correct phonetic for ao", () => {
        expect(factorizeSyllableToNormalPhonetic(separate("ao"))).toEqual("au");
    });

    it("should return correct phonetic for eto", () => {
        expect(factorizeSyllableToNormalPhonetic(separate("eto"))).toEqual("etu");
    });

    it("should return correct phonetic for io", () => {
        expect(factorizeSyllableToNormalPhonetic(separate("io"))).toEqual("iu");
    });

    it("should return correct phonetic for hena", () => {
        expect(factorizeSyllableToNormalPhonetic(separate("hena"))).toEqual("hena");
    });

    it("should return correct phonetic for alika", () => {
        expect(factorizeSyllableToNormalPhonetic(separate("alika"))).toEqual("alika");
    });

    it("should return correct phonetic for loza", () => {
        expect(factorizeSyllableToNormalPhonetic(separate("loza"))).toEqual("luza");
    });

    it("should return correct phonetic for nihinana", () => {
        expect(factorizeSyllableToNormalPhonetic(separate("nihinana"))).toEqual("nihinana");
    });
});

describe("Should factorize complex group of syllable", () => {
    it("shoult return correct phonetic for henabaolina", () => {
        expect(factorizeSyllableToNormalPhonetic(separate("henabaolina"))).toEqual("henabolina");
    });

    it("should return correct phonetic for taova", () => {
        expect(factorizeSyllableToNormalPhonetic(separate("taova"))).toEqual("tova");
    });

    it("should return correct phonetic for saonjo", () => {
        expect(factorizeSyllableToNormalPhonetic(separate("saonjo"))).toEqual("sonju");
    });

    it("should return correct phonetic for taona", () => {
        expect(factorizeSyllableToNormalPhonetic(separate("taona"))).toEqual("tona");
    });

    it("aona", () => {
        expect(factorizeSyllableToNormalPhonetic(separate("aona"))).toEqual("aona");
    });

    it("should return correct phonetic for ialahy", () => {
        expect(factorizeSyllableToNormalPhonetic(separate("ialahy"))).toEqual("ialahi");
    });

    it("should return correct phonetic for mialona", () => {
        expect(factorizeSyllableToNormalPhonetic(separate("mialona"))).toEqual("mialuna");
    });

    it("should return correct phonetic for mialona", () => {
        expect(factorizeSyllableToNormalPhonetic(separate("mialona"))).toEqual("mialuna");
    });
});

describe("Should get Word from phonetic", () => {
    it("tay", () => {
        const phonetic = factorizeSyllableToNormalPhonetic(separate("tay"));
        expect(getWordFromPhonetic(phonetic)).toEqual("tay");
    });

    it("mialona", () => {
        const phonetic = factorizeSyllableToNormalPhonetic(separate("mialona"));
        expect(getWordFromPhonetic(phonetic)).toEqual("mialona");
    });

    it("taona", () => {
        const phonetic = factorizeSyllableToNormalPhonetic(separate("taona"));
        expect(getWordFromPhonetic(phonetic)).toEqual("taona");
    });

    it("saonjo", () => {
        const phonetic = factorizeSyllableToNormalPhonetic(separate("saonjo"));
        expect(getWordFromPhonetic(phonetic)).toEqual("saonjo");
    });

    it("aona", () => {
        const phonetic = factorizeSyllableToNormalPhonetic(separate("aona"));
        expect(getWordFromPhonetic(phonetic)).toEqual("aona");
    });
});
