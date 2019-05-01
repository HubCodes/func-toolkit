const assert = require("assert");
const $ = require("../");

describe("partition test", () => {
  let iterable = [1, 2, 3, 4, 5, 6, 7, 8];
  it("work with array", () => {
    const array = Array.from(iterable);
    const result = $.partition(array, x => x % 2 == 0);
    assert.deepEqual(result, [[2, 4, 6, 8], [1, 3, 5, 7]]);
  });
  it("work with Set", () => {
    const set = new Set(iterable);
    const result = $.partition(set, x => x % 2 == 0);
    assert.deepEqual(result, [[2, 4, 6, 8], [1, 3, 5, 7]]);
  });
  it("work with generator", () => {
    function* oneToEight() {
      for (let i = 1; i <= 8; i++) {
        yield i;
      }
    }
    const result = $.partition(oneToEight(), x => x % 2 == 0);
    assert.deepEqual(result, [[2, 4, 6, 8], [1, 3, 5, 7]]);
  });
});
