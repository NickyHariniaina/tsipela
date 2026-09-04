import { describe, it, expect} from "vitest";
import { separate } from "../src/parser.js";
import { Syllable } from "../src/syllable.js";


describe("Parse to get syllable", () => {
    it("should return correct syllable for ao", () => {
        expect(separate("ao")).toEqual({ syllables: [Syllable.a, Syllable.u] });
    })
})

