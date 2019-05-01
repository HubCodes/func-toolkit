"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @deprecated since version 1.1.1
 */
function partialFunction(domainChecker, callable) {
    let wrapper = function wrapper(...args) {
        const canCall = domainChecker(...args);
        if (canCall) {
            return callable(...args);
        }
        else {
            throw new Error(`argument domain error`);
        }
    };
    // @ts-ignore
    wrapper.isDefinedAt = function isDefinedAt(...args) {
        return domainChecker(...args);
    };
    return wrapper;
}
exports.default = partialFunction;
