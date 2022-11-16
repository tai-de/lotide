const assertArraysEqual = function(actual, expected) {
  let result = eqArrays(actual, expected);
  if (result) return console.log('\033[42m', `### Assertion Passed ###`, '\t\033[0m', `${actual} \t === \t ${expected}`);
  console.log('\033[41m', `### Assertion Failed ###`, '\t\033[0m', `${actual} \t !== \t ${expected}`);
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) continue;
    return false;
  }

  return true;
};