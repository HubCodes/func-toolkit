"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function partition(iterable, predicator) {
    const left = [];
    const right = [];
    for (const element of iterable) {
        if (predicator(element)) {
            left.push(element);
        }
        else {
            right.push(element);
        }
    }
    return [left, right];
}
exports.default = partition;
