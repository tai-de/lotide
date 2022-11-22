const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it(`returns true for {a: 1, b: 2}, {a: 1, b: 2}`, () => {
    const objectOne = {a: 1, b: 2};
    const objectTwo = {a: 1, b: 2};
    assert.deepEqual(eqObjects(objectOne, objectTwo), true);
  });
  it(`returns false for {a: 3, b: 3}, {a: 1, b: 2}`, () => {
    const objectOne = {a: 3, b: 3};
    const objectTwo = {a: 1, b: 2};
    assert.deepEqual(eqObjects(objectOne, objectTwo), false);
  });
  it(`returns false for {a: 1, b: '2'}, {a: 1, b: 2}`, () => {
    const objectOne = {a: 1, b: '2'};
    const objectTwo = {a: 1, b: 2};
    assert.deepEqual(eqObjects(objectOne, objectTwo), false);
  });

});