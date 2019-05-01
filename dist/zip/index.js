"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function zip(firstIterable, secondIterable) {
    const firstElements = [];
    const secondElements = [];
    const combined = [];
    for (const element of firstIterable) {
        firstElements.push(element);
    }
    for (const element of secondIterable) {
        secondElements.push(element);
    }
    for (let i = 0; i < firstElements.length && i < secondElements.length; i += 1) {
        combined.push([firstElements[i], secondElements[i]]);
    }
    return combined;
}
exports.default = zip;
