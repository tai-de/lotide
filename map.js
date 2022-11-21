const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// const words = ["never", "gonna", "give", "you", "up"];
// assertArraysEqual(map(words, word => word[0]), ["n", "g", "g", "y", "u"]);