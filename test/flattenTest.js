const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it(`returns the correct result after being passed an array`, () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it(`returns the correct result after being passed a nested array`, () => {
    assert.deepEqual(flatten([1, [2, 3], [4, 5], 6, [7]]), [1, 2, 3, 4, 5, 6, 7]);
  });
  it(`returns the correct result after being passed a multi-level nested array`, () => {
    assert.deepEqual(flatten([1, 2, [3, 4, [5, 6, [7, 8, [[[[[9, [10]]]]]]]]]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

});