async function promisesAll(promises) {
  const outputs = [];

  for (const promise of promises) {
    const result = await promise;
    outputs.push(result);
  }

  return outputs;
}

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

promisesAll([promise3, promise1, promise2]).then((values) => {
  console.log(values);
});
