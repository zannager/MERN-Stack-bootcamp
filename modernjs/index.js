// function and prototype

function Holiday(destination, days) {
  this.destination = destination;
  this.days = days;
}

Holiday.prototype.info = function () {
  console.log(`${this.destination} | ${this.days}`);
};

const nepal = new Holiday("nepal", 30);
console.log(nepal.destination, nepal.days);

const australia = new Holiday("Australia", 7);
console.log(australia.destination, australia.days);

nepal.info(); // Output: "nepal | 30"
australia.info(); // Output: "Australia | 7"
