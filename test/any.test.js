const assert = require('assert');
const $ = require('../');

describe('any test', () => {
  const array = [2, 4, 5, 8, 10];
  it('work with array', () => {
    const result = $.any(array, (x) => x % 2 == 1);
    assert.equal(result, true);
  });
  it('work with Set', () => {
    const set = new Set(array);
    set.delete(5);
    const result = $.any(set, (x) => x % 2 == 1);
    assert.equal(result, false);
  });
  it('work with Map', () => {
    const map = new Map();
    for (let i = 3; i <= 9; i++) {
      map.set(i, i * 2);
    }
    const result = $.any(map, (x) => x[0] % 2 == 1);
    assert.deepEqual(result, true);
  });
});
