function module1(module2) {
  console.log("Module1 is completed");
  module2();
}

function module2(module3) {
  console.log("Module2 is completed");
  module3();
}

function module3() {
  console.log("Module3 is completed");
}

module1(() => {
  module2(() => {
    module3();
  });
});
