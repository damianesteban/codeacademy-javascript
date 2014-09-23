// Arrays and Objects
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];
console.log(languages[2]);
console.log(languages.length);

// Iterating over an array:
for (i = 0; i < languages.length ; i++) {
    console.log(languages[i]);
}

// Multi-dimensional Arrays
newArray = [["Superman", "JLA", true],
  ["Ironman", "The Avengers", true],
  ["Thor", "The X-Men", false]];

// Jagged Arrays:
jagged = [["Batman", "Robin"],
  ["Superman", "Superboy", "Supergirl"],
  ["Green Arrow", "Speedy"]];

// Objects:
// Object Literal Notation:
var me = {
    name: "Damian",
    age: 35
};

// The Object Constructor:
var me = new Object();
me.name = "Damian";
me.age = 35;

// More Objects:
object1 = {
    color: "red",
    shape: "square",
    size: "small"
}

var object2 = new Object();
object2.color = "blue";
object2.shape = "triangle";
object2.size = "large";

var object3 = new Object();
object3.color = "green";
object3.shape = "rectangle";
object3.size = "medium";

// Another object:
//
var myOwnObject = new Object;
myOwnObject.name = "my object";
myOwnObject.shape = "trapezoid";
