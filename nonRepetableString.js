// Purpose: Finds the first non-repeating string in an array by excluding the current index and checking membership.
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

const word = words.find((word, index) => {
  const otherWords = words.toSpliced(index, 1);
  return !otherWords.includes(word);
});

console.log(word);
