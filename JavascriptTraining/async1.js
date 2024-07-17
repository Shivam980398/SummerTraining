setTimeout(() => {
  console.log("Api is loading....");
}, 2000);

let interval = setInterval(() => {
  console.log("Data of Hotel is fetching....");
}, 3000);

setTimeout(() => {
  clearInterval(interval);
}, 9000);
setTimeout(() => {
  console.log("Api is loading....");
}, 9000);
setTimeout(() => {
  console.log("Hotel is found");
}, 9000);
setTimeout(() => {
  console.log("Successfully fetched the data from the api");
}, 9000);
