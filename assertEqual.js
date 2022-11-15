const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('\033[42m', `⭐️ Assertion Passed:`, '\033[0m', `${actual} === ${expected}`);
  } else {
    console.log('\033[41m', `🚨 Assertion Failed:`, '\033[0m', `${actual} !== ${expected}`);
  }
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Tai", "Tai");
// assertEqual(13, 23);
// assertEqual(23, "23");