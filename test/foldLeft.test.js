const assert = require('assert');
const $ = require('../');

describe('foldLeft test', () => {
  let zeroToHundred = [...Array(101).keys()];
  it('work with array', () => {
    const result = $.foldLeft(zeroToHundred, 0)((acc, n) => acc + n);
    assert.equal(result, 5050);
  });
  it('work with Set', () => {
    const set = new Set(zeroToHundred);
    const result = $.foldLeft(set, 0)((acc, n) => acc + n);
    assert.equal(result, 5050);
  });
  it('work with generator', () => {
    function* zeroTo100() {
      for (let i = 0; i <= 100; i += 1) {
        yield i;
      }
    }
    const result = $.foldLeft(zeroTo100(), 0)((acc, n) => acc + n);
    assert.equal(result, 5050);
  });
  it('work with Map', () => {
    const map = new Map();
    for (let i = 0; i <= 100; i++) {
      map.set(i, i * 2);
    }
    const result = $.foldLeft(map, 0)((acc, n) => acc + n[0]);
    assert.equal(result, 5050);
  });
})
