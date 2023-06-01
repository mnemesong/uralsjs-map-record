"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapRecordKeys = exports.mapRecordVals = void 0;
function mapRecordVals(r, mapFunc) {
    var result = {};
    Object.keys(r)
        .forEach(function (k) { return result[k] = mapFunc(r[k]); });
    return result;
}
exports.mapRecordVals = mapRecordVals;
function mapRecordKeys(r, mapFunc) {
    var result = {};
    Object.keys(r)
        .forEach(function (k) { return result[mapFunc(k)] = r[k]; });
    return result;
}
exports.mapRecordKeys = mapRecordKeys;
