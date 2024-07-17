function fetchPost() {
  return new Promise((res, rej) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        res(data);
      });
  });
}
fetchPost().then((post) => {
  
});
