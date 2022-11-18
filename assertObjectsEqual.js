const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let result = eqObjects(actual, expected);
  if (result) return console.log('\033[42m', `### Assertion Passed ###`, '\t\033[0m', `${inspect(actual)} \t === \t ${inspect(expected)}`);
  console.log('\033[41m', `### Assertion Failed ###`, '\t\033[0m', `${inspect(actual)} \t !== \t ${inspect(expected)}`);
};