"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filter(iterable, predicator) {
    const base = [];
    for (const element of iterable) {
        if (predicator(element)) {
            base.push(element);
        }
    }
    return base;
}
exports.default = filter;
