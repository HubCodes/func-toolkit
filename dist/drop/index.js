"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function drop(iterable, count) {
    const dropped = [];
    let dropping = 0;
    for (const element of iterable) {
        if (dropping >= count) {
            dropped.push(element);
        }
        dropping++;
    }
    return dropped;
}
exports.default = drop;
