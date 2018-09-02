const assert = require('assert');
const $ = require('../');

describe('filter test', () => {
  it('work with array', () => {
    const array = [3, 4, 5, 6, 7, 8, 9];
    const result = $.filter(array, x => x % 2 == 0);
    assert.deepEqual(result, [4, 6, 8]);
  });
  it('work with Set', () => {
    const set = new Set([3, 4, 5, 6, 7, 8, 9]);
    const result = $.filter(set, x => x % 2 == 0);
    assert.deepEqual(result, [4, 6, 8]);
  });
  it('work with generator', () => {
    function* threeToNine() {
      for (let i = 3; i <= 9; i++) {
        yield i;
      }
    }    
    const result = $.filter(threeToNine(), x => x % 2 == 0);
    assert.deepEqual(result, [4, 6, 8]);
  });
  it('work with Map', () => {
    const map = new Map();
    for (let i = 3; i <= 9; i++) {
      map.set(i, i * 2);
    }
    const result = $.filter(map, x => x[0] % 2 == 0);
    assert.deepEqual(result, [[4, 8], [6, 12], [8, 16]]);
  });
  it('work with string', () => {
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const result = $.filter(str, x => x > 'F').join('');
    assert.equal(result, 'GHIJKLMNOPQRSTUVWXYZ');
  });
});
