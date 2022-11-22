const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it(`returns the correct name count for a given array and object`, () => {
    const words = ["Jason", "Jason", "Fang", "Agouhanna"];
    const count = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
    assert.deepEqual(countOnly(words, count), { Jason: 2, Karima: undefined, Fang: 1 });
  });

});