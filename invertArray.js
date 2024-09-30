const items = [1, 2, 3, 4, 5];
const invertedItems = items.map(
  (item, index) => items[items.length - 1 - index]
);
console.log(invertedItems);
