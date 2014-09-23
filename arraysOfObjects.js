// We can use what we know about arrays with our objects:
function superHero (name, superPower) {
  this.name = name;
  this.superPower = superPower;
}

var justiceLeague = new Array();
justiceLeague[0] = new superHero("Aquaman", "super-strength, telepathy");
justiceLeague[1] = new superHero("The Flash", "super-speed, hyper-intelligence");
justiceLeague[2] = new superHero("Superman", "everything");

console.log(justiceLeague);

// One more example:
// Our Person constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);

// loop through our new array
for (var i in family) {
    console.log(family[i].name);
}
