const assert = require('assert');
const $ = require('../');

const f = (num) => {
  return num + 4;
};

const g = (num) => {
  return num * 8;
}

const foo = (num, factor, adder) => {
  return (num * factor) + adder;
};

const bar = (num) => {
  return num * 3;
}

describe('andThen test', () => {
  it('work with one argument', () => {
    const andThenMaked = $.andThen(f, g);
    const result = andThenMaked(3);
    assert.equal(result, 56);
  });
  it('work with many arguments', () => {
    const andThenMaked = $.andThen(foo, bar);
    const result = andThenMaked(3, 8, 4);
    assert.equal(result, 84);
  });
});
