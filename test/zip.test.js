const assert = require("assert");
const $ = require("../");

describe("zip test", () => {
  it("work with array", () => {
    const arr1 = [2, 4, 6, 8];
    const arr2 = ["a", "b", "c", "d"];
    const result = $.zip(arr1, arr2);
    assert.deepEqual(result, [[2, "a"], [4, "b"], [6, "c"], [8, "d"]]);
  });
  it("work with Set", () => {
    const set1 = new Set([3, 5, 7]);
    const set2 = new Set(["a", "b", "c"]);
    const result = $.zip(set1, set2);
    assert.deepEqual(result, [[3, "a"], [5, "b"], [7, "c"]]);
  });
  it("work with generator", () => {
    function* gen1() {
      for (let i = 0; i < 3; i++) {
        yield i;
      }
    }
    function* gen2() {
      for (let i = 0; i < 5; i++) {
        yield i;
      }
    }
    const result = $.zip(gen1(), gen2());
    assert.deepEqual(result, [[0, 0], [1, 1], [2, 2]]);
  });
});
