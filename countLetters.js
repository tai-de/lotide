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

module.exports = countLetters;