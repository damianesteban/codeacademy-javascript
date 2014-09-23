// How do we tell the type of something in JavaScript?
// "typeof"
// complete these definitions so that they will have
// the appropriate types
var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log(typeof anObj);   // "object"
console.log(typeof aNumber); // "number"
console.log(typeof aString); // "string"

// How can we tell if an object has a specific property?
var myObj = {
    name: 'Ray'
};

console.log(myObj.hasOwnProperty('name'));     // true
console.log(myObj.hasOwnProperty('nickName')); // false

// Conditionals and hasOwnProperty
var suitcase = {
    shirt: "Hawaiian"
};

if (suitcase.hasOwnProperty("shorts")) {
    console.log(suitcase.shorts);
} else {
    suitcase.shorts = "Hawaiian Shorts";
    console.log(suitcase.shorts);
}

// How to for loop through an object's properties
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for (var property in nyc) {
    console.log(property);
}

// How do print out all of an object's properties
// and their values?  A for-in loop!
var justiceLeague = {
  fullTeamName: "The Justice League of America",
  teamLeader: "Batman (debatable)",
  teamMembers: "The Flash, Superman, Batman, Wonder Woman, Cyborg, Aquaman, Shazam",
  teamHeadQuarters: "The JLA Watchtower Satellite"
};

for (var properties in justiceLeague) {
  console.log(justiceLeague[properties]);
}
