// The logical operator "and" is written like this:
true && true;    // => true
true && false;   // => false
false && true;   // => false
false && false;  // => false

// Example:
var hungry = true;
var foodHere = true;

var eat = function() {
  if (hungry && foodHere) {
      return true;
  } else {
      return false;
  }
};
