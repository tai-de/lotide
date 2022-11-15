const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('\033[42m', `⭐️ Assertion Passed:`, '\033[0m', `${actual} === ${expected}`);
  } else {
    console.log('\033[41m', `🚨 Assertion Failed:`, '\033[0m', `${actual} !== ${expected}`);
  }
};

const head = array => array[0];

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), "Hello"); //undefined
// assertEqual(head(["Hello"]), "Hello");