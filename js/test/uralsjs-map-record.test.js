"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert = __importStar(require("assert"));
var mocha_1 = require("mocha");
var uralsjs_map_record_1 = require("../src/uralsjs-map-record");
(0, mocha_1.describe)("test mapRecordVals", function () {
    (0, mocha_1.it)("test 1", function () {
        var rec = {
            abba: 12,
            fofa: 66
        };
        var result = (0, uralsjs_map_record_1.mapRecordVals)(rec, function (m) { return (m.toString() + '!'); });
        var nominal = {
            abba: '12!',
            fofa: '66!'
        };
        assert.deepEqual(nominal, result);
    });
    (0, mocha_1.it)("test 2", function () {
        var rec = {};
        var result = (0, uralsjs_map_record_1.mapRecordVals)(rec, function (m) { return (m.toString() + '!'); });
        var nominal = {};
        assert.deepEqual(nominal, result);
    });
});
(0, mocha_1.describe)("test mapRecordKeys", function () {
    (0, mocha_1.it)("test 1", function () {
        var rec = {
            abba: 12,
            fofa: 66
        };
        var result = (0, uralsjs_map_record_1.mapRecordKeys)(rec, function (m) { return (m + '!'); });
        var nominal = {
            'abba!': 12,
            'fofa!': 66
        };
        assert.deepEqual(nominal, result);
    });
    (0, mocha_1.it)("test 2", function () {
        var rec = {};
        var result = (0, uralsjs_map_record_1.mapRecordKeys)(rec, function (m) { return (m + '!'); });
        var nominal = {};
        assert.deepEqual(nominal, result);
    });
});
