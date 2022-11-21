const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      if (element === value) return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire",
//   space: "The Expanse"
// }

// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"),"comedy");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"),"sci_fi");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Scandal"),undefined);