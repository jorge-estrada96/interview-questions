class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log("Eating");
  }
}

class Dog extends Animal {
  constructor(name, weight, age) {
    super(name);
    this.weight = weight;
    this.age = age;
  }
  bark() {
    console.log(`${this.name} is barking`);
  }
}

Dog.prototype.jump = function () {
  console.log(`${this.name} is jumping`);
};

const gatsby = new Dog("gatsby", 12, 1);
gatsby.eat();
gatsby.bark();
gatsby.jump();

const ringo = new Dog("ringo", 10, 12);
ringo.jump();
