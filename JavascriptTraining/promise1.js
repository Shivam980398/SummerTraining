// Promise
// Promise ekya hai
// Ek way hai to handle asynchronous operation in javascript
// Asssynchrounous operation wo hote hai jo perform hone ke liye kuch time lete hai
// Jaise fetching data from Api
// REading file from a disk
// isme kya hota hai usko current location se dusre location mai jana padta hai data lene ke liye jisme usko time lgta hai

// Promise ke 3 state hote hai
// Pending
// Resolve
// Reject

// Ab dekhte hai Promise create kaise krte hai

let mypromise = new Promise((found, notFound) => {
  //   found();
  notFound();
});

mypromise
  .then(() => {
    console.log("Data is found");
  })
  .catch(() => {
    console.log("Error to find data");
  });
