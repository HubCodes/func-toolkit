function partialFunction(domainChecker, callable) {
  let wrapper = function wrapper(...args) {
    const canCall = domainChecker(...args);
    if (canCall) {
      return callable(...args);
    } else {
      throw new Error(`argument domain error`);
    }
  };
  wrapper.isDefinedAt = function isDefinedAt(...args) {
    return domainChecker(...args);
  };
  return wrapper;
}

module.exports = partialFunction;
