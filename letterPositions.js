const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    !results[letter] ? results[letter] = [i] : results[letter].push(i);
  }

  delete results[" "];

  return results;
};

module.exports = letterPositions;

// result1 = letterPositions("lighthouse in the house");

// assertArraysEqual(result1.h,[3, 5, 15, 18]);