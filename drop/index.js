module.exports = function drop(iterable, n) {
  const dropped = [];
  let dropping = 0;
  for (const element of iterable) {
    if (dropping >= n) {
      dropped.push(element);
    }
    dropping++;
  }
  return dropped;
};
