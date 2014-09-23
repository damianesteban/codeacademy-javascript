// In JavaScript, all properties of an object are
// automatically public.  Public means that they can be accessed
// outside the class.  Think of these properties as the information a class
// is willing to share.

// Look at this class:
function Person (first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

// The above class has three public properties: firstName, lastName and age.
var john = new Person('John', 'Smith', 30);
var myFirst = john.firstName;
var myLast = john.lastName;

// Above we access the firstName and lastName properties of john and assign them
// to myFirst and myLast. We are free to access these properties, as they are public.
var myAge = john.age;
