const matrix = [
  [1, 2, 3, 4],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
];

const totals = matrix.reduce(
  (acc, value, index) => {
    acc.ltr += matrix[index][index];
    acc.rtl += matrix[matrix.length - 1 - index][matrix.length - 1 - index];
    return acc;
  },
  { ltr: 0, rtl: 0 }
);

console.log(totals);
