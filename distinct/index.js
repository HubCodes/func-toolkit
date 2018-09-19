module.exports = function distinct(iterable) {
  const set = new Set(iterable);
  return Array.from(set);
};
