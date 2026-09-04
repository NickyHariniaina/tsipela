import { describe, it, expect } from "vitest";
import { separate } from "../src/parser.js";
import { Syllable } from "../src/syllable.js";

describe("Parse to get syllable", () => {
    it("should return correct syllable for ao", () => {
        expect(separate("ao")).toEqual({
            syllables: [
                { syllable: Syllable.a, character: "a" },
                { syllable: Syllable.u, character: "o" },
            ],
        });
    });

    it("should return correct syllable for eo", () => {
        expect(separate("eo")).toEqual({
            syllables: [
                { syllable: Syllable.e, character: "e" },
                { syllable: Syllable.u, character: "o" },
            ],
        });
    });
    it("should return correct syllable for io", () => {
        expect(separate("io")).toEqual({
            syllables: [
                { syllable: Syllable.i, character: "i" },
                { syllable: Syllable.u, character: "o" },
            ],
        });
    });

    it("should return correct syllable for ay", () => {
        expect(separate("ay")).toEqual({
            syllables: [
                { syllable: Syllable.a, character: "a" },
                { syllable: Syllable.i, character: "y" },
            ],
        });
    });
});
describe("Parse to get consonant syllable", () => {
    it("should return correct syllable for eto", () => {
        expect(separate("eto")).toEqual({
            syllables: [
                { syllable: Syllable.e, character: "e" },
                { syllable: Syllable.tu, character: "to" },
            ],
        });
    });
});
