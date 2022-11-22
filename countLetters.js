const countLetters = function(string) {
  const trimmedString = string.replaceAll(" ", "");
  const output = {};

  for (const letter of trimmedString) {
    let value = letter.toLowerCase();
    !output[value] ? output[value] = 1 : output[value]++;
  }

  return output;
};

module.exports = countLetters;