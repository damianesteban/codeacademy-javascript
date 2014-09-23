// Let's make an Address Book!
// Digitizing People:
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888 - 8888",
    email: "mary.johnson@example.com"
};

console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.email);

var contacts = [bob, mary];

var printPerson = function(person) {
    console.log(person.firstName + " " + person.lastName);
};

printPerson(contacts[0]);
printPerson(contacts[1]);

// Directions:
// 1 - Create a function called list that does
// not take any parameters.
// 2 - At the start of the function, define a variable
// to store the number of items in the contacts array.
// Call it contactsLength.
// 3 - All of the items in an array are numbered,
// starting at 0. To cycle through all of the elements
// of the array, create a for loop that cycles from 0
// up to one less than the number of items in the contacts array.
// 4 - Inside of the loop, add code to call printPerson,
//  passing in the element of the array that the loop is
//  currently at.
// 5 - At the very bottom of the file, call the list
// function. The list function should then loop through
// every member of the contacts array and print its
// information.
function list() {
    contactsLength = contacts.length;
    for (i = 0; i < contactsLength; i++) {
        printPerson(contacts[i]);
    }
}

list();

// Directions:
// 1 - Create a function called search that takes a parameter called lastName.
// Leave the list function alone.
// 2 - Like with the last exercise, define a variable and store the number
//  of items in the array in it. (Since every function has its own context,
//  or scope, you can call this variable contactsLength, too, if you like!)
// 3 - Create a for loop that runs through all of the items in the array.
//  For this step, the code for search is identical to that of list.
// 4 - The twist comes here: in the body of the loop, rather than printing out
//  every single item in the array, add an if statement that checks to see if the
//  lastName property of the object is equal to the lastName argument.
// Have the function run printPerson on the person if and only if the lastName
// property of the person matches the lastName argument.
// 5 - At the bottom of the file, call the search function, passing in "Jones"
// as the last name to search for.
function search(lastName) {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        if (contacts[i].lastName == lastName) {
            printPerson(contacts[i]);
        }
    }
}

search("Jones");

// Directions:
// 1 - Create a function called add with the parameters firstName,
// lastName, and email, phoneNumber.
// 2 - In this new function, you want to create a new contact object
//  like bob and mary. Instead of having this object's property values
//  be filled with strings though, set them tho the appropriate function
// parameters passed in.
// 3 - Add this new contact object to the contacts array.
// 4 - Call add with whatever first name, last name, phone number,
//  and email arguments you like.
// 5 - Make sure you call the list function, to check if your new entry
// is added. And delete any other function that logs output in the console,
// i.e 'search' function.
function add(firstName, lastName, email, phoneNumber) {
    var friend = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber
    };
    contacts.push(friend);
}

add("Ray", "Rayson", "ray@ray.com", "(222) 222 - 2222");

list();
