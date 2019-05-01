"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function foldLeft(iterable, accmulator) {
    return function processor(predicator) {
        for (const element of iterable) {
            accmulator = predicator(accmulator, element);
        }
        return accmulator;
    };
}
exports.default = foldLeft;
