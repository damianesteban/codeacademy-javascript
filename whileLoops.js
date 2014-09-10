// When you use a number in a condition, as we
// did earlier, JavaScript understands 1 to mean
// true and 0 to mean false.
var understand = true;

while(understand === true ){
    console.log("I'm learning while loops!");
    understand = false;
}

// Brevity is the soul of programming
var bool = true;

while(bool){
    console.log("Less is more!");
    bool = false;
}

// while loops!
theValue = 4;
var loop = function(){
    while(theValue > 1){
        console.log("I'm looping!");
        theValue -= 1;
   }
};

loop();

// another while loop
var value = false;
var soloLoop = function(){
    while(!value) {
        console.log("Looped once!");
        value = true;
      }
};

soloLoop();

// while..do loop
var getToDaChoppa = function(){
    var loopCondition = true
    do {
        loopCondition = false;
        console.log("yay!");
       } while (loopCondition);
}

getToDaChoppa();

// A few more examples.
for (i = 10; i < 10; i -= 1) {
    console.log("Countdown!");
}

var condition = true;
while (condition) {
    console.log("It's " + condition);
    condition = false;
}

secondCondition = false;
do {
    console.log("It's " + secondCondition);
    secondCondition = true;
} while (!secondCondition);
