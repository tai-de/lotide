const countOnly = function(allItems, itemsToCount) {
  const output = {};
  for (const item in itemsToCount) {
    if (itemsToCount[item]) {
      let count;
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i] === item) {
          !count ? count = 1 : count++;
        }
        output[item] = count;
      }
    }
  }
  return output;
};

module.exports = countOnly;

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);