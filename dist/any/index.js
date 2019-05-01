"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function any(iterable, predicator) {
    for (const element of iterable) {
        if (predicator(element)) {
            return true;
        }
    }
    return false;
}
exports.default = any;
