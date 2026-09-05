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
describe("Parse to get double letter syllable", () => {
    it("should return correct syllable for eto", () => {
        expect(separate("eto")).toEqual({
            syllables: [
                { syllable: Syllable.e, character: "e" },
                { syllable: Syllable.tu, character: "to" },
            ],
        });
    });

    it("should return correct syllable for etaty", () => {
        expect(separate("etaty")).toEqual({
            syllables: [
                { syllable: Syllable.e, character: "e" },
                { syllable: Syllable.ta, character: "ta" },
                { syllable: Syllable.ti, character: "ty" },
            ],
        });
    });

    it("should return correct syllable for eny", () => {
        expect(separate("eny")).toEqual({
            syllables: [
                { syllable: Syllable.e, character: "e" },
                { syllable: Syllable.ni, character: "ny" },
            ],
        });
    });

    it("should return correct syllable for tany", () => {
        expect(separate("tany")).toEqual({
            syllables: [
                { syllable: Syllable.ta, character: "ta" },
                { syllable: Syllable.ni, character: "ny" },
            ],
        });
    });

    it("should return correct syllable for nono", () => {
        expect(separate("nono")).toEqual({
            syllables: [
                { syllable: Syllable.nu, character: "no" },
                { syllable: Syllable.nu, character: "no" },
            ],
        });
    });

    it("should return correct syllable for naninona", () => {
        expect(separate("naninona")).toEqual({
            syllables: [
                { syllable: Syllable.na, character: "na" },
                { syllable: Syllable.ni, character: "ni" },
                { syllable: Syllable.nu, character: "no" },
                { syllable: Syllable.na, character: "na" },
            ],
        });
    });

    it("should return correct syllable for rano", () => {
        expect(separate("rano")).toEqual({
            syllables: [
                { syllable: Syllable.ra, character: "ra" },
                { syllable: Syllable.nu, character: "no" },
            ],
        });
    });

    it("should return correct syllable for rarana", () => {
        expect(separate("rarana")).toEqual({
            syllables: [
                { syllable: Syllable.ra, character: "ra" },
                { syllable: Syllable.ra, character: "ra" },
                { syllable: Syllable.na, character: "na" },
            ],
        });
    });

    it("should return correct syllable for rariny", () => {
        expect(separate("rariny")).toEqual({
            syllables: [
                { syllable: Syllable.ra, character: "ra" },
                { syllable: Syllable.ri, character: "ri" },
                { syllable: Syllable.ni, character: "ny" },
            ],
        });
    });

    it("should return correct syllable for milalao", () => {
        expect(separate("milalao")).toEqual({
            syllables: [
                { syllable: Syllable.mi, character: "mi" },
                { syllable: Syllable.la, character: "la" },
                { syllable: Syllable.la, character: "la" },
                { syllable: Syllable.u, character: "o" },
            ],
        });
    });

    it("should return correct syllable for fory", () => {
        expect(separate("fory")).toEqual({
            syllables: [
                { syllable: Syllable.fu, character: "fo" },
                { syllable: Syllable.ri, character: "ry" },
            ],
        });
    });

    it("should return correct syllable for malagasy", () => {
        expect(separate("malagasy")).toEqual({
            syllables: [
                { syllable: Syllable.ma, character: "ma" },
                { syllable: Syllable.la, character: "la" },
                { syllable: Syllable.ga, character: "ga" },
                { syllable: Syllable.si, character: "sy" },
            ],
        });
    });

    it("should return correct syllable for dadabe", () => {
        expect(separate("dadabe")).toEqual({
            syllables: [
                { syllable: Syllable.da, character: "da" },
                { syllable: Syllable.da, character: "da" },
                { syllable: Syllable.be, character: "be" },
            ],
        });
    });

    it("should return correct syllable for kaka", () => {
        expect(separate("kaka")).toEqual({
            syllables: [
                { syllable: Syllable.ka, character: "ka" },
                { syllable: Syllable.ka, character: "ka" },
            ],
        });
    });

    it("should return correct syllable for reny", () => {
        expect(separate("reny")).toEqual({
            syllables: [
                { syllable: Syllable.re, character: "re" },
                { syllable: Syllable.ni, character: "ny" },
            ],
        });
    });

    it("should return correct syllable for ray", () => {
        expect(separate("ray")).toEqual({
            syllables: [
                { syllable: Syllable.ra, character: "ra" },
                { syllable: Syllable.i, character: "y" },
            ],
        });
    });

    it("should return correct syllable for zazakely", () => {
        expect(separate("zazakely")).toEqual({
            syllables: [
                { syllable: Syllable.za, character: "za" },
                { syllable: Syllable.za, character: "za" },
                { syllable: Syllable.ke, character: "ke" },
                { syllable: Syllable.li, character: "ly" },
            ],
        });
    });

    it("should return correct syllable for mamay", () => {
        expect(separate("mamay")).toEqual({
            syllables: [
                { syllable: Syllable.ma, character: "ma" },
                { syllable: Syllable.ma, character: "ma" },
                { syllable: Syllable.i, character: "y" },
            ],
        });
    });

    it("should return correct syllable for vody", () => {
        expect(separate("vody")).toEqual({
            syllables: [
                { syllable: Syllable.vu, character: "vo" },
                { syllable: Syllable.di, character: "dy" },
            ],
        });
    });
});

