const assert = require('assert');
const chai = require('chai');
const $ = require('..');

describe('PartialFunction test', () => {
  const func2 = $.partialFunction((arg1) => arg1 > 0, (arg) => arg);
  it('will return 1 with argument 1, \'a\'', () => {
    const arg1 = 1;
    const arg2 = 'a';
    const func = $.partialFunction((arg1, arg2) => {
      return typeof arg1 == 'number' && typeof arg2 == 'string';
    }, (arg1, arg2) => {
      return arg1;
    });
    const result = func(arg1, arg2);
    assert.equal(result, arg1);
  });
  it('will throw Error', () => {
    const arg1 = -1;
    chai.expect(func2.bind(null, arg1)).to.throw('argument domain error');
  });
  it('should isDefinedAt returns true', () => {
    assert.equal(func2.isDefinedAt(10), true);
  });
});
