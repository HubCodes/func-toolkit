"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function map(iterable, predicator) {
    const base = [];
    for (const element of iterable) {
        base.push(predicator(element));
    }
    return base;
}
exports.default = map;
