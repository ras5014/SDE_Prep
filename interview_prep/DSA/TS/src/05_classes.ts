// Interface
// interface PersonInterface {
//   id: number;
//   name: string;
//   age?: number; // Optional
//   register(): string;
// }

// class Person implements PersonInterface {}

// Classes
class Person {
  // Public by default
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    console.log("Person created");
  }

  // methods
  register() {
    return `${this.name} is now registered`;
  }
}

const brad = new Person(1, "Brad");
const john = new Person(2, "John");

console.log(brad, john);
console.log(brad.register());

// Accessing private property outside of class is not allowed
// brad.id = 100; or console.log(brad.id);
// With protected property, it can be accessed in derived classes / extended classes
