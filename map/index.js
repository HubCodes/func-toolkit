module.exports = function map(iterable, predicator) {
  const base = [];
  for (const element of iterable) {
    base.push(predicator(element));
  }
  return base;
};
