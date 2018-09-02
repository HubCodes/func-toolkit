module.exports = function andThen(f, g) {
  return (...args) => {
    return g(f(...args));
  };
};
