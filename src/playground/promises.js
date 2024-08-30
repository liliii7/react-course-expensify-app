const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("this is my resolved data");
    // resolve("this is my other resolved data");
    // reject('something went wrong')
  }, 1500);
});

console.log('before')

promise.then((data) => {
    console.log('1',data);
  }).then(() => {
    console.log('does this run?')
  });

console.log('after')