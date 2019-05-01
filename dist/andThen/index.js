"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function andThen(f, g) {
    return (...args) => {
        return g(f(...args));
    };
}
exports.default = andThen;
