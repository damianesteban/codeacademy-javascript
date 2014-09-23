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

// The logical operator "or" is written like this:
true || true;     // => true
true || false;    // => true
false || true;    // => true
false || false;   // => false

// Example:
// Declare your variables here!
var tired = true;
var bored = false;

var nap = function() {
  if ((tired && bored) || (tired || bored)) {
      return true;
  } else {
      return false;
  }
};

// The logical operator "not" is written like this:
!true;   // => false
!false;  // => true

var programming = false;

var happy = function() {
    if (!programming) {
        return true;
    } else {
        return false;
    }
}

