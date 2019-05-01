const assert = require("assert");
const $ = require("../");

describe("drop test", () => {
  const array = [3, 4, 5, 6, 7, 8, 9];
  it("work with array", () => {
    const result = $.drop(array, 3);
    assert.deepEqual(result, [6, 7, 8, 9]);
  });
  it("work with Set", () => {
    const set = new Set(array);
    const result = $.drop(set, 2);
    assert.deepEqual(result, [5, 6, 7, 8, 9]);
  });
  it("work with generator", () => {
    function* zeroToTen() {
      for (let i = 0; i <= 10; i++) {
        yield i;
      }
    }
    const result = $.drop(zeroToTen(), 3);
    assert.deepEqual(result, [3, 4, 5, 6, 7, 8, 9, 10]);
  });
  it("work with Map", () => {
    const map = new Map();
    for (let i = 3; i <= 9; i++) {
      map.set(i, i * 2);
    }
    const result = $.drop(map, 4);
    assert.deepEqual(result, [[7, 14], [8, 16], [9, 18]]);
  });
  it("work with string", () => {
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const result = $.drop(str, 10).join("");
    assert.equal(result, "KLMNOPQRSTUVWXYZ");
  });
});
