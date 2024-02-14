// Refferance Type
// let obj1 = { value: 10 };
// let obj2 = obj1;
// let obj3 = { value: 10 };

// console.log(obj1 === obj2); // true
// console.log(obj1 === obj3); // false

class Player {
  constructor(name, type) {
    console.log("Contstructor called");
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`WEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");
wizard1.introduce();
