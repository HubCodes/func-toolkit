const assert = require('assert');
const $ = require('../');

describe('all test', () => {
  const array = [1, 3, 5, 7, 9];
  it('work with array', () => {
    const result = $.all(array, (x) => x % 2 == 1);
    assert.equal(result, true);
  });
  it('work with Set', () => {
    const set = new Set(array);
    const result = $.all(set, (x) => x % 2 == 0);
    assert.equal(result, false);
  });
  it('work with Map', () => {
    const map = new Map();
    for (let i = 3; i <= 9; i++) {
      map.set(i, i * 2);
    }
    const result = $.all(map, (x) => x[0] % 2 == 0);
    assert.deepEqual(result, false);
  });
});
