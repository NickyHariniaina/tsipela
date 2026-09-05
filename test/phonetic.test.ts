import { describe, it, expect } from "vitest";
import { factorizeSyllableToNormalPhonetic } from "../src/phonetic.js";
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
});

describe("Should factorize complex group of syllable", () => {
    it("shoult return correct phonetic for henabaolina", () => {
        expect(factorizeSyllableToNormalPhonetic(separate("henabaolina"))).toEqual("henabolina");
    });

    it("should return correct phonetic for taova", () => {
        expect(factorizeSyllableToNormalPhonetic(separate("taova"))).toEqual("tova");
    });

    it("should return correct phonetic for saonjo", () => {
        expect(factorizeSyllableToNormalPhonetic(separate("saonjo"))).toEqual("sonjo");
    });
});
