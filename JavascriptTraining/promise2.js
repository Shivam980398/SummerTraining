let arr = [2, 4, 6, 8, 10, 12, 13];

let promiseArray = arr.map((element) => {
  return new Promise((resolve, reject) => {
    // Resolve with a message regardless of even or odd
    resolve(`${element} is ${element % 2 === 0 ? "even" : "odd"}`);
  });
});

Promise.all(promiseArray)
  .then((results) => {
    results.forEach((result) => {
      console.log(result);
    });
  })
  .catch((error) => {
    console.error(error); // This shouldn't be reached in the corrected code
  });
