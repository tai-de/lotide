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

const without = function(source, itemsToRemove) {
  let output = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.includes(source[i])) continue;
    output.push(source[i]);
  }
  return output;
};

// assertArraysEqual(without([1, 2, 3], [1]),[2, 3])
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"])

// console.log("ENSURING ORIGINAL ARRAY IS INTACT");
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);