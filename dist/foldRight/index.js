"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function foldRight(iterable, accmulator) {
    return function processor(predicator) {
        const arr = [];
        for (const element of iterable) {
            arr.push(element);
        }
        for (let i = arr.length - 1; i >= 0; i -= 1) {
            accmulator = predicator(arr[i], accmulator);
        }
        return accmulator;
    };
}
exports.default = foldRight;
