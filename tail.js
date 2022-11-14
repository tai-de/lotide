const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('\033[42m', `⭐️ Assertion Passed:`, '\033[0m', `${actual} === ${expected}`);
  } else {
    console.log('\033[41m', `🚨 Assertion Failed:`, '\033[0m', `${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let tailArray = array.slice(1);
  return tailArray;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
