// And finally, let's go over properties
// We can use dot notation to retrieve object properties:
// someObj.propName;
// or we can use bracket notation:
// someObj["propName"];
// With bracket notation, we can also use variables in whose brackets
// are property values:
// var someObj = {propName: someValue};
// someObj[myProperty]; (this line is exactly the same as using someObj["propName"];)
// Example:
var james = {
  job: "programmer",
  married: false
};

// set to the first property of "james"
var aProperty = "job";

// print the value of the first property of "james"
// using the variable "aProperty"
console.log(james[aProperty]);
