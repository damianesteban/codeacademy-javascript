// Let's go up the prototype chain!
// All Objects in JavaScript ultimately inherit from
// Object.prototype, unless we change the Object's prototype
// (as we have below)
function Animal(name, numLegs) {
  this.name = name;
  this.numLegs = numLegs;
  this.isAlive = false;
}

function Penguin(name) {
  this.name = name;
  this.numLegs = 2;
}

function Emperor(name) {
  this.name = name;
  this.saying = "Waddle, Waddle!";
}

Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var myEmperor = new Emperor("Palpatine"); // Palpatine is a Penguin!

console.log(myEmperor.saying);  // "Waddle, Waddle!"
console.log(myEmperor.numLegs); // 2
console.log(myEmperor.isAlive); // false
