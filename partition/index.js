module.exports = function partition(iterable, predicator) {
  const left = [];
  const right = [];
  for (const element of iterable) {
    if (predicator(element)) {
      left.push(element);
    } else {
      right.push(element);
    }
  }
  return [left, right];
};
