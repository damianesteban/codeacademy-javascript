// Let's make a contact list.
// Here is one way to make an object and to add
// other objects to it:
var names = {
  bill: {},
  steve: {}
};
// Or we could declare an object like this:
thing = new Object();
// And add to it like this:
thing[smallThing] = {};
// Or add to it like this:
thing.mediumThing = {};
// Or and combination of the above.
//===========================================
// Let's make our contact list:
var friends = {
    bill: {
        firstName: "Bill",
        lastName:  "Grates",
        number:    "6666666666"},
    steve: {
        firstName: "Steve",
        lastName:  "Fobs",
        number:    "8675309"}
};

var list = function(obj) {
  for(var prop in obj) {
    console.log(prop);
  }
};


var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};

list(friends);
search("Steve");
