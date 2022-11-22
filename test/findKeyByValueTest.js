const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it(`returns the correct key when given a simple object and property to search by`, () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
      space: "The Expanse"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });
  it(`returns the undefined when the given object does not have the matching property`, () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
      space: "The Expanse"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Scandal"), undefined);
  });

});