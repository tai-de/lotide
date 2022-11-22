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