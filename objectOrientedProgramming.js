// OOP!  When you make a constructor, you are in face making a "class"!
// A class can be thought of as a "type", or a category of objects.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var bob = new Person("Bobby", 23);
var suzy = new Person("Suzy", 45);

function Circle(radius) {
  this.radius = radius;
}

var circle = new Circle(34);
