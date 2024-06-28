// extending classes

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

class Expedtion extends Holiday {
  constructor(destination, days, gear) {
    //call the parent class constructor and pass the params
    super(destination, days);
    this.gear = gear;
  }
  info() {
    super.info();
    const [camera, ...rest] = this.gear;
    console.log(`bring ${rest} and ${camera}`);
  }
}

const travel = new Expedtion("everest", 30, [
  "sunglasses",
  "snowboots",
  "camera",
]);

travel.info();
