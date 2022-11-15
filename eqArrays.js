const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('\033[42m', `⭐️ Assertion Passed:`, '\033[0m', `${actual} === ${expected}`);
  } else {
    console.log('\033[41m', `🚨 Assertion Failed:`, '\033[0m', `${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) continue;
    return false;
  }

  return true;
};

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should FAIL
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should FAIL
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2"]), false); // => should FAIL