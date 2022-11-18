const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let result = eqObjects(actual, expected);
  if (result) return console.log('\033[42m', `### Assertion Passed ###`, '\t\033[0m', `${inspect(actual)} \t === \t ${inspect(expected)}`);
  console.log('\033[41m', `### Assertion Failed ###`, '\t\033[0m', `${inspect(actual)} \t !== \t ${inspect(expected)}`);
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) return false;
  }

  return true;
};

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) return false; // stop function if different number of keys

  for (const key of object1Keys) { // begin loop through keys
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) { // if either key holds an array, use eqArrays to compare
      if (eqArrays(object1[key], object2[key])) continue; // if results from eqArrays are OK, continue to next key
      return false; // otherwise stop the function
    }
    if ((typeof object1[key] === 'object' && !Array.isArray(object1[key]) && object1[key] !== null) || (typeof object2[key] === 'object' && !Array.isArray(object2[key]) && object2[key] !== null)) {
      if (eqObjects(object1[key], object2[key])) continue; // if results from recursion are OK, continue
      return false; 
    }
    if (object1[key] !== object2[key]) return false; // if not an array and primitive value, stop once differing value is found
    continue; // otherwise continue to next key
  }

  return true;
};