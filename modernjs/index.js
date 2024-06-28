// classes

class Holiday {
  //constructor
  constructor(destination, days) {
    this.destination = destination;
    this.days = days;
  }

  info() {
    console.log(`${this.destination} will take ${this.days} days.`);
  }
}

const trip = new Holiday("nepal", 30);
console.log(trip.info());
console.log(Holiday.prototype);
