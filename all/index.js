module.exports = function all(iterable, predicator) {
  for (const element of iterable) {
    if (!predicator(element)) {
      return false;
    }
  }
  return true;
}
