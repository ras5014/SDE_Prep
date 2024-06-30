class Enemy {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  attack() {
    console.log(`${this.name} is attacking`);
  }
}

class Vampire extends Enemy {
  bite() {
    console.log(`${this.name} is biting`);
  }
}

const enemy = new Enemy("John", 25);
enemy.attack(); // This Abstaction

const vampire = new Vampire("Dracula", 100);
vampire.attack(); // This Abstaction
vampire.bite(); // This Abstaction
