const string = "Lets count the repeats of the words in this string";
const splittedString = string.toLocaleLowerCase().split("");

const count = splittedString.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log(count);
