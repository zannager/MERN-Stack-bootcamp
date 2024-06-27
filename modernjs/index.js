//this keywoard

// function sayHi() {
//   console.log(this);
// }

// sayHi();

let australia = {
  cities: ["sydney", "melbourne", "adelaide"],
  printWithDash: function () {
    alert(this.cities.join(" - "));
  },
};

australia.printWithDash();