describe("Parse to get triple letter syllable", () => {
    it("should return correct syllable for tsia", () => {
        expect(separate("tsia")).toEqual({
            syllables: [
                { syllable: Syllable.tsi, character: "tsi" },
                { syllable: Syllable.a, character: "a" },
            ],
        });
    });

    it("should return correct syllable for tsena", () => {
        expect(separate("tsena")).toEqual({
            syllables: [
                { syllable: Syllable.tse, character: "tse" },
                { syllable: Syllable.na, character: "na" },
            ],
        });
    });

    it("should return correct syllable for tsofa", () => {
        expect(separate("tsofa")).toEqual({
            syllables: [
                { syllable: Syllable.tsu, character: "tso" },
                { syllable: Syllable.fa, character: "fa" },
            ],
        });
    });

    it("should return correct syllable for ratsy", () => {
        expect(separate("ratsy")).toEqual({
            syllables: [
                { syllable: Syllable.ra, character: "ra" },
                { syllable: Syllable.tsi, character: "tsy" },
            ],
        });
    });

    it("should return correct syllable for parasy", () => {
        expect(separate("parasy")).toEqual({
            syllables: [
                { syllable: Syllable.pa, character: "pa" },
                { syllable: Syllable.ra, character: "ra" },
                { syllable: Syllable.si, character: "sy" },
            ],
        });
    });

    it("should return correct syllable for fotsy", () => {
        expect(separate("fotsy")).toEqual({
            syllables: [
                { syllable: Syllable.fu, character: "fo" },
                { syllable: Syllable.tsi, character: "tsy" },
            ],
        });
    });

    it("should return correct syllable for atrika", () => {
        expect(separate("atrika")).toEqual({
            syllables: [
                { syllable: Syllable.a, character: "a" },
                { syllable: Syllable.tri, character: "tri" },
                { syllable: Syllable.ka, character: "ka" },
            ],
        });
    });

    it("should return correct syllable for trano", () => {
        expect(separate("trano")).toEqual({
            syllables: [
                { syllable: Syllable.tra, character: "tra" },
                { syllable: Syllable.nu, character: "no" },
            ],
        });
    });

    it("should return correct syllable for ratra", () => {
        expect(separate("ratra")).toEqual({
            syllables: [
                { syllable: Syllable.ra, character: "ra" },
                { syllable: Syllable.tra, character: "tra" },
            ],
        });
    });

    it("should return correct syllable for tselatra", () => {
        expect(separate("tselatra")).toEqual({
            syllables: [
                { syllable: Syllable.tse, character: "tse" },
                { syllable: Syllable.la, character: "la" },
                { syllable: Syllable.tra, character: "tra" },
            ],
        });
    });
});

describe("Should parse muted letters", () => {
    it("should return correct syllable for hoany", () => {
        expect(separate("hoany")).toEqual({
            syllables: [
                { syllable: Syllable.hu, character: "ho" },
                { syllable: Syllable.a, character: "a" },
                { syllable: Syllable.ni, character: "ny" },
            ],
        });
    });
});

describe("Should parse single consonants", () => {
    it("should return correct syllable for mpangalatra", () => {
        expect(separate("mpangalatra")).toEqual({
            syllables: [
                { syllable: Syllable.m, character: "m" },
                { syllable: Syllable.pa, character: "pa" },
                { syllable: Syllable.n, character: "n" },
                { syllable: Syllable.ga, character: "ga" },
                { syllable: Syllable.la, character: "la" },
                { syllable: Syllable.tra, character: "tra" },
            ],
        });
    });

    it("should return correct syllable for mpamono", () => {
        expect(separate("mpamono")).toEqual({
            syllables: [
                { syllable: Syllable.m, character: "m" },
                { syllable: Syllable.pa, character: "pa" },
                { syllable: Syllable.mu, character: "mo" },
                { syllable: Syllable.nu, character: "no" },
            ],
        });
    });

    it("should return correct syllable for andevo", () => {
        expect(separate("andevo")).toEqual({
            syllables: [
                { syllable: Syllable.a, character: "a" },
                { syllable: Syllable.n, character: "n" },
                { syllable: Syllable.de, character: "de" },
                { syllable: Syllable.vu, character: "vo" },
            ],
        });
    });

    it("should return correct syllable for angivy", () => {
        expect(separate("angivy")).toEqual({
            syllables: [
                { syllable: Syllable.a, character: "a" },
                { syllable: Syllable.n, character: "n" },
                { syllable: Syllable.gi, character: "gi" },
                { syllable: Syllable.vi, character: "vy" },
            ],
        });
    });
})
