console.log(1);

setTimeout(() => console.log(2), 200);

new Promise((resolve) => {
  setTimeout(() => resolve(console.log(3)), 100);
});

console.log(4);
