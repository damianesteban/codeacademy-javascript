// Remember, you can figure out the type of an object by using:
// typeof myVariable;
// 1 - Examine the languages object. Three properties are
//  strings, whereas one is a number.
// 2 - Use a for-in loop to print out the three ways to say hello. In the
// loop, you should check to see if the property value is a string so you
// don't accidentally print a number.
var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

for (var greeting in languages) {
    if (typeof languages[greeting] === "string") {
        console.log(languages[greeting]);
    }
}

// output:
// Hello!
// Bonjour!
// Hola!
