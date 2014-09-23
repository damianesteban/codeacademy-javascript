// Custom Constructors
// Adding in properties one at a time to objects is tedious.
// Instead of using the plain old Object constructor,
// we can make our own!
// That way we can set the properties for an object right when it
// is created.  We can make OUR Own object constructor!!!!
// Example:
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Let's make susan and bob again, using our constructor!
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susand Jordan", 25);
var george = new Person("George Washington", 275);
