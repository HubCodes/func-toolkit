const assert = require("assert");
const $ = require("../");

describe("foldRight test", () => {
  let zeroToHundred = [...Array(101).keys()];
  it("work with array", () => {
    const result = $.foldRight(zeroToHundred, 0)((n, acc) => acc + n);
    assert.equal(result, 5050);
  });
  it("work with Set", () => {
    const set = new Set(zeroToHundred);
    const result = $.foldRight(set, 0)((n, acc) => acc + n);
    assert.equal(result, 5050);
  });
  it("work with generator", () => {
    function* zeroTo100() {
      for (let i = 0; i <= 100; i += 1) {
        yield i;
      }
    }
    const result = $.foldRight(zeroTo100(), 0)((n, acc) => acc + n);
    assert.equal(result, 5050);
  });
  it("work with Map", () => {
    const map = new Map();
    for (let i = 0; i <= 100; i++) {
      map.set(i, i * 2);
    }
    const result = $.foldRight(map, 0)((n, acc) => acc + n[0]);
    assert.equal(result, 5050);
  });
});
