const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it(`returns the correct letter count for "Hello"`, () => {
    assert.deepEqual(countLetters("Hello"), { h: 1, e: 1, l: 2, o: 1 });
  });

});