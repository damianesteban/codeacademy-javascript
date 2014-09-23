// Intro to Object Methods
// First, let's review functions.  Example:
// Accepts a number x as input and returns its square
var square = function (x) {
  return x * x;
};

// Write the function multiply below
// It should take two parameters and return the product
var multiply = function(x, y) {
    return x * y;
};

// Example of Object Methods:
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;

bob.setAge = function(newAge) {
  bob.age = newAge;
}

bob.setAge(40);
bob.setAge(20);

bob.getYearOfBirth = function () {
  return 2014 - bob.age;
};

console.log(bob.getYearOfBirth()); // 1994
