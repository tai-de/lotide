const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;

  for (let i = 0; i < arrayOne.length; i++) {
    if (Array.isArray(arrayOne[i]) || Array.isArray(arrayTwo[i])) {
      if (eqArrays(arrayOne[i], arrayTwo[i])) continue; // if results from recursion are OK, continue
      return false;
    }
    if (typeof arrayOne[i] === 'object' && !Array.isArray(arrayOne[i]) || typeof arrayTwo[i] === 'object' && !Array.isArray(arrayTwo[i])) {
      if (eqObjects(arrayOne[i], arrayTwo[i])) continue;
      return false;
    }
    if (arrayOne[i] !== arrayTwo[i]) return false;
  }

  return true;
};

module.exports = eqArrays;