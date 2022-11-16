const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('\033[42m', `### Assertion Passed ###`, '\t\033[0m', `${actual} \t === \t ${expected}`);
  } else {
    console.log('\033[41m', `### Assertion Failed ###`, '\t\033[0m', `${actual} \t !== \t ${expected}`);
  }
};

const countLetters = function(string) {
  const trimmedString = string.replaceAll(" ", "");
  const output = {};

  for (const letter of trimmedString) {
    let value = letter.toLowerCase();
    !output[value] ? output[value] = 1 : output[value]++;
  }

  return output;
};

// const result1 = countLetters("Hello");

// assertEqual(result1.h,1);
// assertEqual(result1.l,2);