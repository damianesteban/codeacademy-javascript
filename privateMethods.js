// Methods can also be private within a class and inaccessible outside
// of the class
function superHero (name, powers, team) {
  this.secretIdentity = name;
  this.superPowers = powers;
  this.team = team;

  // Using the var keyword makes this attribute private:
  var realName = "Arthur Curry";

  // And declaring the method below with the var keyword instead of "this"
  // makes this method private:
  var returnRealName = function() {
    return realName;
  };

  // So how can we access this publically?  Similar to accessing a private,
  // attribute, you must create a public method that returns the private method!
  this.askSecretName = function() {
    return returnRealName;
  };
}

var aquaman = new superHero("Aquaman", "Super-Strength, Telepathy, Badassness",
                            "JLA");

console.log(aquaman.returnRealName);  // undefined

var askSecretNameMethod = aquaman.askSecretName();
console.log(askSecretNameMethod); // this returns: [Function]
// Because "askSecretName" returns a method, we need to call it to use it.
// That's why we assign it to a variable below:
var secretName = askSecretNameMethod();
// And after it is assigned to a variabler, we call the method by printing
// it out:
console.log(secretName);
