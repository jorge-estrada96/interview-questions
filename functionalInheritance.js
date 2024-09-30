function animal(name) {
  this.name = name;
}

animal.prototype.eat = function () {
  console.log(`${this.name} is eating`);
};

function dog(name, weight, age) {
  animal.call(this, name);
  this.weight = weight;
  this.age = age;
}

dog.prototype = Object.create(animal.prototype);

const gatsby = new dog("gatsby", 10, 1);
gatsby.eat();
