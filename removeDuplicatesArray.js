// Purpose: Removes duplicate strings from an array using filter with indexOf to keep first occurrences.
const words = [
  "manzana",
  "pera",
  "mango",
  "uva",
  "pera",
  "jitomate",
  "uva",
  "manzana",
];

const uniqueArray = words.filter((item, pos) => words.indexOf(item) == pos);

console.log(uniqueArray);
