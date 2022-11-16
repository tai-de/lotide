const assertArraysEqual = function(arrayOne, arrayTwo) {
  let result = eqArrays(arrayOne, arrayTwo);
  if (result) return console.log('\033[42m', `### Assertion Passed ###`, '\t\033[0m', `${arrayOne} \t === \t ${arrayTwo}`);
  console.log('\033[41m', `### Assertion Failed ###`, '\t\033[0m', `${arrayOne} \t !== \t ${arrayTwo}`);
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) continue;
    return false;
  }

  return true;
};

const middle = function(array) {
  let middleIndex = Math.floor(array.length / 2);
  if (array.length < 3) return [];
  if (array.length % 2 === 0) return [array[middleIndex - 1], array[middleIndex]];
  return [array[middleIndex]];
};

// TESTS
// One or two items, return empty
// Odd numbers, return actual middle
// Even, return middle two
// assertArraysEqual(middle([1]), []); // return empty array since a single item array has no middle
// assertArraysEqual(middle([1, 2]), []); // return empty array since a 2 item array has no middle
// assertArraysEqual(middle([1, 2, 3]),[2]); // return middle item since array length is odd
// assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // return middle item since array length is odd
// assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]); // return middle two items since array length is even
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]); // return middle two items since array length is even
