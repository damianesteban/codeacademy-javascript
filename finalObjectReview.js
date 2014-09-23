// Final Object Review
// We have two main ways to instantiate objects in JavaScript:
// 1 - Literal Notation -
// creates a single object. Literal notation uses curly brackets { }
//  and the object's default properties are defined within the brackets
//  using property:value notation.
//  2 - Constructor Notation -
//  involves defining an object constructor. And like defining a
//  function, we use the function keyword. You can think of this
//  constructor as a "template" from which you can create multiple objects.
//  To create a new object from a constructor, we use the new keyword.
var james = {
    job: 'programmer',
    married: false
};

function Person(job, married) {
    this.job = job;
    this.married = married;
}

// create a "gabby" object using the Person constructor!
var gabby = new Person("student", true);

// Recall that we can add methods (i.e. functions associated with objects)
// to a constructor.  See here:
function someObject() {
  this.someMethod = function() {
  };
}

// If we made a new method via:
// var someObj = new someObject();
// And then called:
// someObj.someMethod();
// The above code in the brackets would run (as the object was instantiated.)

// Another Example:
function Person(job, married) {
    this.job = job;
    this.married = married;
    this.speak = function() {
        console.log("Hello!");
    };
}

var user = new Person("Codecademy Student",false);
user.speak();

// Functions can also be added to literal constructions:
var ray = {
  job: "homeless",
  married: false,
  speak: function(words) {
    console.log("I'm Ray!  I'm homeless!  I'm also really good at " + words);
  }
};

ray.speak("nothing!");
