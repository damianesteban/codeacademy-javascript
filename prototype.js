// What keeps track of what a given class can or cannot do?  That is the
// job of the prototype!
// JavaScript automatically defines the prototype for class with a constructor.
function Dog(breed) {
    this.breed = breed;
}

// Here we make buddy and teach him how to bark
var buddy = new Dog("Golden Retriever");
buddy.bark = function() {
  console.log("Woof, Woof, Bitch!");
};
buddy.bark;

var krypto = new Dog("Kryptonian Super Dog");
krypto.bark = function() {
  console.log("Snarl, I'm super!");
};

krypto.bark;

// Look at the code below.  Because we know that any Person will have the
// attributes name and age, we can create a function using this knowledge.
function Person(name,age) {
  this.name = name;
  this.age = age;
}

// a function that prints out the name of any given person
var printPersonName = function(p) {
  console.log(p.name);
};

var ray = new Person("Ray Roobag", 34);
printPersonName(ray);

var me = new Person("Superman", 33);
printPersonName(me);

// The code below is similar to above, with one important difference.
// Instead of using "krypto.bark" to add the bark method to krypto (see above),
// we are using "Dog.prototype.bark"
function Doggy (breed) {
  this.breed = breed;
}

// Now we make a new Doggy and teach him how to bark
var cujo = new Doggy("psycho-dog from Hell");
Doggy.prototype.bark = function () {
  console.log("I'm fucking crazy!! WOOOOOOF HOOOOOWL!!!!!");
};
cujo.bark();

var lassie = new Doggy("a terrier or something");
lassie.bark();

function Wildcat(name, breed) {
  this.name = name;
  this.breed = breed;
}

var tigger = new Wildcat("Tigger", "Tiger or Something");

Wildcat.prototype.growl = function() {
  console.log("Growl!");
};

tigger.growl();



