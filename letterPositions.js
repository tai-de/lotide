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

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    !results[letter] ? results[letter] = [i] : results[letter].push(i);
  }

  delete results[" "];

  return results;
};

result1 = letterPositions("lighthouse in the house");

assertArraysEqual(result1.h,[3, 5, 15, 18]);