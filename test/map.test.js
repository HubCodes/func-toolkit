const assert = require("assert");
const $ = require("../");

describe("map test", () => {
  it("work with array", () => {
    const array = [3, 4, 5, 6, 7, 8, 9];
    const result = $.map(array, x => x * 2);
    assert.deepEqual(result, [6, 8, 10, 12, 14, 16, 18]);
  });
  it("work with Set", () => {
    const set = new Set([3, 4, 5, 6, 7, 8, 9]);
    const result = $.map(set, x => x * 2);
    assert.deepEqual(result, [6, 8, 10, 12, 14, 16, 18]);
  });
  it("work with generator", () => {
    function* threeToNine() {
      for (let i = 3; i <= 9; i++) {
        yield i;
      }
    }
    const result = $.map(threeToNine(), x => x * 2);
    assert.deepEqual(result, [6, 8, 10, 12, 14, 16, 18]);
  });
  it("work with Map", () => {
    const map = new Map();
    for (let i = 3; i <= 5; i++) {
      map.set(i, i * 2);
    }
    const result = $.map(map, x => [x[0] * 2, x[1]]);
    assert.deepEqual(result, [[6, 6], [8, 8], [10, 10]]);
  });
});
