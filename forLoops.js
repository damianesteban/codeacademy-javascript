// for loop syntax:
// for (var i = start; i < end; i++) {
//  // do something
// }

for (var i = 100; i > 0; i -= 5) {
    console.log(i);
}

names = ["Batman", "Superman", "Wonder Woman", "Aquaman", "Cyborg"];
for (i = 0; i <= 4; i++) {
    console.log("I know someone called " + names[i]);
}

//=============================================================
var text = "My name is Damian.  Damian is so awesome.";
var myName = "Damian";
var hits = [];

for (var i = 0; i < text.length; i++) {
    if (text[i] === myName[0]) {
        for (var j = i; j < (i + myName.length); j++)  {
            hits.push(text[j]);
        }
    }
}

if (hits.length <= 0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}
