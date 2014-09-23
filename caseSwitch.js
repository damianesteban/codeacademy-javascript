// The switch statement:
var color = prompt("What's your favorite primary color?","Type your favorite color here");

switch(color) {
  case 'red':
    console.log("Red's a good color!");
    break;
  case 'blue':
    console.log("That's my favorite color, too!");
    break;
  case 'yellow':
    console.log("Green scares me!");
    break;
  default:
    console.log("I don't think that's a primary color!");
}

// If we don't add the "break" statements above, then the code for default
// will be executed as well.

// Another example:
var favoriteSuperHero = prompt("Who is your favorite superhero?");

switch(favoriteSuperHero) {
    case 'superman':
        console.log("Is it a bird?  Is it a plane?");
        break;
    case 'batman':
        console.log("Duh Nuh Nah Nah Nuh Nuh Nah Nah...");
        break;
    case 'aquaman':
        console.log("Mad respect.");
        break;
    default:
        console.log("You lose.");
}

