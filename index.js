const andThen = require('./andThen');
const compose = require('./compose');
const filter = require('./filter');
const foldLeft = require('./foldLeft');
const foldRight = require('./foldRight');
const map = require('./map');
const partialFunction = require('./partialFunction');
const zip = require('./zip');

module.exports = {
  compose,
  andThen,
  filter,
  foldLeft,
  foldRight,
  map,
  partialFunction,
  zip,
};
