// Inheritance time!
// Let's make an animal class.
function Animal(name, numLegs) {
  this.name = name;
  this.numLegs = numLegs;
}

Animal.prototype.sayName = function() {
  console.log("Hello, my name is " + this.name);
};

// Let's define a Penguin class, but define the number of legs it has.
function Penguin(name) {
  this.name = name;
  this.numLegs = 2;
}

// And with the line below, the Penguin inherits properties from the Animal
// class!
Penguin.prototype = new Animal();

// And now, the Penguin class has inherited that sayName method!
var penguinFace = new Penguin("Penguin Face");
penguinFace.sayName();

// Not only that, but...
console.log(penguinFace.numLegs);
