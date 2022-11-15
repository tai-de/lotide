const assertArraysEqual = function(arrayOne, arrayTwo) {
  let result = eqArrays(arrayOne, arrayTwo);
  if (result) return console.log('\033[42m', `⭐️ Assertion Passed:`, '\033[0m', `${arrayOne} === ${arrayTwo}`);
  console.log('\033[41m', `🚨 Assertion Failed:`, '\033[0m', `${arrayOne} !== ${arrayTwo}`);
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) continue;
    return false;
  }

  return true;
};