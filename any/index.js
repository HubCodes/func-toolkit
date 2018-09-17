module.exports = function any(iterable, predicator) {
  for (const element of iterable) {
    if (predicator(element)) {
      return true;
    }
  }
  return false;
}
