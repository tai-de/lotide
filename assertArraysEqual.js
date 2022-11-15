const assertArraysEqual = function(arrayOne, arrayTwo) {
  let result = false;

  if (arrayOne.length === arrayTwo.length) {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] === arrayTwo[i]) {
        result = true;
        continue;
      }
      result = false;
      break;
    }
  }

  if (result) return console.log('\033[42m', `⭐️ Assertion Passed:`, '\033[0m', `${arrayOne} === ${arrayTwo}`);
  console.log('\033[41m', `🚨 Assertion Failed:`, '\033[0m', `${arrayOne} !== ${arrayTwo}`);

};