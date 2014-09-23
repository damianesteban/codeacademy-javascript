// The "this" keyword
// We can make a method work for any objects using
// a new keyword, "this"
// The keyword "this" acts as a placeholder, and will
// refer to whichever object called that method when
// the method is actually used.
var setAge = function (newAge) {
  this.age = newAge;
};

// now we make bob
var bob = new Object();
bob.age = 30;

// and down here we just use the method we already made.
// When we say:
bob.setAge = setAge;
// it means "whenever we type "bob.setAge()", "this.age"
// in the setAge method will refer to "bob.age"

// change bob's age to 50 here
bob.setAge(50);

// Now, we make susan:
var susan = new Object();
susan.age = 25;
susan.setAge = setAge;

// here, update Susan's age to 35 sing the method:
susan.setAge(35);

// another example:
var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};
// help by finishing this method
rectangle.setWidth = function(newWidth) {
    this.width = newWidth;
};

// here change the width to 8 and height to 6 using our new methods
rectangle.setWidth(8);
rectangle.setHeight(6);

