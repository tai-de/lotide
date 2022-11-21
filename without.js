const without = function(source, itemsToRemove) {
  let output = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.includes(source[i])) continue;
    output.push(source[i]);
  }
  return output;
};

module.exports = without;

// assertArraysEqual(without([1, 2, 3], [1]),[2, 3])
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"])

// console.log("ENSURING ORIGINAL ARRAY IS INTACT");
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);