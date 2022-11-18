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

// Recursive tests

// console.log(eqObjects({ a: { z: 1, y: { m: [1, { a: 2 }] } }, b: 2 }, { a: { y: { m: [1, { a: 2 } ] }, z: 1 }, b: 2 })) // => true

// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false