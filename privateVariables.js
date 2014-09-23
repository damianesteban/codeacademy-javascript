// Private Variables
// What if an object wants to keep some information hidden?
// Just as functions can have local variables which can be
// accessed from within that function, objects can have private
// variables
function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  var bankBalance = 1000000;  // the var keyword makes this a private variable
}

// Now let's make a new person:
var warbucks = new Person("Daddy", "Warbucks", 94);
console.log(warbucks.bankBalance);    // this returns "undefined" bc it is private

// But there is a way around this.  We can define a public method that returns
// the value of a private variable.  Let's re-write our object
function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  var bankBalance = 1000000;  // the var keyword makes this a private variable
  // The method below let's us access the private variable.
  this.getBalance = function() {
    return bankBalance;
  };
}
// Again, let's make a new person:
var warbucks = new Person("Daddy", "Warbucks", 99);

// And let's create a new variable myBalance that calls getBalance()
var myBalance = warbucks.getBalance();

// And finally let's print it out
console.log(myBalance); // 1000000
