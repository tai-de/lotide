const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) return false; // stop function if different number of keys

  for (const key of object1Keys) { // begin loop through keys
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) { // if either key holds an array, use eqArrays to compare
      if (eqArrays(object1[key], object2[key])) continue; // if results from eqArrays are OK, continue to next key
      return false; // otherwise stop the function
    }
    if ((typeof object1[key] === 'object' && !Array.isArray(object1[key]) && object1[key] !== null) || (typeof object2[key] === 'object' && !Array.isArray(object2[key]) && object2[key] !== null)) {
      if (eqObjects(object1[key], object2[key])) continue; // if results from recursion are OK, continue
      return false;
    }
    if (object1[key] !== object2[key]) return false; // if not an array and primitive value, stop once differing value is found
  }

  return true;
};

module.exports = eqObjects;