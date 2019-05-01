const assert = require("assert");
const $ = require("../");

describe("distinct test", () => {
  const array = [1, 1, 2, 2, 3, 4, 6];
  it("work with array", () => {
    const result = $.distinct(array);
    assert.deepEqual(result, [1, 2, 3, 4, 6]);
  });
  it("work with generator", () => {
    function* generator() {
      for (let i = 0; i < 6; i++) {
        yield i;
        yield i;
      }
    }
    const result = $.distinct(generator());
    assert.deepEqual(result, [0, 1, 2, 3, 4, 5]);
  });
  it("work with string", () => {
    const string = "LLLOOREADMSE";
    const result = $.distinct(string);
    assert.deepEqual(result.join(""), "LOREADMS");
  });
});
