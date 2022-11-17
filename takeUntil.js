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

const takeUntil = function(array, callback) {
  const newArray = [];
  for (const element of array) {
    if (callback(element)) return newArray;
    newArray.push(element);
  }
  return newArray;
};

// //TESTS

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);