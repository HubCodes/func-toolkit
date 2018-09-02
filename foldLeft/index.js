module.exports = function foldLeft(iterable, accmulator) {
  return function processor(predicator) {
    for (const element of iterable) {
      accmulator = predicator(accmulator, element);
    }
    return accmulator;
  };
};
