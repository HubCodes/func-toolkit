"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function distinct(iterable) {
    const set = new Set(iterable);
    return Array.from(set);
}
exports.default = distinct;
