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