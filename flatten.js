const flatten = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
        newArray = newArray.concat(flatten(array[i]));
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

module.exports = flatten;