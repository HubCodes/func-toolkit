const assert = require("assert");
const $ = require("../");

const f = num => {
  return num + 4;
};

const g = num => {
  return num * 8;
};

const foo = (num, factor, adder) => {
  return num * factor + adder;
};

const bar = num => {
  return num * 3;
};

describe("compose test", () => {
  it("work with one argument", () => {
    const composed = $.compose(
      f,
      g
    );
    const result = composed(3);
    assert.equal(result, 28);
  });
  it("work with many arguments", () => {
    const composed = $.compose(
      bar,
      foo
    );
    const result = composed(3, 8, 4);
    assert.equal(result, 84);
  });
});
