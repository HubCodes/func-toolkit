"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function all(iterable, predicator) {
    for (const element of iterable) {
        if (!predicator(element)) {
            return false;
        }
    }
    return true;
}
exports.default = all;
