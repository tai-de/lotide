const assertObjectsEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('\033[42m', `### Assertion Passed ###`, '\t\033[0m', `${actual} \t === \t ${expected}`);
  } else {
    console.log('\033[41m', `### Assertion Failed ###`, '\t\033[0m', `${actual} \t !== \t ${expected}`);
  }
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) return false;
  }

  return true;
};

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) return false; // stop function if different number of keys

  for (const key of object1Keys) { // begin loop through keys
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) { // if either key holds an array, use eqArrays to compare
      if (eqArrays(object1[key], object2[key])) continue; // if results from eqArrays are OK, continue to next key
      return false; // otherwise stop the function
    }
    if (object1[key] !== object2[key]) return false; // if not an array and primitive value, stop once differing value is found
    continue; // otherwise continue to next key
  }

  return true;
};

// // Primitive tests
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };

// assertEqual(eqObjects(ab,ba),true)
// assertEqual(eqObjects(ab,abc),false)

// // Array tests
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };

// assertEqual(eqObjects(cd, dc), true); // both have array values in key d
// assertEqual(eqObjects(cd, cd2), false); // cd2 has an extra value in d
