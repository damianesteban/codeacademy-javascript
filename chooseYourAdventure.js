// Choose your own Adventure Part II
var user = prompt("Superman, Batman and Aquaman are in front of you.  Who will you face?").toLowerCase();

// Our switch statement
switch(user) {
    case 'superman':
        var courage = prompt("Are you courageous?").toLowerCase();
        var kryptonite = prompt("Do you have kryptonite?").toLowerCase();
        if (courage === "yes" && kryptonite === "yes") {
            console.log("Because you have courage and kryptonite, you destroy Superman.  Congragulations.");
        } else {
            console.log("Superman crushes you.");
        }
        break;
    case 'batman':
        var fast = prompt("Are you fast?");
        var pearls = prompt("Do you have a string of pearls with you?");
        if (fast === "yes" && pearls === "yes") {
            console.log("Because you are fast and you have a string of pearls that will freak Batman out, you win.");
        } else {
            console.log("Batman makes you his bitch.");
        }
        break;
    case 'aquaman':
        var swim = prompt("Can you swim?");
        var telepath = prompt("Are you a telepath?");
        if (swim === "yes" || telepath === "yes") {
            console.log("You chose the wrong opponent!  Nothing can defeat Aquaman!");
        } else {
            console.log("Aquaman feeds you to the fish.");
        }
        break;
    default:
        console.log("You pussy.  Go run away.");
}
