"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function compose(f, g) {
    return (...args) => {
        return f(g(...args));
    };
}
exports.default = compose;
