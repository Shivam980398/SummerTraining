// Object And Array of Object in JS

let arrayObject = [
  {
    //0
    name: "WebDev",
    lastName: "code",
    age: 15,
  },
  {
    //1
    name: "WebDev1",
    lastName: "code",
    age: 15,
  },
  {
    //2
    name: "WebDev2",
    lastName: "code",
    age: 15,
  },
];
arrayObject.forEach((item, index) => {
  console.log(arrayObject[index].name);
});
