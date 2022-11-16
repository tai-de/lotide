const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('\033[42m', `### Assertion Passed ###`, '\t\033[0m', `${actual} \t === \t ${expected}`);
  } else {
    console.log('\033[41m', `### Assertion Failed ###`, '\t\033[0m', `${actual} \t !== \t ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      if(element === value) return key;
    }
  }
  return undefined;
};

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire",
//   space: "The Expanse"
// }

// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"),"comedy");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"),"sci_fi");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Scandal"),undefined);