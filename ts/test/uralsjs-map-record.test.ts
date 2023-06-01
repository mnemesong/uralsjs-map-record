import * as assert from "assert";
import { it, describe } from "mocha";
import { mapRecordVals, mapRecordKeys } from "../src/uralsjs-map-record";

describe("test mapRecordVals", () => {
    it("test 1", () => {
        const rec: Record<string, number> = {
            abba: 12,
            fofa: 66
        };
        const result = mapRecordVals(rec, (m) => (m.toString() + '!'));
        const nominal = {
            abba: '12!',
            fofa: '66!'
        }
        assert.deepEqual(nominal, result);
    });

    it("test 2", () => {
        const rec: Record<string, number> = {};
        const result = mapRecordVals(rec, (m) => (m.toString() + '!'));
        const nominal = {}
        assert.deepEqual(nominal, result);
    });
})

describe("test mapRecordKeys", () => {
    it("test 1", () => {
        const rec: Record<string, number> = {
            abba: 12,
            fofa: 66
        };
        const result = mapRecordKeys(rec, (m: string) => (m + '!'));
        const nominal = {
            'abba!': 12,
            'fofa!': 66
        }
        assert.deepEqual(nominal, result);
    });

    it("test 2", () => {
        const rec: Record<string, number> = {};
        const result = mapRecordKeys(rec, (m: string) => (m + '!'));
        const nominal = {}
        assert.deepEqual(nominal, result);
    });
})