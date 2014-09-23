// Object Properties
// Objects have properties and values
// =====================================
var Spencer = {
  age: 22,
  country: "United States"
};

// We can save object properties to variables:
// ========================================
var bob = {
  name: "Bob Smith",
  age: 30
};
var susan = {
  name: "Susan Jordan",
  age: 25
};

// Here is susan1, in literal notation
// =========================================
var susan1 = {
  name: "Susan Jordan",
  age: 24
};
// Make a new susan2 object, using a constructor instead
// =========================================
var susan2 = new Object();
susan2.name = "Susan Jordan";
susan2.age = 24;
// here we save Bob's information
var name1 = bob.name;
var age1 = bob.age;
// finish this code by saving Susan's information
var name2 = susan.name;
var age2 = susan.age;

// And we can save object properties like this:
// Take a look at our next example object, a dog
// ============================================
var dog = {
  species: "greyhound",
  weight: 60,
  age: 4
};

var species = dog["species"];
// fill in the code to save the weight and age using
// bracket notation
var weight = dog["weight"];
var age = dog["age"];
