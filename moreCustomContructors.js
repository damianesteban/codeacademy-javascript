// Custom Constructors continued...
// We don't have to define all the properties using parameters.
// Like so:
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles", 35);
var holden = new Person("Holden Caulfield", 16);

// and let's print them out:
console.log("sally's species is " + sally.species + " and she is " +
            sally.age);
console.log("holden's species is " + holden.species + " and he is " +
            holden.age);
